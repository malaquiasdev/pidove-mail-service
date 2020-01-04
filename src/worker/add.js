const addFactory = (log, jobs) => {
  return async (name, data) => {
    const job = jobs.find(j => j.name === name);
    return job.bull.add(data, job.options);
  };
};

module.exports = addFactory;
