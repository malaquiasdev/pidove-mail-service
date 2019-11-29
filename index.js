require('dotenv/config');
const fastify = require('fastify')({
  logger: true
});
const routes = require('./src/api/routes');
const swaggerConfig = require('./src/config/swagger');

fastify.register(require('fastify-swagger'), swaggerConfig.options);

routes(fastify);

const start = async () => {
  try {
    await fastify.listen(8080, '0.0.0.0');
    fastify.swagger();
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
