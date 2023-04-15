import { BuyDemandService } from './buy-demand.service';
import { CreateBuyDemandDto, EditBuyDemandDto, GetBuyDemandDto } from './dto';
export declare class BuyDemandController {
    private buyDemandService;
    constructor(buyDemandService: BuyDemandService);
    getBuyDemands(query: GetBuyDemandDto): import(".prisma/client").PrismaPromise<import(".prisma/client").BuyDemand[]>;
    getBuyDemandById(buyDemandId: number): import(".prisma/client").Prisma.Prisma__BuyDemandClient<import(".prisma/client").BuyDemand>;
    createBuyDemand(dto: CreateBuyDemandDto): Promise<import(".prisma/client").BuyDemand>;
    editBuyDemandById(buyDemandId: number, dto: EditBuyDemandDto): Promise<import(".prisma/client").BuyDemand>;
    deleteBuyDemandById(buyDemandId: number): Promise<void>;
}
