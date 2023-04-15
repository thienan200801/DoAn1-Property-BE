import { PostStatus } from "@prisma/client";
export declare class GetPropertyDto {
    postStatus: PostStatus;
    priceFrom: number;
    priceTo: number;
    areaFrom: number;
    areaTo: number;
    province: string;
    district: string;
}
