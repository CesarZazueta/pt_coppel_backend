import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsuariosService } from './usuarios.service.js';
import { CreateUsuarioDto } from './dto/create-usuario.dto.js';
import { UpdateUsuarioDto } from './dto/update-usuario.dto.js';
import { RegisterDto } from '../auth/dto/registe.dto.js';

@Controller('usuarios')
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) {}

  @Post()
  create(@Body() createUsuarioDto: RegisterDto) {
    return this.usuariosService.create(createUsuarioDto);
  }

  @Get('buscar_por_usuario/:usuario')
  encontrarUsuarioPorUsuario(@Param('usuario') usuario: string) {
    return this.usuariosService.encontrarUsuarioPorUsuario(usuario);
  }

}
