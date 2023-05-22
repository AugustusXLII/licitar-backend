/* eslint-disable no-var */
import { Injectable } from '@nestjs/common';
import { Disputa } from 'src/disputa/entities/disputa.entity';
import { Interval, SchedulerRegistry } from '@nestjs/schedule';
import { v4 as uuidv4 } from 'uuid';
import { UUID } from 'crypto';

const data: Disputa[] = []
let populateTimer = 0;

@Injectable()

export class DisputaService {

  constructor(private schedulerRegistry: SchedulerRegistry) { }


  //Funções utilitárias Não-Expostas

    //Inicia o servidor com 10 entradas, adicionadas uma por vez a cada 1 segundo

  @Interval('populateInterval', 1000)
  populateServerHandler() {
    if (populateTimer <= 10) {
      this.create();
      console.log('Populando Disputas... ' + populateTimer) + 'criada';
      populateTimer++;
    } else {
      populateTimer = 0;
      this.schedulerRegistry.deleteInterval('populateInterval');
    }
  }

    //Confere se há elementos expirados e os torna Fechados

  @Interval('checkInterval', 1000)
  scheduledTimeCheck() {
    const filteredData = data.filter(element => element.status === 'Aberto');

    filteredData.forEach(element => {
      if (element.createdTime <= Date.now() - 600000) {
        console.log(`Disputa Expirada - ID: ${element.id}`);
        element.status = 'Fechado'
      }
    });
  }

  //Funções CRUD

  create() {
    const item: Disputa = new Disputa();
    item.currentBid = 0;
    item.id = uuidv4();
    item.status = 'Aberto';
    item.createdTime = Date.now();
    data.push(item);
    return (`Disputa Criada: ${item.id}`);
  }

  findAll() {
    return data;
  }

  findOne(id: UUID) {
    const response = data.find((data) => {return data.id === id;})

    if (response) {
      return response;
    }
    else { return 'Disputa Não Encontrada.'; }
  }

  update(disputa: Disputa) {

    const targetIndex = data.findIndex((data) => {return data.id === disputa.id;})

    if (targetIndex !== -1) {
      data.splice(targetIndex, 1, disputa);
      return 'Disputa Atualizada: ' + disputa.id;
    }
    else { return 'Disputa Não Encontrada' }
  }

  remove(id: UUID) {

    const target = data.findIndex((data) => {return data.id === id;})
    data.splice(target, 1);

    if (target !== -1) {
      return 'Disputa Removida: ' + id;
    }
    else { return 'Disputa Não Encontrada.'; }

  }
}
