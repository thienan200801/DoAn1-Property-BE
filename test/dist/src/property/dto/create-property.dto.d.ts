import { PostStatus } from '@prisma/client';
export declare class CreatePropertyDto {
    name: string;
    thumbnail: string;
    gallery: string[];
    description: string;
    content: string;
    province: string;
    district: string;
    address: string;
    area: number;
    price: number;
    estateCategory: string;
    postStatus: PostStatus;
    iframe: string;
}
