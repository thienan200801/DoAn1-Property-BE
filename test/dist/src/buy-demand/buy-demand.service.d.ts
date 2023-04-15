import { PrismaService } from '../prisma/prisma.service';
import { CreateBuyDemandDto, EditBuyDemandDto, GetBuyDemandDto } from './dto';
export declare class BuyDemandService {
    private prisma;
    constructor(prisma: PrismaService);
    getBuyDemands(queryParams: GetBuyDemandDto): import(".prisma/client").PrismaPromise<import(".prisma/client").BuyDemand[]>;
    getBuyDemandById(buyDemandId: number): import(".prisma/client").Prisma.Prisma__BuyDemandClient<import(".prisma/client").BuyDemand>;
    createBuyDemand(dto: CreateBuyDemandDto): Promise<import(".prisma/client").BuyDemand>;
    editBuyDemandById(buyDemandId: number, dto: EditBuyDemandDto): Promise<import(".prisma/client").BuyDemand>;
    deleteBuyDemandById(buyDemandId: number): Promise<void>;
}
