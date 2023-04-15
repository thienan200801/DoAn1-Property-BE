import { ContactService } from './contact.service';
import { CreateContactDto, EditContactDto, GetContactDto } from './dto';
export declare class ContactController {
    private contactService;
    constructor(contactService: ContactService);
    getContacts(query: GetContactDto): import(".prisma/client").PrismaPromise<import(".prisma/client").Contact[]>;
    getContactById(contactId: number): import(".prisma/client").Prisma.Prisma__ContactClient<import(".prisma/client").Contact>;
    createContact(dto: CreateContactDto): Promise<import(".prisma/client").Contact>;
    editContactById(contactId: number, dto: EditContactDto): Promise<import(".prisma/client").Contact>;
    deleteContactById(contactId: number): Promise<void>;
}
