import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import AdministrativeService from './administrative-v2.service';

@Controller('administrative')
export class AdministrativeController {
  constructor(
    private administrativeService: AdministrativeService,
  ) {}

  @Get('provinces')
  getProvinces() {
    return this.administrativeService.getProvince();
  }
  @Get('districts/p/:id')
  getDistricts(
    @Param('id', ParseIntPipe) provinceId: number,
  ) {
    return this.administrativeService.getDistrict(
      provinceId,
    );
  }
  @Get('wards/d/:id')
  getWards(
    @Param('id', ParseIntPipe) districtId: number,
  ) {
    return this.administrativeService.getWard(
      districtId,
    );
  }
}
