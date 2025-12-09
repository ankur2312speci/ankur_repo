// ============================================
// Express Server for DigitalEdge Website
// ============================================

// Load environment variables from .env file
require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname)));

// Email configuration (using Gmail as example)
// For production, use environment variables
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER || 'your-email@gmail.com',
        pass: process.env.EMAIL_PASS || 'your-app-password'
    }
});

// Contact Form Endpoint
app.post('/api/contact', async (req, res) => {
    try {
        const { name, email, phone, service, message } = req.body;

        // Validation
        if (!name || !email || !message) {
            return res.status(400).json({ 
                success: false, 
                message: 'Please fill in all required fields.' 
            });
        }

        // Email content
        const recipientEmail = process.env.RECIPIENT_EMAIL || process.env.EMAIL_USER || 'hello@digitaledge.com';
        const mailOptions = {
            from: process.env.EMAIL_USER || 'your-email@gmail.com',
            to: recipientEmail, // Your business email
            subject: `New Contact Form Submission from ${name}`,
            html: `
                <h2>New Contact Form Submission</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
                <p><strong>Service Interested In:</strong> ${service || 'Not specified'}</p>
                <p><strong>Message:</strong></p>
                <p>${message}</p>
            `,
            replyTo: email
        };

        // Send email
        await transporter.sendMail(mailOptions);

        // Send confirmation email to user
        const confirmationMail = {
            from: process.env.EMAIL_USER || 'your-email@gmail.com',
            to: email,
            subject: 'Thank you for contacting DigitalEdge',
            html: `
                <h2>Thank you for contacting us!</h2>
                <p>Hi ${name},</p>
                <p>We've received your message and will get back to you within 24 hours.</p>
                <p>Best regards,<br>The DigitalEdge Team</p>
            `
        };

        await transporter.sendMail(confirmationMail);

        res.json({ 
            success: true, 
            message: 'Thank you for your message! We will get back to you soon.' 
        });

    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ 
            success: false, 
            message: 'Sorry, there was an error sending your message. Please try again later.' 
        });
    }
});

// Newsletter Subscription Endpoint (if needed)
app.post('/api/newsletter', async (req, res) => {
    try {
        const { email } = req.body;

        if (!email) {
            return res.status(400).json({ 
                success: false, 
                message: 'Email is required.' 
            });
        }

        // Here you would typically save to a database
        // For now, we'll just send a confirmation
        console.log('Newsletter subscription:', email);

        res.json({ 
            success: true, 
            message: 'Successfully subscribed to newsletter!' 
        });

    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ 
            success: false, 
            message: 'An error occurred.' 
        });
    }
});

// Serve static files
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    console.log('Make sure to configure your email settings in server.js or environment variables');
});

