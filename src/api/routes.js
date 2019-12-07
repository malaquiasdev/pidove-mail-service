const health = require('./health');
const message = require('./message');
const fastifySwagger = require('fastify-swagger');

const routes = fastify => {
  fastify.route({
    method: 'GET',
    url: '/health',
    handler: health.api,
    schema: health.schema
  });

  fastify.route({
    method: 'POST',
    url: '/message',
    handler: message.api,
    schema: message.schema
  });
};

module.exports = routes;
