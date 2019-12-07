const schema = {
  body: {
    type: 'object',
    required: ['fullName', 'email', 'templateType'],
    properties: {
      fullName: { type: 'string' },
      email: { type: 'string', format: 'email' },
      templateType: { type: 'string', enum: ['newUser'] }
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
