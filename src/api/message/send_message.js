const templates = require('../../../config/templates');
const mailerFactory = require('../../libs/mailer');

const sendMessageApi = async (req, reply) => {
  const { fullName, email, templateKey } = req.body;
  const template = templates[templateKey];
  const message = template.createMessage(fullName, email);

  const { sendMail } = mailerFactory(template.key);
  await sendMail(message);

  return reply.code(202).send({ data: { sucess: true } });
};

module.exports = sendMessageApi;
