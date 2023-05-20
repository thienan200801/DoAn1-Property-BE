import { EstateCategory, PostStatus } from '@prisma/client';
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

export class CreatePropertyDto {
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
  content: string;

  @IsString()
  @IsNotEmpty()
  province: string;

  @IsString()
  @IsOptional()
  district: string;

  @IsString()
  @IsOptional()
  address: string;

  @IsInt()
  @IsOptional()
  area: number;

  @IsInt()
  price: number;


  @IsString()
  @IsOptional()
  estateCategory: string;

  @IsEnum(PostStatus)
  @IsOptional()
  postStatus: PostStatus

  @IsString()
  @IsOptional()
  iframe: string;
}
