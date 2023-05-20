import { Injectable } from '@nestjs/common';
import { slugify } from '../utils';
import { PrismaService } from '../prisma/prisma.service';
import {
  CreatePropertyDto,
  EditPropertyDto,
  GetPropertyDto,
} from './dto';

@Injectable()
export class PropertyService {
  constructor(private prisma: PrismaService) {}

  getPropertys(queryParams: GetPropertyDto) {
    let priceFilter = {};
    let areaFilter = {};
    if (queryParams.priceFrom) {
      priceFilter['gte'] = queryParams.priceFrom;
    }
    if (queryParams.priceTo) {
      priceFilter['lte'] = queryParams.priceTo;
    }
    if (queryParams.areaFrom) {
      areaFilter['gte'] = queryParams.areaFrom;
    }
    if (queryParams.areaTo) {
      areaFilter['lte'] = queryParams.areaTo;
    }

    return this.prisma.property.findMany({
      where: {
        price: {
          ...priceFilter,
        },
        area: {
          ...areaFilter,
        },
        postStatus: queryParams.postStatus,
        province: queryParams.province,
        district: queryParams.district,
      },
    });
  }

  getPropertyById(propertyId: number) {
    return this.prisma.property.findFirst({
      where: {
        id: propertyId,
      },
    });
  }

  getPropertyBySlug(slug: string) {
    return this.prisma.property.findFirst({
      where: {
        slug: slug,
      },
    });
  }

  async createProperty(dto: CreatePropertyDto) {
    let slug = slugify(dto.name);
    let res = slug;
    let count = 0;
    do {
      const tag =
        await this.prisma.property.findUnique({
          where: {
            slug: res,
          },
        });
      if (tag) {
        count += 1;
        res = `${slug}-${count}`;
      } else {
        break;
      }
    } while (true);
    const property =
      await this.prisma.property.create({
        data: {
          ...dto,
          slug: res,
        },
      });

    return property;
  }

  async editPropertyById(
    propertyId: number,
    dto: EditPropertyDto,
  ) {
    return this.prisma.property.update({
      where: {
        id: propertyId,
      },
      data: {
        ...dto,
      },
    });
  }

  async deletePropertyById(propertyId: number) {
    await this.prisma.property.delete({
      where: {
        id: propertyId,
      },
    });
  }
}
