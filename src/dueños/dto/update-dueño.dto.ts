import { PartialType } from '@nestjs/mapped-types';
import { CreateDueñoDto } from './create-dueño.dto.js';

export class UpdateDueñoDto extends PartialType(CreateDueñoDto) {}
