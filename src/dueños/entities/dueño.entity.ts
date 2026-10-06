import { IsOptional } from 'class-validator';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class Dueño {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre_dueño: string;

  @Column({ default: true })
  esta_activo: boolean;
    
}