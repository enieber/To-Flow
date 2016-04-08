'use strict';

const Hapi = require('hapi');
const server = new Hapi.Server();
const routes = require('./routes');

server.connection({
  host: 'localhost',
  port: 8000
});

server.route(routes);

server.start((err) => {

    if (err) {
        throw err;
    }
    console.log('Server running at:', server.info.uri);
});
