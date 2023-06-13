import { EstateCategory, PostStatus ,PostType} from '@prisma/client';
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

export class CreatePostDto {
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

  @IsEnum(PostStatus)
  @IsOptional()
  postStatus: PostStatus

  @IsEnum(PostType)
  @IsOptional()
  postType: PostType


}
