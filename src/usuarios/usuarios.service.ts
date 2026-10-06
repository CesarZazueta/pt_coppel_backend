import { Injectable } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto.js';
import { UpdateUsuarioDto } from './dto/update-usuario.dto.js';
import { InjectRepository } from '@nestjs/typeorm';
import { Usuario } from './entities/usuario.entity.js';
import { Repository } from 'typeorm/browser/repository/Repository.js';
import { RegisterDto } from '../auth/dto/registe.dto.js';

@Injectable()
export class UsuariosService {

  constructor(
    @InjectRepository(Usuario)
    private readonly usuarioRepository: Repository<Usuario>
  ) {
  }

  async create(createUsuarioDto: RegisterDto) {
    return await this.usuarioRepository.save(createUsuarioDto);
  }

  async encontrarUsuarioPorUsuario(usuario: string): Promise<Usuario | null> {
    try {
      return await this.usuarioRepository.findOne({ where: { usuario } });
    } catch (error) {
      console.error('Error al buscar el usuario por usuario:', error);
      throw new Error('Error al buscar el usuario por usuario');
    }
  }

}
