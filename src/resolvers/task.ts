import { Task } from "../entities/Task";
import { Query, Resolver, Arg, Mutation, Int } from "type-graphql";

@Resolver()
export class TaskResolver {
  @Query(() => String)
  hello(): string {
    return "hello world";
  }

  @Query(() => [Task])
  tasks(): Promise<Task[]> {
    return Task.find({});
  }

  @Query(() => Task, { nullable: true })
  task(
    @Arg("id", () => Int)
    id: number
  ): Promise<Task | undefined> {
    return Task.findOneBy({ id });
  }

  @Mutation(() => Boolean)
  deleteTask(
    @Arg("id", () => Int)
    id: number
  ): boolean {
    try {
      Task.delete({ id });
      return true;
    } catch {
      return false;
    }
  }

  @Mutation(() => Task)
  async createTask(
    @Arg("title", () => String)
    title: string
  ): Promise<Task> {
    return Task.create({ title, isCompleted: false }).save();
  }

  @Mutation(() => Boolean, { nullable: true })
  updateTask(
    @Arg("id", () => Int)
    id: number,

    @Arg("title", () => String)
    title: string,
   
    @Arg("isComplete", () => Boolean)
    isComplete: boolean

  ): boolean | null {
    const task = Task.findOneBy({ id });
    if (!task) {
      return null;
    }

    try {
      Task.update({ id },{title},{isCompleted:isComplete});
      return true;
    } catch {
      return false;
    }
  }
}
