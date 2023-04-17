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
import { PropertyService } from './property.service';
import {
  CreatePropertyDto,
  EditPropertyDto,
  GetPropertyDto,
} from './dto';

// @UseGuards(JwtGuard)
@Controller('properties')
export class PropertyController {
  constructor(private propertyService: PropertyService) {}

  @Get()
  getPropertys(@Query() query: GetPropertyDto) {
    return this.propertyService.getPropertys(query);
  }

  @HttpCode(HttpStatus.OK)
  @Get('/:id')
  getPropertyById(
    @Param('id', ParseIntPipe) propertyId: number,
  ) {
    return this.propertyService.getPropertyById(propertyId);
  }

  @HttpCode(HttpStatus.OK)
  @Get('/slug/:slug')
  async getPropertyBySlug(
    @Param('slug') slug: string,
  ) {
    const post = await this.propertyService.getPropertyBySlug(slug);
    console.log(post);
    if (!post) {
      throw new NotFoundException(
        'Post Not Found',
      );
    }
    return post;
  }

  @HttpCode(HttpStatus.OK)
  @Post()
  createProperty(
    @Body(new ValidationPipe({ transform: true }))
    dto: CreatePropertyDto,
  ) {
    console.log(dto.gallery);
    return this.propertyService.createProperty(dto);
  }

  @HttpCode(HttpStatus.OK)
  @Patch(':id')
  async editPropertyById(
    @Param('id', ParseIntPipe) propertyId: number,
    @Body() dto: EditPropertyDto,
  ) {
    const property =
      await this.propertyService.getPropertyById(propertyId);
    if (!property) {
      throw new NotFoundException(
        'Property Not Found',
      );
    }
    return this.propertyService.editPropertyById(
      propertyId,
      dto,
    );
  }

  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete(':id')
  async deletePropertyById(
    @Param('id', ParseIntPipe) propertyId: number,
  ) {
    const property =
      await this.propertyService.getPropertyById(propertyId);
    if (!property) {
      throw new NotFoundException(
        'Property Not Found',
      );
    }
    return this.propertyService.deletePropertyById(
      propertyId,
    );
  }
}
