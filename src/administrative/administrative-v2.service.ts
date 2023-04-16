import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { map } from 'rxjs';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export default class AdministrativeControllerVer02 {
  constructor(
    private readonly httpService: HttpService,
    private prisma: PrismaService,
  ) {}

  getProvince() {
    return this.httpService
      .get('https://provinces.open-api.vn/api/p')
      .pipe(map((response) => response.data));
  }

  getDistrict(provinceId) {
    return this.httpService
      .get(
        `https://provinces.open-api.vn/api/p/${provinceId}?depth=2`,
      )
      .pipe(map((response) => response.data));
  }

  getWard(districtId) {
    return this.httpService
      .get(
        `https://provinces.open-api.vn/api/d/${districtId}?depth=2`,
      )
      .pipe(map((response) => response.data));
  }
}
