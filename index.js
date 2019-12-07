require('dotenv/config');
const fastify = require('fastify')({
  logger: {
    prettyPrint: true,
    level: 'info'
  }
});
const routes = require('./src/api/routes');
const swaggerConfig = require('./config/swagger');

fastify.register(require('fastify-swagger'), swaggerConfig.options);

routes(fastify);

const HOST = '0.0.0.0';
const PORT = process.env.PORT || 8080;

const start = async () => {
  try {
    await fastify.listen(PORT, HOST);
    fastify.swagger();
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
