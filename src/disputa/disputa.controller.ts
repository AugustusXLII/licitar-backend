import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DisputaService } from './disputa.service';
import { stat } from 'fs';
import { Disputa } from './entities/disputa.entity';
import { UUID } from 'crypto';

@Controller('disputa')
export class DisputaController {
  constructor(private readonly disputaService: DisputaService) { }

  @Post()
  create() {
    return this.disputaService.create();
  }

  @Get()
  findAll() {
    return this.disputaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: UUID) {
    return this.disputaService.findOne(id);
  }

  @Patch(':disputa')
  update(@Body() disputa: Disputa) {
    return this.disputaService.update(disputa);
  }

  @Delete(':id')
  remove(@Param('id') id: UUID) {
    return this.disputaService.remove(id);
  }
}
