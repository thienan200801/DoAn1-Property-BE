import {
  DemandType,
  ProcessingStatus,
} from '@prisma/client';
import {
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

export class GetContactDto {
  @IsEnum(DemandType)
  @IsOptional()
  demandType: DemandType;

  @IsEnum(ProcessingStatus)
  @IsOptional()
  processingStatus: ProcessingStatus;
}
