import { EstateCategory } from "@prisma/client";
export declare class EditBuyDemandDto {
    name: string;
    thumbnail: string;
    gallery: string[];
    description: string;
    province: string;
    district: string;
    address: string;
    area: number;
    estateCategory: EstateCategory;
}
