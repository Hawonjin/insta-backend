import { loadFilesSync } from '@graphql-tools/load-files';
import { mergeTypeDefs, mergeResolvers } from '@graphql-tools/merge';
import { makeExecutableSchema } from '@graphql-tools/schema';

const loadedTypes = loadFilesSync("".concat(__dirname, "/**/*.typeDefs.js"));
const loadedResolvers = loadFilesSync("".concat(__dirname, "/**/*.resolvers.js"));

const typeDefs = mergeTypeDefs(loadedTypes);
const resolvers = mergeResolvers(loadedResolvers);

const schema = makeExecutableSchema({typeDefs, resolvers});

export default schema;