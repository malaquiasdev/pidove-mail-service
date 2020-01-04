const mailer = require('../../../libs/mailer')();
const createNewUserMessage = require('./create_new_user_message');

const newUserMail = {
  key: 'newUserMail',
  handle: async ({ data }) => {
    const { fullName, email } = data;
    const message = createNewUserMessage(fullName, email);
    await mailer.sendMail(message);
  }
};

module.exports = newUserMail;
