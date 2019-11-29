const pkg = require('../../../package');

const healthApi = async () => {
  return { up: true, version: pkg.version, name: pkg.name };
};

module.exports = { healthApi };
