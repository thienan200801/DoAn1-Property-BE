import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import AdministrativeService from './administrative-v2.service';

@Controller('administrative/v2')
export class AdministrativeControllerVer02 {
  constructor(
    private administrativeService: AdministrativeService,
  ) {}

  @Get('provinces')
  async getProvinces() {
    const temp = await this.administrativeService.getProvince();
    console.log(temp);
    return temp;
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
