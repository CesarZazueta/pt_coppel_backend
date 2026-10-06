import {
    IsString,
} from 'class-validator'

export class CreateDueñoDto {
    @IsString()
    nombre_dueño: string;

}
