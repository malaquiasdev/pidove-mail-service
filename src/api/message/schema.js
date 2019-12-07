const schema = {
  body: {
    type: 'object',
    required: ['fullName', 'email', 'type'],
    properties: {
      fullName: { type: 'string' },
      email: { type: 'string', format: 'email' },
      type: { type: 'string' }
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
