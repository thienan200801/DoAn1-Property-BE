import { Injectable } from '@nestjs/common';
import { slugify } from '../utils';
import { PrismaService } from '../prisma/prisma.service';
import { CreateTagDto, EditTagDto } from './dto';

@Injectable()
export class TagService {
  constructor(private prisma: PrismaService) {}

  getTags() {
    return this.prisma.tag.findMany({});
  }

  getTagById(tagId: number) {
    return this.prisma.tag.findFirst({
      where: {
        id: tagId,
      },
    });
  }

  async createTag(dto: CreateTagDto) {
    let slug = slugify(dto.name);
    let res = slug;
    let count = 0;
    do {
      const tag =await this.prisma.tag.findUnique({
        where: {
          slug: res,
        },
      });
      console.log('tag:', tag);
      if (tag) {
        count += 1;
        res = `${slug}-${count}`;
      } else {
        break;
      }
    } while (true);

    const tag = await this.prisma.tag.create({
      data: {
        ...dto,
        slug: res,
      },
    });

    return tag;
  }

  async editTagById(
    tagId: number,
    dto: EditTagDto,
  ) {
    return this.prisma.tag.update({
      where: {
        id: tagId,
      },
      data: {
        ...dto,
      },
    });
  }

  async deleteTagById(tagId: number) {
    await this.prisma.tag.delete({
      where: {
        id: tagId,
      },
    });
  }
}
