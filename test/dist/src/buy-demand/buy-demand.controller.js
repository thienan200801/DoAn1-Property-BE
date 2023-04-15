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
exports.BuyDemandController = void 0;
const common_1 = require("@nestjs/common");
const buy_demand_service_1 = require("./buy-demand.service");
const dto_1 = require("./dto");
let BuyDemandController = class BuyDemandController {
    constructor(buyDemandService) {
        this.buyDemandService = buyDemandService;
    }
    getBuyDemands(query) {
        console.log(query);
        return this.buyDemandService.getBuyDemands(query);
    }
    getBuyDemandById(buyDemandId) {
        return this.buyDemandService.getBuyDemandById(buyDemandId);
    }
    createBuyDemand(dto) {
        console.log(dto.gallery);
        return this.buyDemandService.createBuyDemand(dto);
    }
    async editBuyDemandById(buyDemandId, dto) {
        const buyDemand = await this.buyDemandService.getBuyDemandById(buyDemandId);
        if (!buyDemand) {
            throw new common_1.NotFoundException('BuyDemand Not Found');
        }
        return this.buyDemandService.editBuyDemandById(buyDemandId, dto);
    }
    async deleteBuyDemandById(buyDemandId) {
        const buyDemand = await this.buyDemandService.getBuyDemandById(buyDemandId);
        if (!buyDemand) {
            throw new common_1.NotFoundException('BuyDemand Not Found');
        }
        return this.buyDemandService.deleteBuyDemandById(buyDemandId);
    }
};
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.GetBuyDemandDto]),
    __metadata("design:returntype", void 0)
], BuyDemandController.prototype, "getBuyDemands", null);
__decorate([
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], BuyDemandController.prototype, "getBuyDemandById", null);
__decorate([
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)(new common_1.ValidationPipe({ transform: true }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.CreateBuyDemandDto]),
    __metadata("design:returntype", void 0)
], BuyDemandController.prototype, "createBuyDemand", null);
__decorate([
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, dto_1.EditBuyDemandDto]),
    __metadata("design:returntype", Promise)
], BuyDemandController.prototype, "editBuyDemandById", null);
__decorate([
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], BuyDemandController.prototype, "deleteBuyDemandById", null);
BuyDemandController = __decorate([
    (0, common_1.Controller)('buy-demand'),
    __metadata("design:paramtypes", [buy_demand_service_1.BuyDemandService])
], BuyDemandController);
exports.BuyDemandController = BuyDemandController;
//# sourceMappingURL=buy-demand.controller.js.map