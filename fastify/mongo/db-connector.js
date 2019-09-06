const fastifyPlugin = require('fastify-plugin')
const MongoClient = require('mongodb').MongoClient({ useUnifiedTopology: true })

async function dbConnector (fastify, options) {
  const url = options.url
  delete options.url

  const db = await MongoClient.connect(url, { native_parser: true, useNewUrlParser: true})
  fastify.decorate('mongo', db)
}

// Wrapping a plugin function with fastify-plugin exposes the decorators,
// hooks, and middlewares declared inside the plugin to the parent scope.
module.exports = fastifyPlugin(dbConnector)
