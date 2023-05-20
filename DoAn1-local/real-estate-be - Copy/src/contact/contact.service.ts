import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import {
  CreateContactDto,
  EditContactDto,
  GetContactDto,
} from './dto';

@Injectable()
export class ContactService {
  constructor(private prisma: PrismaService) {}

  getContacts(queryParams: GetContactDto) {
    return this.prisma.contact.findMany({
      where: {
        ...queryParams,
      },
    });
  }

  getContactById(contactId: number) {
    return this.prisma.contact.findFirst({
      where: {
        id: contactId,
      },
    });
  }

  async createContact(dto: CreateContactDto) {
    const contact =
      await this.prisma.contact.create({
        data: {
          ...dto,
        },
      });

    return contact;
  }

  async editContactById(
    contactId: number,
    dto: EditContactDto,
  ) {

    

    return this.prisma.contact.update({
      where: {
        id: contactId,
      },
      data: {
        ...dto,
      },
    });
  }

  async deleteContactById(contactId: number) {
    await this.prisma.contact.delete({
      where: {
        id: contactId,
      },
    });
  }
}
