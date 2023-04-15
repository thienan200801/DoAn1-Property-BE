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
exports.PropertyService = void 0;
const common_1 = require("@nestjs/common");
const utils_1 = require("../utils");
const prisma_service_1 = require("../prisma/prisma.service");
let PropertyService = class PropertyService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    getPropertys(queryParams) {
        let priceFilter = {};
        let areaFilter = {};
        if (queryParams.priceFrom) {
            priceFilter['gte'] = queryParams.priceFrom;
        }
        if (queryParams.priceTo) {
            priceFilter['lte'] = queryParams.priceTo;
        }
        if (queryParams.areaFrom) {
            areaFilter['gte'] = queryParams.areaFrom;
        }
        if (queryParams.areaTo) {
            areaFilter['lte'] = queryParams.areaTo;
        }
        return this.prisma.property.findMany({
            where: {
                price: Object.assign({}, priceFilter),
                area: Object.assign({}, areaFilter),
                postStatus: queryParams.postStatus,
                province: queryParams.province,
                district: queryParams.district,
            },
        });
    }
    getPropertyById(propertyId) {
        return this.prisma.property.findFirst({
            where: {
                id: propertyId,
            },
        });
    }
    getPropertyBySlug(slug) {
        return this.prisma.property.findFirst({
            where: {
                slug: slug,
            },
        });
    }
    async createProperty(dto) {
        let slug = (0, utils_1.slugify)(dto.name);
        let res = slug;
        let count = 0;
        do {
            const tag = await this.prisma.property.findUnique({
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
        const property = await this.prisma.property.create({
            data: Object.assign(Object.assign({}, dto), { slug: res }),
        });
        return property;
    }
    async editPropertyById(propertyId, dto) {
        return this.prisma.property.update({
            where: {
                id: propertyId,
            },
            data: Object.assign({}, dto),
        });
    }
    async deletePropertyById(propertyId) {
        await this.prisma.property.delete({
            where: {
                id: propertyId,
            },
        });
    }
};
PropertyService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PropertyService);
exports.PropertyService = PropertyService;
//# sourceMappingURL=property.service.js.map