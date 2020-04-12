const { server } = require('./config');
// const registerMiddlewares = require('./middlewares');
import registerMiddlewares from "./middlewares";
import { rootRouter } from "./routes";
async function main() {
  // TODO: register middlewares (CORS...)
  registerMiddlewares(server);
  //redirect all / requests to /v1
  server.all('/', (req, res) => res.redirect('/v1'));

  // TODO: use router
  server.use("/v1", rootRouter);
  // TODO: default express error handling middleware
  server.listen();
}

main();

