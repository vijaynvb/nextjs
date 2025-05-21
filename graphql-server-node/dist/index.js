import express from 'express';
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import cors from 'cors';
import bodyParser from 'body-parser';
import fs from 'fs';
import path from 'path';
// Load data from JSON files
const users = JSON.parse(fs.readFileSync(path.resolve('./data/user.json'), 'utf8'));
const blogs = JSON.parse(fs.readFileSync(path.resolve('./data/blog.json'), 'utf8'));
const products = JSON.parse(fs.readFileSync(path.resolve('./data/products.json'), 'utf8'));
// rdbms, mongodb, and restapi's
// Define GraphQL schema
const typeDefs = `#graphql
  type User {
    id: ID!
    name: String!
    email: String!
  }

  type Blog {
    id: ID!
    title: String!
    author: User
  }

  type Product {
    id: ID!
    name: String!
    price: Float!
  }

  type Query {
    users: [User!]!
    user(id: ID!): User
    blogs: [Blog!]!
    products: [Product!]!
  }
`;
// Define resolvers
const resolvers = {
    Query: {
        users: () => users,
        user: (_, { id }) => users.find(user => user.id === id),
        blogs: () => blogs,
        products: () => products,
    },
    Blog: {
        author: (blog) => users.find(user => user.id === blog.authorId),
    },
};
// Start Apollo Server with Express
const startServer = async () => {
    const app = express();
    const server = new ApolloServer({ typeDefs, resolvers });
    //const server = new ApolloServer({ typeDefs, resolvers, plugins: [ApolloServerPluginLandingPageDisabled()] });
    await server.start();
    app.use('/graphql', cors(), bodyParser.json(), expressMiddleware(server));
    app.listen({ port: 4000 }, () => {
        console.log(`🚀 Server ready at http://localhost:4000/graphql`);
    });
};
startServer();
