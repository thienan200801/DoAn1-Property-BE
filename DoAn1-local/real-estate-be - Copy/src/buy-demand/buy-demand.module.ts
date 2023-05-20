import { Module } from '@nestjs/common';
import { BuyDemandController } from './buy-demand.controller';
import { BuyDemandService } from './buy-demand.service';

@Module({
  controllers: [BuyDemandController],
  providers: [BuyDemandService]
})
export class SellDemandModule {}
