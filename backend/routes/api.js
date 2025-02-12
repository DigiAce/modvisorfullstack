const express = require('express');
const emailController = require('../controllers/emailController');
const multer = require('multer');

const router = express.Router();

// Multer configuration
const upload = multer({ dest: 'uploads/' });

// POST /api/send-email
router.post('/send-email', upload.single('resume'), emailController.sendEmail);

module.exports = router;