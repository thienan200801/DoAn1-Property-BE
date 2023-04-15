import { PrismaService } from '../prisma/prisma.service';
import { CreatePropertyDto, EditPropertyDto, GetPropertyDto } from './dto';
export declare class PropertyService {
    private prisma;
    constructor(prisma: PrismaService);
    getPropertys(queryParams: GetPropertyDto): import(".prisma/client").PrismaPromise<import(".prisma/client").Property[]>;
    getPropertyById(propertyId: number): import(".prisma/client").Prisma.Prisma__PropertyClient<import(".prisma/client").Property>;
    getPropertyBySlug(slug: string): import(".prisma/client").Prisma.Prisma__PropertyClient<import(".prisma/client").Property>;
    createProperty(dto: CreatePropertyDto): Promise<import(".prisma/client").Property>;
    editPropertyById(propertyId: number, dto: EditPropertyDto): Promise<import(".prisma/client").Property>;
    deletePropertyById(propertyId: number): Promise<void>;
}
