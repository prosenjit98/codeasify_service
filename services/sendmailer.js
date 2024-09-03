const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  // host: "smtp.gmail.com",
  // port: 587,
  // secure: false, // Use `true` for port 465, `false` for all other ports
  service: "gmail",
  // authMethod: 'plain',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

async function sendNow(sendTo, subject, message, sendFrom= null) {
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: sendFrom ?? "Codeasify<avijitkuila7001@gmail.com>",
    to: sendTo ?? "chongder.pro@gmail.com", // list of receivers
    subject: subject ?? "Hello ✔", // Subject line
    text: message ?? "Hello world?", // plain text body
    html: message ?? "<b>Hello world?</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
}

module.exports = sendNow
