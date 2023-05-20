import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AdministrativeService {
  constructor(
    private readonly httpService: HttpService,
    private prisma: PrismaService,
  ) {}

  getProvince() {
    return this.prisma.province.findMany({});
  }

  getDistrict(provinceId) {
    return this.prisma.district.findMany({
      where: {
        provinceId: provinceId,
      },
    });
  }

  getWard(districtId) {
    return this.prisma.ward.findMany({
      where: {
        districtId: districtId,
      },
    });
  }
}
