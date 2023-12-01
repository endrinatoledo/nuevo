// Require the framework and instantiate it
const fastify = require('fastify')({ logger: true })
const swaggerConfig = require('./plugins/swagger_options')

//swagger configuration
fastify.register(require('@fastify/swagger'), swaggerConfig.options);

// Declare a route
fastify.get('/', async (request, reply) => {
  return { hello: 'world rod' }
})

// Run the server!
const start = async () => {
  try {    
    await fastify.listen({ port: 3010 })  
    fastify.swagger()  
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}

fastify.register(require('src/routes')
  , { prefix: '/api2' }
)

start()
// fastify.swagger()