"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BuyDemandService = void 0;
const common_1 = require("@nestjs/common");
const utils_1 = require("../utils");
const prisma_service_1 = require("../prisma/prisma.service");
let BuyDemandService = class BuyDemandService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    getBuyDemands(queryParams) {
        return this.prisma.buyDemand.findMany({
            where: Object.assign({}, queryParams),
        });
    }
    getBuyDemandById(buyDemandId) {
        return this.prisma.buyDemand.findFirst({
            where: {
                id: buyDemandId,
            },
        });
    }
    async createBuyDemand(dto) {
        let slug = (0, utils_1.slugify)(dto.name);
        let res = slug;
        let count = 0;
        do {
            const tag = await this.prisma.buyDemand.findUnique({
                where: {
                    slug: res,
                },
            });
            if (tag) {
                count += 1;
                res = `${slug}-${count}`;
            }
            else {
                break;
            }
        } while (true);
        const buyDemand = await this.prisma.buyDemand.create({
            data: Object.assign(Object.assign({}, dto), { slug: res }),
        });
        return buyDemand;
    }
    async editBuyDemandById(buyDemandId, dto) {
        return this.prisma.buyDemand.update({
            where: {
                id: buyDemandId,
            },
            data: Object.assign({}, dto),
        });
    }
    async deleteBuyDemandById(buyDemandId) {
        await this.prisma.buyDemand.delete({
            where: {
                id: buyDemandId,
            },
        });
    }
};
BuyDemandService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], BuyDemandService);
exports.BuyDemandService = BuyDemandService;
//# sourceMappingURL=buy-demand.service.js.map