import { testResolver } from "./testResolver";
import { IResolvers } from "graphql-tools";

export const resolvers: IResolvers = {
  Query: {
    testQuery: () => testResolver().then(res => res)
  },
  Mutation: {
    testMutation: () => testResolver().then(res => res)
  }
};
