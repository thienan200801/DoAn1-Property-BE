import { DemandType } from '@prisma/client';
export declare class CreateContactDto {
    fullname: string;
    email?: string;
    phoneNumber: string;
    demandType: DemandType;
    message?: string;
}
