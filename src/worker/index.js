const log = require('pino')({ level: 'info' });
require('fastify')({ logger: log });
const Bull = require('bull');
const redisConfig = require('../../config/redis');
const jobs = require('./jobs');
const addFactory = require('./add');
const processFactory = require('./process');

const loadTheJobs = () => {
  return Object.values(jobs).map(job => ({
    bull: new Bull(job.key, redisConfig),
    name: job.key,
    handle: job.handle,
    options: job.options
  }));
};

const list = loadTheJobs();

const worker = {
  list,
  add: addFactory(log, list),
  process: processFactory(log, list)
};

module.exports = worker;
