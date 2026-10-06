import { Module } from '@nestjs/common';
import { createObserveModule } from '@nestjs/observe';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MascotasModule } from './mascotas/mascotas.module.js';
import { DueñosModule } from './dueños/dueños.module.js';
import { Dueño } from './dueños/entities/dueño.entity.js';
import { Mascota } from './mascotas/entities/mascota.entity.js';
import { UsuariosModule } from './usuarios/usuarios.module.js';
import { Usuario } from './usuarios/entities/usuario.entity.js';
import { AuthModule } from './auth/auth.module.js';
import { ConfigModule } from '@nestjs/config';


export const { ObserveModule, ObserveInstrument } = createObserveModule();

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // disponible en todo el app sin importar en cada módulo
    }),
    ObserveModule.forRoot({
      appKey: 'YOUR_APP_KEY',
      appSecret: 'YOUR_APP_SECRET',
      serviceId: 'pt-coppel_backend',
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      password: '12345',
      username: 'postgres',
      entities: [Mascota, Dueño, Usuario],
      database: 'veterinaria',
      schema: 'public',
      synchronize: true,
      logging: true,
    }),
    MascotasModule,
    DueñosModule,
    UsuariosModule,
    AuthModule,
  ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
