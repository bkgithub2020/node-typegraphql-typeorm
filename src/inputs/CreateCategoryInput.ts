import { InputType, Field } from "type-graphql";

@InputType()
export class CreateCategoryInput {
  @Field()
  category_name: string;

  @Field()
  description: string;

  @Field()
  primary_category_id: number;
}
