import { Injectable } from '@nestjs/common';
import { slugify } from '../utils';
import { PrismaService } from '../prisma/prisma.service';
import {
  CreatePostDto,
  EditPostDto,
  GetPostDto,
} from './dto';

@Injectable()
export class PostService {
  constructor(private prisma: PrismaService) {}

  getPosts(queryParams: GetPostDto) {
    return this.prisma.post.findMany({
      where: {
        ...queryParams,
      },
    });
  }

  getPostById(postId: number) {
    return this.prisma.post.findFirst({
      where: {
        id: postId,
      },
    });
  }
  
  getPostBySlug(slug: string) {
    return this.prisma.post.findFirst({
      where: {
        slug: slug,
      },
    });
  }

  async createPost(dto: CreatePostDto) {
    let slug = slugify(dto.name);
    let res = slug;
    let count = 0;
    do {
      const tag =
        await this.prisma.post.findUnique({
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
    const post = await this.prisma.post.create({
      data: {
        ...dto,
        slug: res,
      },
    });

    return post;
  }

  async editPostById(
    postId: number,
    dto: EditPostDto,
  ) {
    return this.prisma.post.update({
      where: {
        id: postId,
      },
      data: {
        ...dto,
      },
    });
  }

  async deletePostById(postId: number) {
    await this.prisma.post.delete({
      where: {
        id: postId,
      },
    });
  }
}
