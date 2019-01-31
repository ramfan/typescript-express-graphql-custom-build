import * as express from "express";
import * as bodyParser from "body-parser";
import { addResolveFunctionsToSchema } from "graphql-tools";
import { schema } from "./shema/schema";
import { resolvers } from "./resolvers";

const graphqlHTTP = require("express-graphql");
class App {
  public app: express.Application;

  constructor() {
    this.app = express();
    this.config();
  }

  private config(): void {
    addResolveFunctionsToSchema({ schema, resolvers });
    this.app.use(
      "/",
      graphqlHTTP({
        schema,
        graphiql: true
      })
    );
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
  }
}

export default new App().app;
