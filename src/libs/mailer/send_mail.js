const sendMail = async ({ log, transport, message }) => {
  const info = await transport.sendMail(message);
  log.info(info);
  return info;
};

module.exports = sendMail;
