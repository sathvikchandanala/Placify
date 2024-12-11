import nodeMailer from "nodemailer";

export const sendEmail = async ({ email, subject, message }) => {
  const transporter = nodeMailer.createTransport({
    host: process.SMTP_HOST,
    service: process.SMTP_SERVICE,
    port: process.SMTP_PORT,
    auth: {
      user: process.SMTP_MAIL,
      pass: process.SMTP_PASSWORD,
    },
  });

  const options = {
    from: process.SMTP_MAIL,
    to: email,
    subject: subject,
    text: message,
  };

  await transporter.sendMail(options);
};
