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
import { PostService } from './post.service';
import {
  CreatePostDto,
  EditPostDto,
  GetPostDto,
} from './dto';

// @UseGuards(JwtGuard)
@Controller('posts')
export class PostController {
  constructor(private postService: PostService) {}

  @Get()
  getPosts(@Query() query: GetPostDto) {
    console.log(query);
    return this.postService.getPosts(query);
  }

  @HttpCode(HttpStatus.OK)
  @Get('/:id')
  getPostById(
    @Param('id', ParseIntPipe) postId: number,
  ) {
    return this.postService.getPostById(postId);
  }

  @HttpCode(HttpStatus.OK)
  @Get('/slug/:slug')
  async getPostBySlug(
    @Param('slug') slug: string,
  ) {
    const post = await this.postService.getPostBySlug(slug);
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
  createPost(
    @Body(new ValidationPipe({ transform: true }))
    dto: CreatePostDto,
  ) {
    console.log(dto.gallery);
    return this.postService.createPost(dto);
  }

  @HttpCode(HttpStatus.OK)
  @Patch(':id')
  async editPostById(
    @Param('id', ParseIntPipe) postId: number,
    @Body() dto: EditPostDto,
  ) {
    const post =
      await this.postService.getPostById(postId);
    if (!post) {
      throw new NotFoundException(
        'Post Not Found',
      );
    }
    return this.postService.editPostById(
      postId,
      dto,
    );
  }

  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete(':id')
  async deletePostById(
    @Param('id', ParseIntPipe) postId: number,
  ) {
    const post =
      await this.postService.getPostById(postId);
    if (!post) {
      throw new NotFoundException(
        'Post Not Found',
      );
    }
    return this.postService.deletePostById(
      postId,
    );
  }
}
