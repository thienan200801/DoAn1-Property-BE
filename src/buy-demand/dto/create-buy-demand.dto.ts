import { EstateCategory } from '@prisma/client';
import {
  Type
} from 'class-transformer';
import {
  IsArray,
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString
} from 'class-validator';

export class CreateBuyDemandDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsOptional()
  thumbnail: string;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  @Type(() => String)
  gallery: string[];

  @IsString()
  @IsOptional()
  description: string;
  
  @IsString()
  @IsOptional()
  district: string;

  @IsString()
  @IsNotEmpty()
  province: string;


  @IsString()
  @IsOptional()
  address: string;

  @IsInt()
  @IsOptional()
  area: number;

  @IsEnum(EstateCategory)
  estateCategory: EstateCategory;
}
