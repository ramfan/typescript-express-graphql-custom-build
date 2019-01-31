import { testResolver } from "./testResolver";
import { IResolvers } from "graphql-tools";

export const resolvers: IResolvers = {
  Query: {
    testQuery: () => testResolver()
  },
  Mutation: {
    testMutation: () => testResolver()
  }
};
