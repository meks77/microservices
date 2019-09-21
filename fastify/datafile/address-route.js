var fs = require('fs');

async function routes(fastify, options) {

    fastify.get('/address/:id', async (request, reply) => {
        var personId = parseInt(request.params.id);
        var position = (1000000000 - personId) * 119;
        fs.open('/opt/microservices/datafile/dataFile', 'r', function (err, file) {
            var buffer = Buffer.alloc(118);
            fs.read(file, buffer, 0, 118, position, function (err, bytesRead, buffer) {
                fs.close(file, function (err) {
                    if (err) {
                        console.error("Error when closing file handle: " + err.message);
                    }
                });
                reply.type('application/json; charset=utf-8');
                reply.send(buffer);
            });
        });
    })
}

module.exports = routes;
