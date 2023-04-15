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
exports.FileHandlerController = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const platform_express_1 = require("@nestjs/platform-express");
const multer_1 = require("multer");
const path = require("path");
const file_handler_service_1 = require("./file-handler.service");
let FileHandlerController = class FileHandlerController {
    constructor(fileHandlerService, config) {
        this.fileHandlerService = fileHandlerService;
        this.config = config;
    }
    uploadFile(file) {
        console.log(file);
        return Object.assign(Object.assign({}, file), { link: `${this.config.get('HOST')}/${this.config.get('IMAGE_ENDPOINT')}/${file.filename}` });
    }
};
__decorate([
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, common_1.Post)('upload-image'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file', {
        storage: (0, multer_1.diskStorage)({
            destination: 'public/upload/',
            filename: (req, file, cb) => {
                const filename = path
                    .parse(file.originalname)
                    .name.replace(/\s/g, '') +
                    '-' +
                    Date.now();
                const extension = path.parse(file.originalname).ext;
                cb(null, `${filename}${extension}`);
            },
        }),
    })),
    __param(0, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], FileHandlerController.prototype, "uploadFile", null);
FileHandlerController = __decorate([
    (0, common_1.Controller)('file-handler'),
    __metadata("design:paramtypes", [file_handler_service_1.FileHandlerService,
        config_1.ConfigService])
], FileHandlerController);
exports.FileHandlerController = FileHandlerController;
//# sourceMappingURL=file-handler.controller.js.map