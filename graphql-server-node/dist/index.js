import express from 'express';
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import cors from 'cors';
import bodyParser from 'body-parser';
import fs, { writeFileSync } from 'fs';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';
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
  
  type Mutation {
    addUser(name: String!, email: String!): User!
    updateUser(id: ID!, name: String, email: String): User!
    deleteUser(id: ID!): User!
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
    Mutation: {
        addUser: (_, { name, email }) => {
            const user = { id: uuidv4(), name, email };
            users.push(user);
            // Write to file
            try {
                writeFileSync(path.resolve('./data/user.json'), JSON.stringify(users, null, 2), 'utf8');
            }
            catch (err) {
                console.error('Error writing to file:', err);
                throw new Error('Failed to save user');
            }
            return user;
        },
        updateUser: (_, { id, name, email }) => {
            const user = users.find(user => user.id === id);
            if (!user)
                throw new Error('User not found');
            // Update user fields
            if (name)
                user.name = name;
            if (email)
                user.email = email;
            // Write to file
            try {
                writeFileSync(path.resolve('./data/user.json'), JSON.stringify(users, null, 2), 'utf8');
            }
            catch (err) {
                console.error('Error writing to file:', err);
                throw new Error('Failed to save user');
            }
            return user;
        },
        deleteUser: (_, { id }) => {
            const userIndex = users.findIndex(user => user.id === id);
            if (userIndex === -1)
                throw new Error('User not found');
            const [deletedUser] = users.splice(userIndex, 1);
            // Write to file
            try {
                writeFileSync(path.resolve('./data/user.json'), JSON.stringify(users, null, 2), 'utf8');
            }
            catch (err) {
                console.error('Error writing to file:', err);
                throw new Error('Failed to save user');
            }
            return deletedUser;
        },
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
