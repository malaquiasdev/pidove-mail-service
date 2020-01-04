const log = require('pino')({ level: 'info' });
const fastify = require('fastify')({ logger: log });
const nodemailer = require('nodemailer');
const mailerConfig = require('../../../config/mailer_host');
const sendMail = require('./send_mail');

const transport = nodemailer.createTransport(mailerConfig);

const mailerFactory = () => {
  return {
    sendMail: async message => sendMail({ log, transport, message })
  };
};

module.exports = mailerFactory;
