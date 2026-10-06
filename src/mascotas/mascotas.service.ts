import { Inject, Injectable } from '@nestjs/common';
import { CreateMascotaDto } from './dto/create-mascota.dto.js';
import { UpdateMascotaDto } from './dto/update-mascota.dto.js';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm/browser/repository/Repository.js';
import { Mascota } from './entities/mascota.entity.js';
import { Dueño } from '../dueños/entities/dueño.entity.js';

@Injectable()
export class MascotasService {


  constructor(
    @InjectRepository(Mascota)
    private readonly mascotaRepository: Repository<Mascota>,
    @InjectRepository(Dueño)
    private readonly dueñoRepository: Repository<Dueño>
  ) {

  }

  async create(createMascotaDto: CreateMascotaDto) {

    try {

      if (!createMascotaDto.dueño?.nombre_dueño || createMascotaDto.dueño?.nombre_dueño.trim() === '') {
        throw new Error('El dueño es obligatorio para crear una mascota.');
      }

      var dueño_db = new Dueño();
      dueño_db.nombre_dueño = createMascotaDto.dueño?.nombre_dueño || '';
      dueño_db.esta_activo = true;

      console.log('Dueño a crear:', dueño_db);

      const dueñoCreado = await this.dueñoRepository.save(dueño_db);

      const dueño_nombre = dueñoCreado.nombre_dueño;
      if (!dueño_nombre || dueño_nombre.trim() === '') {
        throw new Error('El dueño debe tener un nombre válido.');
      }

      const dueño_id_creado = dueñoCreado.id;

      let dueñoData = new Dueño();
      dueñoData.id = dueño_id_creado;

      var mascotadb = new Mascota();
      mascotadb.nombre_mascota = createMascotaDto.nombre_mascota;
      mascotadb.edad = createMascotaDto.edad;
      mascotadb.enfermedad = createMascotaDto.enfermedad;
      mascotadb.fecha_creacion = new Date();
      mascotadb.dueño = dueñoCreado;
      mascotadb.esta_activo = true;

      const mascota = await this.mascotaRepository.save(mascotadb);

      return mascota;
    }
    catch (error) {
      console.error('Error al crear la mascota:', error);
      throw new Error('Error al crear la mascota');
    }


  }

  async findAll() {
    try {
      const mascotas = await this.mascotaRepository.find({ relations: { dueño: true } });
      return mascotas;
    }
    catch (error) {
      console.error('Error al obtener las mascotas:', error);
      throw new Error('Error al obtener las mascotas');
    }
  }

  async findOne(id: number) {
    try {
      const mascota = await this.mascotaRepository.findOne({ where: { id }, relations: { dueño: true } });
      return mascota;
    }
    catch (error) {
      console.error('Error al obtener la mascota:', error);
      throw new Error('Error al obtener la mascota');
    }
  }

  async update(id: number, updateMascotaDto: UpdateMascotaDto) {
    try {
      const mascotadb = await this.findOne(id);

      if (mascotadb) {
        mascotadb.nombre_mascota = updateMascotaDto.nombre_mascota!;
        mascotadb.edad = updateMascotaDto.edad!;
        mascotadb.enfermedad = updateMascotaDto.enfermedad!;

        mascotadb.dueño.nombre_dueño = updateMascotaDto.dueño!.nombre_dueño;

        await this.dueñoRepository.save(mascotadb.dueño);

        const mascotaActualizada = await this.mascotaRepository.save(mascotadb);

        return mascotaActualizada;
      }

      return {
        message: 'Mascota no encontrada',
      };
    } catch (error) {
      console.error('Error al actualizar la mascota:', error);
      throw new Error('Error al actualizar la mascota');
    }
  }

  async EliminarMascota(id: number) {
    let mascotadb = await this.findOne(id);

    if (mascotadb) {
      let dueñodb = await this.dueñoRepository.findOne({ where: { id: mascotadb.dueño.id } });

      if (dueñodb) {
        dueñodb.esta_activo = false;
        await this.dueñoRepository.save(dueñodb);
      }

      mascotadb.esta_activo = false;
      await this.mascotaRepository.save(mascotadb);

      return { message: 'Mascota eliminada correctamente' };
    } else {
      return { message: 'Mascota no encontrada' };
    }
  }
}
