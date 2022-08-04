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
let CategoryResolver = class CategoryResolver {
    hello() {
        return "hello world";
    }
    categories() {
        return Category_1.TableCategory.find({});
    }
    category(id) {
        return Category_1.TableCategory.findOneBy({ id });
    }
    deleteCategory(id) {
        try {
            Category_1.TableCategory.delete({ id });
            return true;
        }
        catch (_a) {
            return false;
        }
    }
    async createCategory(category_name, description, primary_category_id) {
        return Category_1.TableCategory.create({ category_name, description, primary_category_id }).save();
    }
    updateCategory(id, category_name) {
        const category = Category_1.TableCategory.findOneBy({ id });
        if (!category) {
            return null;
        }
        try {
            Category_1.TableCategory.update({ id }, { category_name });
            return true;
        }
        catch (_a) {
            return false;
        }
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
    __metadata("design:returntype", Promise)
], CategoryResolver.prototype, "categories", null);
__decorate([
    (0, type_graphql_1.Query)(() => Category_1.TableCategory, { nullable: true }),
    __param(0, (0, type_graphql_1.Arg)("id", () => type_graphql_1.Int)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CategoryResolver.prototype, "category", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => Boolean),
    __param(0, (0, type_graphql_1.Arg)("id", () => type_graphql_1.Int)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Boolean)
], CategoryResolver.prototype, "deleteCategory", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => Category_1.TableCategory),
    __param(0, (0, type_graphql_1.Arg)("category_name", () => String)),
    __param(1, (0, type_graphql_1.Arg)("description", () => String)),
    __param(2, (0, type_graphql_1.Arg)("primary_category_id", () => type_graphql_1.Int)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Number]),
    __metadata("design:returntype", Promise)
], CategoryResolver.prototype, "createCategory", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => Boolean, { nullable: true }),
    __param(0, (0, type_graphql_1.Arg)("id", () => type_graphql_1.Int)),
    __param(1, (0, type_graphql_1.Arg)("category_name", () => String)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String]),
    __metadata("design:returntype", Object)
], CategoryResolver.prototype, "updateCategory", null);
CategoryResolver = __decorate([
    (0, type_graphql_1.Resolver)()
], CategoryResolver);
exports.CategoryResolver = CategoryResolver;
//# sourceMappingURL=category.js.map