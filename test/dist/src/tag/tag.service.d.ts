import { PrismaService } from '../prisma/prisma.service';
import { CreateTagDto, EditTagDto } from './dto';
export declare class TagService {
    private prisma;
    constructor(prisma: PrismaService);
    getTags(): import(".prisma/client").PrismaPromise<import(".prisma/client").Tag[]>;
    getTagById(tagId: number): import(".prisma/client").Prisma.Prisma__TagClient<import(".prisma/client").Tag>;
    createTag(dto: CreateTagDto): Promise<import(".prisma/client").Tag>;
    editTagById(tagId: number, dto: EditTagDto): Promise<import(".prisma/client").Tag>;
    deleteTagById(tagId: number): Promise<void>;
}
