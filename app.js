const path = require("path");
const AutoLoad = require("@fastify/autoload");
const fastifyEnv = require("@fastify/env");
require('./src/models/index');

module.exports.options = {};

module.exports = async function (fastify, opts) {
  // dynamic plugins
  fastify.register(AutoLoad, {
    dir: path.join(__dirname, "src/plugins"),
    options: Object.assign({}, opts),
  });

  // fastify swagger
  await fastify.register(require("@fastify/swagger"), {
    openapi: {
      info: {
        title: "Fastify API -- Ethalamus",
        description: "Endpoint documetation.",
        version: "0.1.0",
      },
      servers: [
        {
          url: "http://localhost:3000/",          
        },
        {
          url: "http://127.0.0.1:3000/",
        },
      ],
    },
  });

  // dynamic routes
  fastify.register(AutoLoad, {
    dir: path.join(__dirname, "src/routes"),
    options: Object.assign({}, opts),
  });

  //set environment file
  const schema = {
    type: "object",
    required: ["DB_NAME", "DB_USER", "DB_PASSWORD", "DB_HOST", "DB_PORT"],
    properties: {
      DB_NAME: {
        type: "string",
      },
      DB_USER: {
        type: "string",
      },
      DB_PASSWORD: {
        type: "string",
      },
      DB_HOST: {
        type: "string",
      },
      DB_PORT: {
        type: "string",
      },
    },
  };

  const options = {
    schema: schema,
  };

  fastify.register(fastifyEnv, options);

};
