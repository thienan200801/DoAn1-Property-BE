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
const axios_1 = require("@nestjs/axios");
const common_1 = require("@nestjs/common");
const rxjs_1 = require("rxjs");
const prisma_service_1 = require("../prisma/prisma.service");
let AdministrativeControllerVer02 = class AdministrativeControllerVer02 {
    constructor(httpService, prisma) {
        this.httpService = httpService;
        this.prisma = prisma;
    }
    getProvince() {
        return this.httpService
            .get('https://provinces.open-api.vn/api/p')
            .pipe((0, rxjs_1.map)((response) => response.data));
    }
    getDistrict(provinceId) {
        return this.httpService
            .get(`https://provinces.open-api.vn/api/p/${provinceId}?depth=2`)
            .pipe((0, rxjs_1.map)((response) => response.data));
    }
    getWard(districtId) {
        return this.httpService
            .get(`https://provinces.open-api.vn/api/d/${districtId}?depth=2`)
            .pipe((0, rxjs_1.map)((response) => response.data));
    }
};
AdministrativeControllerVer02 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [axios_1.HttpService,
        prisma_service_1.PrismaService])
], AdministrativeControllerVer02);
exports.default = AdministrativeControllerVer02;
//# sourceMappingURL=administrative-v2.service.js.map