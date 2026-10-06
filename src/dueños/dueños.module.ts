import { Module } from '@nestjs/common';
import { DueñosService } from './dueños.service.js';
import { DueñosController } from './dueños.controller.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Dueño } from './entities/dueño.entity.js';

@Module({
  imports: [TypeOrmModule.forFeature([Dueño])],
  controllers: [DueñosController],
  providers: [DueñosService],
})
export class DueñosModule {}
