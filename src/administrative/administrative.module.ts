import { Module } from '@nestjs/common';
import { AdministrativeController } from './administrative.controller';
import AdministrativeControllerVer2 from './administrative-v2.service';
import { AdministrativeService } from './administrative.service';
import { AdministrativeControllerVer02 } from './administrative-v2.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
  controllers: [
    AdministrativeController,
    AdministrativeControllerVer02,
  ],
  imports: [HttpModule.register({
    timeout: 5000,
    maxRedirects: 5,
  }),],
  providers: [
    AdministrativeService,
    AdministrativeControllerVer2,
  ],
})
export class AdministrativeModule {}
