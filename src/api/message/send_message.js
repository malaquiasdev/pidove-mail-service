const templates = require('../../config/templates');

const sendMessageApi = async (req, reply) => {
  let message = '';

  const { fullName, email, templateType } = req.body;

  const template = templates[templateType];

  if (template.type === 'newUser') {
    message = template.createMessage(fullName, email);
  }

  return reply.code(201).send({ data: { sucess: true } });
};

module.exports = sendMessageApi;
