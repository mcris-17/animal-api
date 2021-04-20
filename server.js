const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jasonServer.defaults();
const port = process.env.PORT || 22823;

server.use(middlewares);
server.use(router);

server.listen(port);