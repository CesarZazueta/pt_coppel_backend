import { Module } from '@nestjs/common';
import { MascotasService } from './mascotas.service.js';
import { MascotasController } from './mascotas.controller.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Mascota } from './entities/mascota.entity.js';
import { Dueño } from '../dueños/entities/dueño.entity.js';

@Module({
  imports: [TypeOrmModule.forFeature([Mascota, Dueño])],
  controllers: [MascotasController],
  providers: [MascotasService],
})
export class MascotasModule {}
