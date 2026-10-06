import { Injectable } from '@nestjs/common';
import { CreateDueñoDto } from './dto/create-dueño.dto.js';
import { UpdateDueñoDto } from './dto/update-dueño.dto.js';

@Injectable()
export class DueñosService {
  create(createDueñoDto: CreateDueñoDto) {
    return 'This action adds a new dueño';
  }

  findAll() {
    return `This action returns all dueños`;
  }

  findOne(id: number) {
    return `This action returns a #${id} dueño`;
  }

  update(id: number, updateDueñoDto: UpdateDueñoDto) {
    return `This action updates a #${id} dueño`;
  }

  remove(id: number) {
    return `This action removes a #${id} dueño`;
  }
}
