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
} from '@nestjs/common';
import { GetUser } from '../auth/decorator';
import { ContactService } from './contact.service';
import {
  CreateContactDto,
  EditContactDto,
  GetContactDto,
} from './dto';

// @UseGuards(JwtGuard)
@Controller('contacts')
export class ContactController {
  constructor(
    private contactService: ContactService,
  ) {}

  @Get()
  getContacts(@Query() query: GetContactDto) {
    console.log(query);
    return this.contactService.getContacts(query);
  }

  @HttpCode(HttpStatus.OK)
  @Get(':id')
  getContactById(
    @Param('id', ParseIntPipe) contactId: number,
  ) {
    
    return this.contactService.getContactById(
      contactId,
    );
  }

  @HttpCode(HttpStatus.OK)
  @Post()
  createContact(@Body() dto: CreateContactDto) {
    return this.contactService.createContact(dto);
  }

  @HttpCode(HttpStatus.OK)
  @Patch(':id')
  async editContactById(
    @Param('id', ParseIntPipe) contactId: number,
    @Body() dto: EditContactDto,
  ) {
    const contact =
      await this.contactService.getContactById(
        contactId,
      );
    if (!contact) {
      throw new NotFoundException(
        'Contact Not Found',
      );
    }
    return this.contactService.editContactById(
      contactId,
      dto,
    );
  }

  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete(':id')
  async deleteContactById(
    @Param('id', ParseIntPipe) contactId: number,
  ) {
    const contact =
      await this.contactService.getContactById(
        contactId,
      );
    if (!contact) {
      throw new NotFoundException(
        'Contact Not Found',
      );
    }
    return this.contactService.deleteContactById(
      contactId,
    );
  }
}
