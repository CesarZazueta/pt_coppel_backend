import { BadRequestException, Injectable } from '@nestjs/common';
import { UsuariosService } from '../usuarios/usuarios.service.js';
import { RegisterDto } from './dto/registe.dto.js';

import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {

    constructor(
        private readonly usuariosService: UsuariosService,
        private readonly jwtService: JwtService
    ) { }

    async register(registerDto: RegisterDto) {

        const existingUser = await this.usuariosService.encontrarUsuarioPorUsuario(registerDto.usuario);
        if (existingUser) {
            throw new BadRequestException('El usuario ya existe');
        }

        const hashedPassword = await bcrypt.hash(registerDto.contraseña, 10);
        registerDto.contraseña = hashedPassword;

        return await this.usuariosService.create(registerDto);
    }

    async login(usuario: string, contraseña: string) {
        try {
            const usuariodb = await this.usuariosService.encontrarUsuarioPorUsuario(usuario);
            if (!usuariodb) {
                throw new BadRequestException('Credenciales inválidas');
            }

            const isMatch = await bcrypt.compare(contraseña, usuariodb.contraseña);
            if (!isMatch) {
                throw new BadRequestException('Credenciales inválidas');
            }

            const payload = { sub: usuariodb.id, username: usuariodb.usuario };
            const token = await this.jwtService.signAsync(payload, { secret: process.env.JWT_SECRET });

            return {
                token,
                profile: {
                    id_usuario: usuariodb.id,
                    usuario: usuariodb.usuario
                }
            };
        }
        catch (error) {
            console.error('Error al iniciar sesion:', error);
            throw new Error('Error al buscar al iniciar sesion');
        }

    }

}
