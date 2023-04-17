import { PostStatus, PostType } from "@prisma/client";
import { IsEnum, IsOptional } from "class-validator";

export class GetPostDto {
    @IsEnum(PostStatus)
    @IsOptional()
    postStatus: PostStatus

    @IsEnum(PostType)
    @IsOptional()
    postType: PostType
}