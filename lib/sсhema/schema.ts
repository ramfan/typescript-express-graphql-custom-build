import { buildSchema, GraphQLSchema } from "graphql";

/**
 * this file contain shema for graphQL API
 */
export const schema: GraphQLSchema = buildSchema(`
    type Query {
        testQuery: String
    }
    type Mutation {
        testMutation: String
    }
`);
