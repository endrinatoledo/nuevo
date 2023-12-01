// const userRoutes = require("./userRoutes");
const userRoutes = require("./user.route")

async function routes(fastify, options) {
    fastify.register(userRoutes,{prefix: '/user'})
}

module.exports = routes; 