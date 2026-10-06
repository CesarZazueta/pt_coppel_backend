import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller.js';
import { AuthService } from './auth.service.js';
import { UsuariosModule } from '../usuarios/usuarios.module.js';
import { JwtModule } from '@nestjs/jwt';


@Module({
  imports: [UsuariosModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: "1h" },
    }),

  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule { }
