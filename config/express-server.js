const express = require('express');
const server = express();
const PORT = process.env.PORT || 8000;

//override listen method
server.listen = server.listen.bind(server, PORT, () =>
    console.log(`Listening on port: ${PORT}`)
);

module.exports = server;