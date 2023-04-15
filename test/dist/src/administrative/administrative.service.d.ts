import { HttpService } from '@nestjs/axios';
import { PrismaService } from '../prisma/prisma.service';
export declare class AdministrativeService {
    private readonly httpService;
    private prisma;
    constructor(httpService: HttpService, prisma: PrismaService);
    getProvince(): import(".prisma/client").PrismaPromise<import(".prisma/client").Province[]>;
    getDistrict(provinceId: any): import(".prisma/client").PrismaPromise<import(".prisma/client").District[]>;
    getWard(districtId: any): import(".prisma/client").PrismaPromise<import(".prisma/client").Ward[]>;
}
