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
    Post
} from '@nestjs/common';
import { CreateTagDto, EditTagDto } from './dto';
import { TagService } from './tag.service';

// @UseGuards(JwtGuard)
@Controller('tags')
export class TagController {
  constructor(private tagService: TagService) {}

  @Get()
  getTags() {
    return this.tagService.getTags();
  }

  @HttpCode(HttpStatus.OK)
  @Get(':id')
  getTagById(
    @Param('id', ParseIntPipe) tagId: number,
  ) {
    return this.tagService.getTagById(tagId);
  }

  @HttpCode(HttpStatus.OK)
  @Post()
  createTag(@Body() dto: CreateTagDto) {
    return this.tagService.createTag(dto);
  }

  @HttpCode(HttpStatus.OK)
  @Patch(':id')
  async editTagById(
    @Param('id', ParseIntPipe) tagId: number,
    @Body() dto: EditTagDto,
  ) {
    const tag = await this.tagService.getTagById(
      tagId,
    );
    if (!tag) {
      throw new NotFoundException(
        'Tag Not Found',
      );
    }
    return this.tagService.editTagById(
      tagId,
      dto,
    );
  }

  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete(':id')
  async deleteTagById(
    @Param('id', ParseIntPipe) tagId: number,
  ) {
    const tag = await this.tagService.getTagById(
      tagId,
    );
    if (!tag) {
      throw new NotFoundException(
        'Tag Not Found',
      );
    }
    return this.tagService.deleteTagById(tagId);
  }
}