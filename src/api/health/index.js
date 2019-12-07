const pkg = require('../../../package');
const schema = require('./schema');

const api = async (_, reply) => {
  return reply.code(200).send({ up: true, version: pkg.version, name: pkg.name });
};

module.exports = { api, schema };
