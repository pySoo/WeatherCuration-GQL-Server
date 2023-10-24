import { ApolloServer } from 'apollo-server';
import typeDefs from './graphql/typeDefs.js';
import resolvers from './graphql/resolvers.js';
import dotenv from 'dotenv';

dotenv.config();

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
