const nodemailer = require('nodemailer');
const path = require('path');

const sendEmail = async (req, res) => {
  const { name, email, subject, message } = req.body;
  const resume = req.file; // Uploaded file

  // Create a transporter
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  // Compose the email
  let mailOptions = {
    from: email,
    to: process.env.EMAIL_RECEIVER, // Replace with the recipient's email
    subject: subject,
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    html: `<p>Name: ${name}</p><p>Email: ${email}</p><p>Message: ${message}</p>`,
    attachments: resume
      ? [
          {
            filename: resume.originalname || 'resume.pdf',
            path: resume.path, // Path to the uploaded file
          },
        ]
      : [],
  };

  // Send the email
  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to send email' });
  }
};

module.exports = { sendEmail };