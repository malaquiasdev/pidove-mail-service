const pkg = require('../../package');

const swagger = {
  routePrefix: '/doc',
  exposeRoute: true,
  swagger: {
    info: {
      title: 'Pidove Mail Service',
      description: `${pkg.description}`,
      version: `${pkg.version}`
    },
    externalDocs: {
      url: 'https://swagger.io',
      description: 'Find more info here'
    },
    host: 'localhost',
    schemes: ['http'],
    consumes: ['application/json'],
    produces: ['application/json']
  }
};

exports.options = swagger;
