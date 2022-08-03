import { TableCategory as Category } from "../entities/Category";
import { Query, Resolver, Arg, Mutation, Int } from "type-graphql";

@Resolver()
export class CategoryResolver {
  @Query(() => String)
  hello(): string {
    return "hello world";
  }

  @Query(() => [Category])
  tasks(): Promise<Category[]> {
    return Category.find({});
  }

  @Query(() => Category, { nullable: true })
  task(
    @Arg("id", () => Int)
    id: number
  ): Promise<Category | undefined> {
    return Category.findOneBy({ id });
  }

  @Mutation(() => Boolean)
  deleteCategory(
    @Arg("id", () => Int)
    id: number
  ): boolean {
    try {
      Category.delete({ id });
      return true;
    } catch {
      return false;
    }
  }

  @Mutation(() => Category)
  async createCategory(
    @Arg("category_name", () => String)
    category_name: string,
    @Arg("description", () => String)
    description: string,
    @Arg("primary_category_id", () => Int)
    primary_category_id: number,
  ): Promise<Category> {
    return Category.create({ category_name, description,primary_category_id}).save();
  }

  @Mutation(() => Boolean, { nullable: true })
  updateCategory(
    @Arg("id", () => Int)
    id: number,

    @Arg("category_name", () => String)
    category_name: string,

   
  ): boolean | null {
    const category = Category.findOneBy({ id });
    if (!category) {
      return null;
    }

    try {
      Category.update({ id }, { category_name });
      return true;
    } catch {
      return false;
    }
  }
}
