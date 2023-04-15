import { PostStatus, PostType } from '@prisma/client';
export declare class CreatePostDto {
    name: string;
    thumbnail: string;
    gallery: string[];
    description: string;
    content: string;
    postStatus: PostStatus;
    postType: PostType;
}
