const express = require('express');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');

dotenv.config(); // Load environment variables

const app = express();

// Enable CORS
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Ensure uploads folder exists
const uploadPath = 'uploads/';
if (!fs.existsSync(uploadPath)) {
  fs.mkdirSync(uploadPath);
}

// Set up file storage
const storage = multer.diskStorage({
  destination: uploadPath,
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

// Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER, // Use environment variables
    pass: process.env.EMAIL_PASS, // App Password (not Gmail password)
  },
});

// Form submission route
app.post('/api/submit-form', upload.single('resume'), (req, res) => {
  const { name, number, email, subject, message } = req.body;
  const resume = req.file;

  if (!resume) {
    return res.status(400).json({ message: 'Resume file is required' });
  }

  console.log('Received Form:', { name, number, email, subject, message, resume });

  const mailOptions = {
    from: process.env.EMAIL_USER, // Ensure this matches the authenticated email
    to: process.env.EMAIL_USER,
    subject: `New Submission: ${subject}`,
    text: `Name: ${name}\nNumber: ${number}\nEmail: ${email}\nMessage: ${message}`,
    attachments: [{ filename: resume.originalname, path: resume.path }],
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error.message);
      return res.status(500).json({ message: 'Error sending email', error: error.message });
    }
    console.log('Email sent:', info.response);
    res.json({ message: 'Form submitted and email sent successfully!' });
  });
});

// Start server
app.listen(5001, () => {
  console.log('Server running on http://localhost:5001');
});
