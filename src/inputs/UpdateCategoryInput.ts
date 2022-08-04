import { InputType, Field } from "type-graphql";

@InputType()
export class UpdateCategoryInput {

  @Field({ nullable: true })
  category_name: string;

  @Field({ nullable: true })
  description: string;

  @Field({ nullable: true })
  primary_category_id: number;
}
