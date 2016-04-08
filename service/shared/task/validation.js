'use strict';

// load deps
const Joi = require('joi');

const TaskValidator = {
  list,
  read,
  create,
  update,
  destroy
};

module.exports = TaskValidator;

const schema = {
  title: Joi
    .string()
    .min(1)
    .max(100)
    .trim(),
  roles: Joi
    .string()
    .valid(['main', 'dependency', 'build'])
};

function list () {
  return {};
}

function read () {
  return {
    params: {
      id: Joi
        .string()
        .guid()
        .required()
    }
  };
}

function create () {
  return {
    payload: {
      title: schema
        .title
        .required(),
      roles: schema
        .roles
        .required()
    }
  };
}

function update () {
  return {
    params: {
      id: Joi
        .string()
        .guid()
        .required()
    },
    payload: {
      title: schema
        .title
        .required(),
      roles: schema
        .roles
        .required()
    }
  };
}

function destroy () {
  return {
    params: {
      id: Joi
        .string()
        .guid()
        .required()
    }
  };
}
