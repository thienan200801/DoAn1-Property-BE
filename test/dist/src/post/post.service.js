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
exports.PostService = void 0;
const common_1 = require("@nestjs/common");
const utils_1 = require("../utils");
const prisma_service_1 = require("../prisma/prisma.service");
let PostService = class PostService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    getPosts(queryParams) {
        return this.prisma.post.findMany({
            where: Object.assign({}, queryParams),
        });
    }
    getPostById(postId) {
        return this.prisma.post.findFirst({
            where: {
                id: postId,
            },
        });
    }
    getPostBySlug(slug) {
        return this.prisma.post.findFirst({
            where: {
                slug: slug,
            },
        });
    }
    async createPost(dto) {
        let slug = (0, utils_1.slugify)(dto.name);
        let res = slug;
        let count = 0;
        do {
            const tag = await this.prisma.post.findUnique({
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
        const post = await this.prisma.post.create({
            data: Object.assign(Object.assign({}, dto), { slug: res }),
        });
        return post;
    }
    async editPostById(postId, dto) {
        return this.prisma.post.update({
            where: {
                id: postId,
            },
            data: Object.assign({}, dto),
        });
    }
    async deletePostById(postId) {
        await this.prisma.post.delete({
            where: {
                id: postId,
            },
        });
    }
};
PostService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PostService);
exports.PostService = PostService;
//# sourceMappingURL=post.service.js.map