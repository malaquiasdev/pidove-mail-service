const health = require('./health');
const fastifySwagger = require('fastify-swagger');

const routes = fastify => {
  fastify.route({
    method: 'GET',
    url: '/health',
    handler: health.healthApi,
    schema: {
      response: {
        200: {
          description: 'Successful response',
          type: 'object',
          properties: {
            up: { type: 'boolean' },
            version: { type: 'string' },
            name: { type: 'string' }
          }
        }
      }
    }
  });
};

module.exports = routes;
