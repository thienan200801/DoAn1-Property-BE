import { DemandType } from '@prisma/client';
import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsNumberString,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateContactDto {
  @IsString()
  @IsNotEmpty()
  fullname: string;

  @IsEmail()
  @IsOptional()
  email?: string;

  @IsNumberString()
  @IsNotEmpty()
  phoneNumber: string;

  @IsEnum(DemandType)
  @IsNotEmpty()
  demandType: DemandType;

  @IsString()
  @IsOptional()
  message?: string;
}
