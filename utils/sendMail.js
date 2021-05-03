const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendMail = (toEmail, code) => {
  const msg = {
    to: toEmail,
    from: process.env.FROM_EMAIL,
    subject: "Verification code",
    text: "verify your account using this code",
    html: `verify your account using this code <strong>${code}</strong>`,
  };
  //ES6
  sgMail.send(msg).then(
    () => {},
    (error) => {
      console.error(error);

      if (error.response) {
        console.error(error.response.body);
      }
    }
  );
};

module.exports = sendMail;
