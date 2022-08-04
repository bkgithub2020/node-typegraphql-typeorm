import { TableCategory as Category } from "../entities/Category";
import { Query, Resolver, Arg, Mutation, Int } from "type-graphql";
import { CreateCategoryInput } from "../inputs/CreateCategoryInput";
import { UpdateCategoryInput } from "../inputs/UpdateCategoryInput";

@Resolver()
export class CategoryResolver {
  @Query(() => String)
  hello(): string {
    return "hello world";
  }
  

  @Query(() => [Category])
  categories() {
    return Category.find();
  }

  @Query(() => Category, { nullable: true })
  category(@Arg("id") id: string) {
    return Category.findOne({ where: { id } });
  }


  @Mutation(() => Category)
  async createCategory(@Arg("data") data: CreateCategoryInput) {
    const category = Category.create(data);
    await category.save();
    return category;
  }

  @Mutation(() => Category)
  async updateCategory(@Arg("id") id: string, @Arg("data") data: UpdateCategoryInput) {
    const category = await Category.findOne({ where: { id } });
    if (!category) throw new Error("Category not found!");
    Object.assign(category, data);
    await category.save();
    return category;
  }

  @Mutation(() => Boolean)
  async deleteCategory(@Arg("id") id: string) {
    const category = await Category.findOne({ where: { id } });
    if (!category) throw new Error("Category not found!");
    await category.remove();
    return true;
  }
}
