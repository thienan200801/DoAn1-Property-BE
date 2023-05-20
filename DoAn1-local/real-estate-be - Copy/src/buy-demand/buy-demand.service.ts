import { Injectable } from '@nestjs/common';
import { slugify } from '../utils';
import { PrismaService } from '../prisma/prisma.service';
import {
  CreateBuyDemandDto,
  EditBuyDemandDto,
  GetBuyDemandDto,
} from './dto';

@Injectable()
export class BuyDemandService {
  constructor(private prisma: PrismaService) {}

  getBuyDemands(queryParams: GetBuyDemandDto) {
    return this.prisma.buyDemand.findMany({
      where: {
        ...queryParams,
      },
    });
  }

  getBuyDemandById(buyDemandId: number) {
    return this.prisma.buyDemand.findFirst({
      where: {
        id: buyDemandId,
      },
    });
  }

  async createBuyDemand(
    dto: CreateBuyDemandDto,
  ) {
    let slug = slugify(dto.name);
    let res = slug;
    let count = 0;
    do {
      const tag =
        await this.prisma.buyDemand.findUnique({
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
    const buyDemand =
      await this.prisma.buyDemand.create({
        data: {
          ...dto,
          slug: res,
        },
      });

    return buyDemand;
  }

  async editBuyDemandById(
    buyDemandId: number,
    dto: EditBuyDemandDto,
  ) {
    return this.prisma.buyDemand.update({
      where: {
        id: buyDemandId,
      },
      data: {
        ...dto,
      },
    });
  }

  async deleteBuyDemandById(
    buyDemandId: number,
  ) {
    await this.prisma.buyDemand.delete({
      where: {
        id: buyDemandId,
      },
    });
  }
}
