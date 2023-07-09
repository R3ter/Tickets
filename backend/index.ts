import { PrismaClient } from "@prisma/client";
import { ApolloServer } from "apollo-server";
import resolvers from "./src/schema/Resolvers/Resolvers";
import { importSchema } from "graphql-import";

const typeDefs = importSchema("./src/schema/Graphql/typeDef.graphql");
const prisma = new PrismaClient();

const server = new ApolloServer({ resolvers, typeDefs, context: { prisma } });
server.listen({ port: 4000 }, () => {
  console.log("server is up on http://localhost:4000");
});
