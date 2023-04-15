"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdministrativeModule = void 0;
const common_1 = require("@nestjs/common");
const administrative_controller_1 = require("./administrative.controller");
const administrative_v2_service_1 = require("./administrative-v2.service");
const administrative_service_1 = require("./administrative.service");
const administrative_v2_controller_1 = require("./administrative-v2.controller");
const axios_1 = require("@nestjs/axios");
let AdministrativeModule = class AdministrativeModule {
};
AdministrativeModule = __decorate([
    (0, common_1.Module)({
        controllers: [
            administrative_controller_1.AdministrativeController,
            administrative_v2_controller_1.AdministrativeControllerVer02,
        ],
        imports: [axios_1.HttpModule.register({
                timeout: 5000,
                maxRedirects: 5,
            }),],
        providers: [
            administrative_service_1.AdministrativeService,
            administrative_v2_service_1.default,
        ],
    })
], AdministrativeModule);
exports.AdministrativeModule = AdministrativeModule;
//# sourceMappingURL=administrative.module.js.map