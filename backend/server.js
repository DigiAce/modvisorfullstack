const express = require("express");
const cors = require("cors");
const multer = require("multer");
const fs = require("fs");
const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
const path = require("path");

dotenv.config(); // Load environment variables

const app = express();
const PORT = process.env.PORT || 5001;

// Validate environment variables
if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
  console.error("Missing required environment variables. Check your .env file.");
  process.exit(1);
}

// Enable CORS for specific frontend domain
const allowedOrigins = ["https://www.modvisorconsultants.com"];
app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("CORS not allowed for this origin"));
      }
    },
  })
);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Ensure uploads folder exists
const uploadPath = path.join(__dirname, "uploads");
if (!fs.existsSync(uploadPath)) {
  fs.mkdirSync(uploadPath, { recursive: true });
}

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: uploadPath,
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + "-" + file.originalname);
  },
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
  fileFilter: (req, file, cb) => {
    if (!file.mimetype.startsWith("application/pdf")) {
      return cb(new Error("Only PDF files are allowed!"), false);
    }
    cb(null, true);
  },
});

// Configure Nodemailer
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS, // Use App Password
  },
});

// Form submission route
app.post("/api/submit-form", upload.single("resume"), async (req, res) => {
  try {
    const { name, number, email, subject, message } = req.body;
    const resume = req.file;

    if (!resume) {
      return res.status(400).json({ message: "Resume file is required" });
    }

    console.log("Received Form:", { name, number, email, subject, message, resume });

    // Email setup
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `New Submission: ${subject}`,
      text: `Name: ${name}\nNumber: ${number}\nEmail: ${email}\nMessage: ${message}`,
      attachments: [{ filename: resume.originalname, path: resume.path }],
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent:", info.response);

    res.json({ message: "Form submitted and email sent successfully!" });
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
