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
exports.TagService = void 0;
const common_1 = require("@nestjs/common");
const utils_1 = require("../utils");
const prisma_service_1 = require("../prisma/prisma.service");
let TagService = class TagService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    getTags() {
        return this.prisma.tag.findMany({});
    }
    getTagById(tagId) {
        return this.prisma.tag.findFirst({
            where: {
                id: tagId,
            },
        });
    }
    async createTag(dto) {
        let slug = (0, utils_1.slugify)(dto.name);
        let res = slug;
        let count = 0;
        do {
            const tag = await this.prisma.tag.findUnique({
                where: {
                    slug: res,
                },
            });
            console.log('tag:', tag);
            if (tag) {
                count += 1;
                res = `${slug}-${count}`;
            }
            else {
                break;
            }
        } while (true);
        const tag = await this.prisma.tag.create({
            data: Object.assign(Object.assign({}, dto), { slug: res }),
        });
        return tag;
    }
    async editTagById(tagId, dto) {
        return this.prisma.tag.update({
            where: {
                id: tagId,
            },
            data: Object.assign({}, dto),
        });
    }
    async deleteTagById(tagId) {
        await this.prisma.tag.delete({
            where: {
                id: tagId,
            },
        });
    }
};
TagService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], TagService);
exports.TagService = TagService;
//# sourceMappingURL=tag.service.js.map