import { HttpService } from '@nestjs/axios';
import { PrismaService } from '../prisma/prisma.service';
export default class AdministrativeControllerVer02 {
    private readonly httpService;
    private prisma;
    constructor(httpService: HttpService, prisma: PrismaService);
    getProvince(): import("rxjs").Observable<any>;
    getDistrict(provinceId: any): import("rxjs").Observable<any>;
    getWard(districtId: any): import("rxjs").Observable<any>;
}
