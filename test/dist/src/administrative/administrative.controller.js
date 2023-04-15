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
exports.AdministrativeController = void 0;
const common_1 = require("@nestjs/common");
const administrative_v2_service_1 = require("./administrative-v2.service");
let AdministrativeController = class AdministrativeController {
    constructor(administrativeService) {
        this.administrativeService = administrativeService;
    }
    getProvinces() {
        return this.administrativeService.getProvince();
    }
    getDistricts(provinceId) {
        return this.administrativeService.getDistrict(provinceId);
    }
    getWards(districtId) {
        return this.administrativeService.getWard(districtId);
    }
};
__decorate([
    (0, common_1.Get)('provinces'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AdministrativeController.prototype, "getProvinces", null);
__decorate([
    (0, common_1.Get)('districts/p/:id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], AdministrativeController.prototype, "getDistricts", null);
__decorate([
    (0, common_1.Get)('wards/d/:id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], AdministrativeController.prototype, "getWards", null);
AdministrativeController = __decorate([
    (0, common_1.Controller)('administrative'),
    __metadata("design:paramtypes", [administrative_v2_service_1.default])
], AdministrativeController);
exports.AdministrativeController = AdministrativeController;
//# sourceMappingURL=administrative.controller.js.map