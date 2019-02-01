import * as express from "express";
import * as bodyParser from "body-parser";
import { addResolveFunctionsToSchema } from "graphql-tools";
import { schema } from "./sсhema/schema";
import { resolvers } from "./resolvers";
import * as cors from "cors";
import * as graphqlHTTP from "express-graphql";

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
      cors(),
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
