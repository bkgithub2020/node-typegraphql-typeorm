import { Field, ObjectType, Int } from "type-graphql";
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity()
@ObjectType()
export class TableCategory extends BaseEntity {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @CreateDateColumn()
  @Field(() => String)
  date_added: Date;

  @UpdateDateColumn()
  @Field(() => String)  
  date_updated: Date;

  @Column()
  @Field(() => String)  
  category_name: string;

  @Column()
  @Field(() => String)  
  description: string;

  @Column()
  @Field(() => Int)
  primary_category_id: number;
}
