'use strict';

const jwt = require('jsonwebtoken');

function TaskController (db) {
  this.database = db;
  this.model = db.Task;
}

TaskController.prototype = {
  list,
  read,
  create,
  update,
  destroy
};

module.exports = TaskController;

// [GET] /tasks
function list (request, reply) {
  this.model.findAll({})
  .then((tasks) => reply(tasks))
  .catch((err) => reply.badImplementation(err.message));
}

// [GET] /tasks/{id}
function read (request, reply) {
  const id = request.params.id;

  this.model.findById(id)
  .then((task) => {
    if (!task) {
      return reply.notFound();
    }

    reply(task);
  })
  .catch((err) => reply.badImplementation(err.message));
}

// [POST] /tasks
function create (request, reply) {
  const payload = request.payload;

  this.model.create(payload)
  .then((task) => reply({ token: getToken(task.id) }).code(201))
  .catch((err) => reply.badImplementation(err.message));
}

// [PUT] /tasks/{id}
function update (request, reply) {
  const id = request.params.id;
  const payload = request.payload;

  this.model.findById(id)
  .then((task) => task.update(payload))
  .then((task) => reply(task))
  .catch((err) => reply.badImplementation(err.message));
}

// [DELETE] /tasks/{id}
function destroy (request, reply) {
  const id = request.auth.credentials.id;

  this.model.findById(id)
  .then((task) => task.destroy())
  .then(() => reply({}))
  .catch((err) => reply.badImplementation(err.message));
}

function getToken (id) {
  const secretKey = process.env.JWT || 'stubJWT';

  return jwt.sign({
    id: id
  }, secretKey, {expiresIn: '18h'});
}
