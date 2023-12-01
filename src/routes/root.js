'use strict'

module.exports = async function (fastify, opts) {

  await fastify.register(require("@fastify/swagger-ui"), {
    routePrefix: "/",
    uiConfig: {
      docExpansion: "full",
      deepLinking: false,
    },
  });

}
