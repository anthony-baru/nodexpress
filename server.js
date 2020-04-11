const { server } = require('./config');
const registerMiddlewares = require('./middlewares');

async function main() {
  // TODO: register middlewares (CORS...)
  registerMiddlewares(server);
  // TODO: use router
  server.get("/", (req, res, next) => {
    res.json({ message: `Handling ${req.method} request.` })
  });
  server.post("/", (req, res, next) => {
    res.json({ message: `Handling ${req.method} request.` })
  });
  server.put("/", (req, res, next) => {
    res.json({ message: `Handling ${req.method} request.` })
  });
  server.delete("/", (req, res, next) => {
    res.json({ message: `Handling ${req.method} request.` })
  });
  // TODO: default express error handling middleware

  server.listen();
}

main();

