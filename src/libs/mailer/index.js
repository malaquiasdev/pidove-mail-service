const { log } = require('fastify')();
const nodemailer = require('nodemailer');
const mailerConfig = require('../../../config/mailer_host');
const sendMail = require('./send_mail');

const transport = nodemailer.createTransport(mailerConfig);

const mailerFactory = key => {
  return {
    key,
    sendMail: async message => sendMail({ log, transport, message })
  };
};

module.exports = mailerFactory;
