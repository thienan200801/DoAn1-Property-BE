import {
    Body,
    Controller,
    Delete,
    Get,
    HttpCode,
    HttpStatus,
    NotFoundException,
    Param,
    ParseIntPipe,
    Patch,
    Post,
    Query,
    ValidationPipe,
  } from '@nestjs/common';
  import { GetUser } from '../auth/decorator';
  import { BuyDemandService } from './buy-demand.service';
  import {
    CreateBuyDemandDto,
    EditBuyDemandDto,
    GetBuyDemandDto,
  } from './dto';
  
  // @UseGuards(JwtGuard)
  @Controller('buy-demand')
  export class BuyDemandController {
    constructor(private buyDemandService: BuyDemandService) {}
  
    @Get()
    getBuyDemands(@Query() query: GetBuyDemandDto) {
      console.log(query);
      return this.buyDemandService.getBuyDemands(query);
    }
  
    @HttpCode(HttpStatus.OK)
    @Get(':id')
    getBuyDemandById(
      @Param('id', ParseIntPipe) buyDemandId: number,
    ) {
      return this.buyDemandService.getBuyDemandById(buyDemandId);
    }
  
    @HttpCode(HttpStatus.OK)
    @Post()
    createBuyDemand(
      @Body(new ValidationPipe({ transform: true }))
      dto: CreateBuyDemandDto,
    ) {
      console.log(dto.gallery);
      return this.buyDemandService.createBuyDemand(dto);
    }
  
    @HttpCode(HttpStatus.OK)
    @Patch(':id')
    async editBuyDemandById(
      @Param('id', ParseIntPipe) buyDemandId: number,
      @Body() dto: EditBuyDemandDto,
    ) {
      const buyDemand =
        await this.buyDemandService.getBuyDemandById(buyDemandId);
      if (!buyDemand) {
        throw new NotFoundException(
          'BuyDemand Not Found',
        );
      }
      return this.buyDemandService.editBuyDemandById(
        buyDemandId,
        dto,
      );
    }
  
    @HttpCode(HttpStatus.NO_CONTENT)
    @Delete(':id')
    async deleteBuyDemandById(
      @Param('id', ParseIntPipe) buyDemandId: number,
    ) {
      const buyDemand =
        await this.buyDemandService.getBuyDemandById(buyDemandId);
      if (!buyDemand) {
        throw new NotFoundException(
          'BuyDemand Not Found',
        );
      }
      return this.buyDemandService.deleteBuyDemandById(
        buyDemandId,
      );
    }
  }
  