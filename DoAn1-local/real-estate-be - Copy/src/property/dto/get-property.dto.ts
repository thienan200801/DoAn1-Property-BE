import { PostStatus } from "@prisma/client";
import { Type } from "class-transformer";
import { IsEnum, IsInt, IsOptional, IsString } from "class-validator";

export class GetPropertyDto {
    @IsEnum(PostStatus)
    @IsOptional()
    postStatus: PostStatus

    @IsInt()
    @IsOptional()
    @Type(() => Number)
    priceFrom: number

    @IsInt()
    @IsOptional()
    @Type(() => Number)
    priceTo: number

    @IsInt()
    @IsOptional()
    @Type(() => Number)
    areaFrom: number

    @IsInt()
    @IsOptional()
    @Type(() => Number)
    areaTo: number
    
    @IsString()
    @IsOptional()
    province: string

    @IsString()
    @IsOptional()
    district: string
}