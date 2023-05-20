import { ProcessingStatus } from '@prisma/client';
import {
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

export class EditContactDto {
  @IsString()
  @IsOptional()
  noteByAdmin: string;

  @IsEnum(ProcessingStatus)
  @IsOptional()
  processingStatus: ProcessingStatus;
}
