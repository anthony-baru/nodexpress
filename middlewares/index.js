const defaultMiddleware = require('./default');

// register all middlewares
module.exports = function registerMiddlewares(server) {
    defaultMiddleware(server);
}