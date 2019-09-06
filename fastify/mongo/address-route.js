async function routes (fastify, options) {
  const db = fastify.mongo.db('addresses')

  fastify.get('/address/:id', async (request, reply) => {
    db.collection('personAddress', onCollection)
    function onCollection (err, col) {
      if(err) return reply.send(err)

      col.findOne({ _id: parseInt(request.params.id) }, (err, address) => {
        reply.send(address)
      })
    }
  })
}

module.exports = routes
