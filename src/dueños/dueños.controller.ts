import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DueñosService } from './dueños.service.js';
import { CreateDueñoDto } from './dto/create-dueño.dto.js';
import { UpdateDueñoDto } from './dto/update-dueño.dto.js';

@Controller('dueños')
export class DueñosController {
  constructor(private readonly dueñosService: DueñosService) {}

  @Post()
  create(@Body() createDueñoDto: CreateDueñoDto) {
    return this.dueñosService.create(createDueñoDto);
  }

  @Get()
  findAll() {
    return this.dueñosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.dueñosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDueñoDto: UpdateDueñoDto) {
    return this.dueñosService.update(+id, updateDueñoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.dueñosService.remove(+id);
  }
}
