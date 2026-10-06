import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MascotasService } from './mascotas.service.js';
import { CreateMascotaDto } from './dto/create-mascota.dto.js';
import { UpdateMascotaDto } from './dto/update-mascota.dto.js';
import { get } from 'http';

@Controller('mascotas')
export class MascotasController {
  constructor(private readonly mascotasService: MascotasService) {}

  @Post("crear_mascota")
  create(@Body() createMascotaDto: CreateMascotaDto) {
    return this.mascotasService.create(createMascotaDto);
  }

  @Get("obtener_mascotas")
  findAll() {
    return this.mascotasService.findAll();
  }

  @Get('obtener_mascota/:id')
  findOne(@Param('id') id: string) {
    return this.mascotasService.findOne(+id);
  }

  @Post('actualizar_mascota/:id')
  update(@Param('id') id: string, @Body() updateMascotaDto: UpdateMascotaDto) {
    return this.mascotasService.update(+id, updateMascotaDto);
  }

  @Get('eliminar_mascota/:id')
  remove(@Param('id') id: string) {
    return this.mascotasService.EliminarMascota(+id);
  }
}
