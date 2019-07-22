async function routes (fastify, options) {
  const db = fastify.mongo.db('addresses')
  const collection = db.collection('personAddress')

  fastify.get('/', async (request, reply) => {
    return { hello: 'world' }
  })

  fastify.get('/address/:id', async (request, reply) => {
    db.collection('personAddress', onCollection)
    var personId = parseInt(request.params.id)
    function onCollection (err, col) {
      if(err) return reply.send(err)
      fastify.log.info("getting address from mongo for " + request.params.id)
    
      col.findOne({ _id: parseInt(request.params.id) }, (err, address) => {
        fastify.log.info("got value from mongo: " + address)
        reply.send(address)
      })
    }
  })
}

module.exports = routes
