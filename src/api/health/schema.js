const schema = {
  response: {
    200: {
      description: 'Successful response',
      type: 'object',
      properties: {
        up: { type: 'boolean' },
        version: { type: 'string' },
        name: { type: 'string' }
      }
    }
  }
};

module.exports = schema;
