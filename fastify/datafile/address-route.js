var fs = require('fs');

async function routes (fastify, options) {

  fastify.get('/address/:id', async (request, reply) => {
    var personId = parseInt(request.params.id);
    var position = (1000000000 - personId) * 119;
    fs.open('/opt/microservices/filesystem/dataFile', 'r', function(err, file){
      var buffer = Buffer.alloc(118);
       fs.read(file, buffer, 0, 118, position, function(err, bytesRead, buffer) {
         reply.type('application/json; charset=utf-8');
         reply.send(buffer);
       });
    });
  })
}

module.exports = routes;
