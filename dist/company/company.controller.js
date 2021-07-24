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
exports.CompanyController = void 0;
const common_1 = require("@nestjs/common");
const company_service_1 = require("./company.service");
const company_entity_1 = require("./dto/company.entity");
let CompanyController = class CompanyController {
    constructor(companyService) {
        this.companyService = companyService;
    }
    findAll() {
        return this.companyService.findAll();
    }
    async create(companyData) {
        return this.companyService.create(companyData);
    }
    async update(id, companyData) {
        companyData.id = Number(id);
        return this.companyService.update(companyData);
    }
    async delete(id) {
        return this.companyService.delete(id);
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CompanyController.prototype, "findAll", null);
__decorate([
    common_1.Post('create'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [company_entity_1.Company]),
    __metadata("design:returntype", Promise)
], CompanyController.prototype, "create", null);
__decorate([
    common_1.Put(':id/update'),
    __param(0, common_1.Param('id')),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, company_entity_1.Company]),
    __metadata("design:returntype", Promise)
], CompanyController.prototype, "update", null);
__decorate([
    common_1.Delete(':id/delete'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CompanyController.prototype, "delete", null);
CompanyController = __decorate([
    common_1.Controller('company'),
    __metadata("design:paramtypes", [company_service_1.companyService])
], CompanyController);
exports.CompanyController = CompanyController;
//# sourceMappingURL=company.controller.js.map