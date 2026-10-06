import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Dueño } from '../../dueños/entities/dueño.entity.js';
import { Type } from 'class-transformer';


@Entity()
export class Mascota {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(Type => Dueño, dueño => dueño.id, { nullable: false })
    dueño: Dueño;

    @Column()
    nombre_mascota: string;

    @Column()
    edad: number;

    @Column()
    enfermedad: String;

    @Column()
    fecha_creacion: Date;

    @Column({ default: true })
    esta_activo: boolean;
}
