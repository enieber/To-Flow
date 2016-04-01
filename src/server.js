'use strict';

const Hapi = require('hapi');
const tasks = require('./tasks');
const server = new Hapi.Server();
server.connection({ port: 3000 });

server.route({
    method: 'GET',
    path: '/',
    handler: (request, reply) => {
        reply('Welcon to To Flow!');
    }
});

server.route({
  method: 'GET',
  path: '/actors',
  handler: (request, reply) => {
    reply('actos main');
  }
});

server.route({
  method: 'GET',
  path: '/{project}/tasks',
  handler: (request, reply) => {
    console.log(tasks);
    reply(JSON.stringify(tasks));
  }
});

server.start((err) => {

    if (err) {
        throw err;
    }
    console.log('Server running at:', server.info.uri);
});
