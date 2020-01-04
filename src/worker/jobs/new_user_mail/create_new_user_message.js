const createNewUserMessage = (fullName, email) => {
  return {
    from: `Mateus Malaquais <mateusmalaquiasdev@outlook.com>`,
    to: `${fullName} <${email}>`,
    subject: `Welcome to Pidove Mail Service`,
    html: `Hey ${fullName},
      </p>
      I’m Mateus Malaquias, the founder of Pidove Mail Service and I’d like to personally thank you for signing up to our service.
      <br>
      We established Pidove Mail Service in order to be an always-on marketing platform for small open source projects.
      <br>
      I’d love to hear what you think of our service and if there is anything we can improve.
       </p>
      If you have any questions, please reply to this email or open a issue in our GitHub repository.
      </p>
      I’m always happy to help!
      </p>
      Mateus Malaquias`
  };
};

module.exports = createNewUserMessage;
