import { PostStatus, PostType } from "@prisma/client";
export declare class EditPostDto {
    name: string;
    thumbnail: string;
    gallery: string[];
    description: string;
    content: string;
    postStatus: PostStatus;
    postType: PostType;
}
