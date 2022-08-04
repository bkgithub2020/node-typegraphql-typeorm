"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const apollo_server_express_1 = require("apollo-server-express");
const task_1 = require("./resolvers/task");
const category_1 = require("./resolvers/category");
const type_graphql_1 = require("type-graphql");
const apollo_server_core_1 = require("apollo-server-core");
const typeorm_1 = require("typeorm");
const Task_1 = require("./entities/Task");
const Book_1 = require("./entities/Book");
const Category_1 = require("./entities/Category");
const BookResolver_1 = require("./resolvers/BookResolver");
const main = async () => {
    const conn = await (0, typeorm_1.createConnection)({
        type: "postgres",
        database: "postgres",
        entities: [Task_1.Task, Category_1.TableCategory, Book_1.Book],
        logging: true,
        synchronize: true,
        username: "pgadmin",
        password: "secure_password",
        port: 5432,
    });
    const apolloServer = new apollo_server_express_1.ApolloServer({
        schema: await (0, type_graphql_1.buildSchema)({
            resolvers: [task_1.TaskResolver, category_1.CategoryResolver, BookResolver_1.BookResolver],
            validate: false,
        }),
        plugins: [(0, apollo_server_core_1.ApolloServerPluginLandingPageGraphQLPlayground)()],
    });
    await apolloServer.start();
    const app = (0, express_1.default)();
    apolloServer.applyMiddleware({ app });
    app.get("/", (req, res) => {
        res.send("Hello World");
    });
    const PORT = process.env.PORT || 3002;
    app.listen(PORT, () => {
        console.log(`Sever is running on port ${PORT}`);
    });
};
main().catch((err) => console.error(err));
//# sourceMappingURL=index.js.map