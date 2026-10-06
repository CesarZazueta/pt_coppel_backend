import {
    IsInt,
    IsNotEmpty,
    IsString,
    MinLength,
    ValidateNested,
} from 'class-validator';
import { Dueño } from '../../dueños/entities/dueño.entity.js';
import { Type } from 'class-transformer';



export class CreateMascotaDto {
    @IsString()
    @MinLength(2, { message: 'Name must have atleast 2 characters.' })
    nombre_mascota: string;

    @IsInt()
    @IsNotEmpty()
    edad: number;

    @IsString()
    @IsNotEmpty()
    enfermedad: string;

    @Type(() => Dueño)
  dueño?: Dueño;


}
