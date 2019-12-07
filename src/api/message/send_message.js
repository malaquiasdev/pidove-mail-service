const templates = require('./templates');

const sendMessageApi = async (req, reply) => {
  let message = '';

  const { fullName, email, type } = req.body;

  const template = templates[type];

  if (template.type === 'newUser') {
    message = template.createMessage(fullName, email);
  }

  return reply.code(200);
};

module.exports = sendMessageApi;
