const worker = require('../../worker');

const sendMessageApi = async (req, reply) => {
  const { fullName, email, templateKey } = req.body;

  await worker.add(templateKey, { fullName, email });

  return reply.code(202).send({ data: { sucess: true } });
};

module.exports = sendMessageApi;
