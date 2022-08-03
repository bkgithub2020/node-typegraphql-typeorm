import 'reflect-metadata';
import express,{Express} from 'express';
import {ApolloServer} from 'apollo-server-express';
import { TaskResolver } from "./resolvers/task";
import { CategoryResolver } from "./resolvers/category";
import { buildSchema } from "type-graphql";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import { createConnection } from 'typeorm';
import { Task } from './entities/Task';
import { TableCategory as Category } from './entities/Category';



const main =async () => {

    const conn = await createConnection({
        type: "postgres",
        database: "postgres",
        entities: [Task,Category],
        logging: true,
        synchronize: true,
        username: "pgadmin",
        password: "secure_password",
        port: 5432,
      });

    const apolloServer = new ApolloServer({
        schema: await buildSchema({
          resolvers: [TaskResolver,CategoryResolver],
          validate: false,
        }),
        plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
      });

      await apolloServer.start();
      const app: Express = express();

    apolloServer.applyMiddleware({ app });

    app.get("/",(req,res)=>{
        res.send("Hello World")
    })

    const PORT = process.env.PORT || 3002;

    app.listen(PORT,()=>{
        console.log(`Sever is running on port ${PORT}`)
    })
    
}

main().catch((err)=>console.error(err))