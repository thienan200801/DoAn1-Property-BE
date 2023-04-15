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
exports.ContactService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let ContactService = class ContactService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    getContacts(queryParams) {
        return this.prisma.contact.findMany({
            where: Object.assign({}, queryParams),
        });
    }
    getContactById(contactId) {
        return this.prisma.contact.findFirst({
            where: {
                id: contactId,
            },
        });
    }
    async createContact(dto) {
        const contact = await this.prisma.contact.create({
            data: Object.assign({}, dto),
        });
        return contact;
    }
    async editContactById(contactId, dto) {
        return this.prisma.contact.update({
            where: {
                id: contactId,
            },
            data: Object.assign({}, dto),
        });
    }
    async deleteContactById(contactId) {
        await this.prisma.contact.delete({
            where: {
                id: contactId,
            },
        });
    }
};
ContactService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ContactService);
exports.ContactService = ContactService;
//# sourceMappingURL=contact.service.js.map