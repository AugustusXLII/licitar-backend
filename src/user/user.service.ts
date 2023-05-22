import { Injectable } from '@nestjs/common';
import { User } from './entities/user.entity';
import { UserDTO } from './dto/user.dto';
import { v4 as uuidv4 } from 'uuid';
import { UUID } from 'crypto';

const data: User[] = []

@Injectable()
export class UserService {

  create(user: UserDTO) {
    const item: User = new User();
    item.id = uuidv4();
    item.username = user.username;
    item.password = user.password;
    data.push(item);
    return ('Usuário Criado:' + item.id);
  }

  findAll() {
    return data;
  }

  findOne(id: UUID) {
    const response = data.find((data) => {return data.id === id;})

    if (response) {
      return response;
    }
    else { return 'Usuário Não Encontrado.'; }
  }

  findByUsername(username: string): User {
    return data.find(user => user.username === username);
  }

  update(id: UUID, user: User) {
    const targetIndex = data.findIndex((data) => {return data.id === user.id;})
    if (targetIndex !== -1) {
      data.splice(targetIndex, 1, user);
      return 'Usuário Atualizado: ' + user.id;
    }
    else { return 'Usuário Não Encontrado' }
  }

  remove(id: UUID) {
    const target = data.findIndex((data) => {return data.id === id;})
    data.splice(target, 1);

    if (target !== -1) {
      return 'Usuário Removido: ' + id;
    }
    else { return 'Usuário Não Encontrado.'; }
  }
}
