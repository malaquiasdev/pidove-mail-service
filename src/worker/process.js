const processFactory = (log, jobs) => {
  return () => {
    return jobs.forEach(job => {
      job.bull
        .process(job.handle)
        .then(res => {
          log.info(res);
        })
        .catch(err => {
          log.error(err);
        });
    });
  };
};

module.exports = processFactory;
