const { server } = require('./config');
// const registerMiddlewares = require('./middlewares');
import registerMiddlewares from "./middlewares";
import { rootRouter } from "./routes";
async function main() {
  // TODO: register middlewares (CORS...)
  registerMiddlewares(server);
  // TODO: use router
  // server.get("/", (req, res, next) => {
  //   res.json({ message: `Handling ${req.method} request.` })
  // });
  // server.post("/", (req, res, next) => {
  //   res.json({ message: `Handling ${req.method} request.` })
  // });
  // server.put("/", (req, res, next) => {
  //   res.json({ message: `Handling ${req.method} request.` })
  // });
  // server.delete("/", (req, res, next) => {
  //   res.json({ message: `Handling ${req.method} request.` })
  // });
  // TODO: default express error handling middleware
  server.use("/v1", rootRouter);
  server.listen();
}

main();

