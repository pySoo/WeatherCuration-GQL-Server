import typeDefs from './graphql/typeDefs.js';
import resolvers from './graphql/resolvers.js';
import dotenv from 'dotenv';
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import express from 'express';
import http from 'http';
import cors from 'cors';
import bodyParser from 'body-parser';

dotenv.config();

const app = express();
const httpServer = http.createServer(app);

const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
});

await server.start();

app.use(cors(), bodyParser.json(), expressMiddleware(server));

const PORT_NUMBER = process.env.PORT || 4000;

await new Promise((resolve) => httpServer.listen({ port: PORT_NUMBER }, resolve));
console.log(`🚀 Server ready at http://localhost:${PORT_NUMBER}`);
