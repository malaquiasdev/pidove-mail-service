const health = require('./health');
const fastifySwagger = require('fastify-swagger');

const routes = fastify => {
  fastify.route({
    method: 'GET',
    url: '/health',
    handler: health.api,
    schema: health.schema
  });
};

module.exports = routes;
