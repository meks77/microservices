async function routes (fastify, options) {



  fastify.get('/address/:id', async (request, reply) => {
    var personId = parseInt(request.params.id);
    const { redis } = fastify;
    redis.get(personId, (err, val) => {
      reply.type('application/json; charset=utf-8');
      reply.send(val);
    })
  })
}

module.exports = routes;
