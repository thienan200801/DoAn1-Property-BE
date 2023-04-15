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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagController = void 0;
const common_1 = require("@nestjs/common");
const dto_1 = require("./dto");
const tag_service_1 = require("./tag.service");
let TagController = class TagController {
    constructor(tagService) {
        this.tagService = tagService;
    }
    getTags() {
        return this.tagService.getTags();
    }
    getTagById(tagId) {
        return this.tagService.getTagById(tagId);
    }
    createTag(dto) {
        return this.tagService.createTag(dto);
    }
    async editTagById(tagId, dto) {
        const tag = await this.tagService.getTagById(tagId);
        if (!tag) {
            throw new common_1.NotFoundException('Tag Not Found');
        }
        return this.tagService.editTagById(tagId, dto);
    }
    async deleteTagById(tagId) {
        const tag = await this.tagService.getTagById(tagId);
        if (!tag) {
            throw new common_1.NotFoundException('Tag Not Found');
        }
        return this.tagService.deleteTagById(tagId);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TagController.prototype, "getTags", null);
__decorate([
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], TagController.prototype, "getTagById", null);
__decorate([
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.CreateTagDto]),
    __metadata("design:returntype", void 0)
], TagController.prototype, "createTag", null);
__decorate([
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, dto_1.EditTagDto]),
    __metadata("design:returntype", Promise)
], TagController.prototype, "editTagById", null);
__decorate([
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], TagController.prototype, "deleteTagById", null);
TagController = __decorate([
    (0, common_1.Controller)('tags'),
    __metadata("design:paramtypes", [tag_service_1.TagService])
], TagController);
exports.TagController = TagController;
//# sourceMappingURL=tag.controller.js.map