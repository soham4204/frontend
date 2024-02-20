// functions/sendEmail.js
const functions = require('firebase-functions');
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'mindfitcc@gmail.com', // Your Gmail email address
    pass: 'mindfit2022', // Your Gmail email password
  },
});

exports.sendEmail = functions.https.onCall(async (data, context) => {
  const { name, email, message } = data;

  const mailOptions = {
    from: 'mindfitcc@gmail.com', 
    to: email,
    subject: 'Mindfit: Campus Connect - New Message',
    text: `Hi ${name},\n\nThank you for reaching out. Your message:\n\n${message}`,
  };

  await transporter.sendMail(mailOptions);

  return { success: true };
});
