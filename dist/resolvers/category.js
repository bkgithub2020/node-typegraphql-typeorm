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
exports.CategoryResolver = void 0;
const Category_1 = require("../entities/Category");
const type_graphql_1 = require("type-graphql");
const CreateCategoryInput_1 = require("../inputs/CreateCategoryInput");
const UpdateCategoryInput_1 = require("../inputs/UpdateCategoryInput");
let CategoryResolver = class CategoryResolver {
    hello() {
        return "hello world";
    }
    categories() {
        return Category_1.TableCategory.find();
    }
    category(id) {
        return Category_1.TableCategory.findOne({ where: { id } });
    }
    async createCategory(data) {
        const category = Category_1.TableCategory.create(data);
        await category.save();
        return category;
    }
    async updateCategory(id, data) {
        const category = await Category_1.TableCategory.findOne({ where: { id } });
        if (!category)
            throw new Error("Category not found!");
        Object.assign(category, data);
        await category.save();
        return category;
    }
    async deleteCategory(id) {
        const category = await category.findOne({ where: { id } });
        if (!category)
            throw new Error("Category not found!");
        await category.remove();
        return true;
    }
};
__decorate([
    (0, type_graphql_1.Query)(() => String),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], CategoryResolver.prototype, "hello", null);
__decorate([
    (0, type_graphql_1.Query)(() => [Category_1.TableCategory]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CategoryResolver.prototype, "categories", null);
__decorate([
    (0, type_graphql_1.Query)(() => Category_1.TableCategory, { nullable: true }),
    __param(0, (0, type_graphql_1.Arg)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CategoryResolver.prototype, "category", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => Category_1.TableCategory),
    __param(0, (0, type_graphql_1.Arg)("data")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreateCategoryInput_1.CreateCategoryInput]),
    __metadata("design:returntype", Promise)
], CategoryResolver.prototype, "createCategory", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => Category_1.TableCategory),
    __param(0, (0, type_graphql_1.Arg)("id")),
    __param(1, (0, type_graphql_1.Arg)("data")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, UpdateCategoryInput_1.UpdateCategoryInput]),
    __metadata("design:returntype", Promise)
], CategoryResolver.prototype, "updateCategory", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => Boolean),
    __param(0, (0, type_graphql_1.Arg)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CategoryResolver.prototype, "deleteCategory", null);
CategoryResolver = __decorate([
    (0, type_graphql_1.Resolver)()
], CategoryResolver);
exports.CategoryResolver = CategoryResolver;
//# sourceMappingURL=category.js.map