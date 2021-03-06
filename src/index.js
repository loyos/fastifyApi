// Require the framework and instantiate it
const fastify = require('fastify')({
  logger: true
})

fastify.register(require('fastify-cors'), {
  origin: true,
  allowedHeaders: ['Origin', 'X-Requested-With', 'Accept', 'Content-Type', 'Authorization'],
  methods: ['GET', 'PUT', 'PATCH', 'POST', 'DELETE', 'OPTIONS']
})

// Import Swagger Options
const swagger = require('./config/swagger')

// Register Swagger
fastify.register(require('fastify-swagger'), swagger.options)

// Declare a route
fastify.get('/', async (request, reply) => {
  return {
    hello: 'world'
  }
})

const routes = require('./routes');

routes.forEach((route, index) => {
  fastify.route(route)
});

// Run the server!
const start = async () => {
  try {
    await fastify.listen(3000, '0.0.0.0')
    fastify.swagger()
    fastify.log.info(`server listening on ${fastify.server.address().port}`)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}

// Require external modules
const mongoose = require('mongoose')

// Connect to DB
/**
 * mongodb://localhost:27017/mycargarage  to connect from host to mongo container
 */
mongoose.connect('mongodb://mongo:27017/mycargarage')
  .then(() => console.log('MongoDB connected…'))
  .catch(err => console.log(err))

start()