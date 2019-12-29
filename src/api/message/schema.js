const schema = {
  body: {
    type: 'object',
    required: ['fullName', 'email', 'templateKey'],
    properties: {
      fullName: { type: 'string' },
      email: { type: 'string', format: 'email' },
      templateKey: { type: 'string', enum: ['newUserMail'] }
    }
  },
  response: {
    201: {
      description: 'Successful response',
      type: 'object'
    }
  }
};

module.exports = schema;
