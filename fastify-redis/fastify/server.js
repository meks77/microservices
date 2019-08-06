const fastify = require('fastify')();

fastify.register(require('fastify-redis'), { host: 'redisdb' });

fastify.register(require('./address-route'));


const start = async() => {
  try {
    await fastify.listen(3000, '0.0.0.0')
  } catch (err) {
    fastify.log.error(err);
    process.exit(1)
  }
};
start();
