const fastify = require('fastify')();

fastify.register(require('./db-connector'), {
  url: 'mongodb://mongo:27017/'
})

fastify.register(require('./address-route'))

const start = async() => {
  try {
    await fastify.listen(3000, '0.0.0.0')
    fastify.log.info(`server listening on ${fastify.server.address().port}`)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()