async function routes (fastify, options) {



  fastify.get('/address/:id', async (request, reply) => {
    var personId = parseInt(request.params.id);
    fastify.httpclient.request(`http://couchdb:5984/addresses/${personId}`, (err, body) => {
      reply.type('application/json; charset=utf-8');
      reply.send(body);
    })
  })
}

module.exports = routes;
