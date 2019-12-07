const pkg = require('../../../package');
const schema = require('./schema');

const api = async () => {
  return { up: true, version: pkg.version, name: pkg.name };
};

module.exports = { api, schema };
