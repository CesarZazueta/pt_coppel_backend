import { Transform } from "class-transformer"
import {  IsString, MinLength } from "class-validator"

export class RegisterDto {

    @IsString()
    usuario: string

    @Transform(({ value }) => value?.trim())
    @IsString()
    @MinLength(6, { message: 'La contraseña debe tener al menos 6 caracteres' })
    contraseña: string

    @IsString()
    nombre: string

}