const fastify = require('fastify')();

fastify.register(require('fastify-mongodb'), {
  // force to close the mongodb connection when app stopped
  // the default value is false
  forceClose: true,
  url: 'mongodb://mongo/addresses'
});

fastify.register(require('./address-route'));

const start = async() => {
  try {
    await fastify.listen(3000, '0.0.0.0');
  } catch (err) {
    fastify.log.error(err);
    process.exit(1)
  }
};
start();
