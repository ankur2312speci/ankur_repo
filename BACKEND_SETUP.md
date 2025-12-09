# Backend Setup Guide

This website now includes a Node.js/Express backend for handling contact form submissions.

## Prerequisites

- Node.js (v14 or higher)
- npm (comes with Node.js)

## Installation

1. Install dependencies:
```bash
npm install
```

2. Configure email settings:

   **Option A: Using Environment Variables (Recommended)**
   
   Create a `.env` file in the root directory:
   ```
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-password
   PORT=3000
   ```
   
   For Gmail:
   - Enable 2-Step Verification
   - Generate an App Password: Google Account > Security > 2-Step Verification > App passwords
   - Use the generated app password (not your regular password)

   **Option B: Edit server.js directly**
   
   Update the email configuration in `server.js`:
   ```javascript
   auth: {
       user: 'your-email@gmail.com',
       pass: 'your-app-password'
   }
   ```

## Running the Server

### Development Mode (with auto-reload):
```bash
npm run dev
```

### Production Mode:
```bash
npm start
```

The server will start on `http://localhost:3000`

## API Endpoints

### POST /api/contact
Handles contact form submissions.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+1234567890",
  "service": "SEO",
  "message": "Hello, I'm interested in your services."
}
```

**Response:**
```json
{
  "success": true,
  "message": "Thank you for your message! We will get back to you soon."
}
```

### POST /api/newsletter
Handles newsletter subscriptions (placeholder - add database integration as needed).

## Email Services

The current setup uses Gmail. For production, consider:

1. **SendGrid** - Professional email service
2. **Mailgun** - Transactional email API
3. **AWS SES** - Amazon's email service
4. **SMTP** - Your own mail server

To use a different service, update the transporter configuration in `server.js`.

## Database Integration (Optional)

To store form submissions in a database:

1. Install a database driver (e.g., `mongoose` for MongoDB, `pg` for PostgreSQL)
2. Create a schema/model for contact submissions
3. Save submissions before sending email
4. Add admin panel to view submissions

Example with MongoDB:
```bash
npm install mongoose
```

## Deployment

### Heroku
1. Create `Procfile`:
   ```
   web: node server.js
   ```
2. Set environment variables in Heroku dashboard
3. Deploy

### Vercel/Netlify
- These platforms are better for static sites
- Consider using serverless functions for form handling
- Or use a service like Formspree, EmailJS, or Netlify Forms

### DigitalOcean/AWS
- Deploy as a Node.js application
- Use PM2 for process management
- Set up reverse proxy with Nginx

## Security Notes

- Never commit `.env` file to version control
- Use environment variables for sensitive data
- Consider adding rate limiting for form submissions
- Add CAPTCHA to prevent spam
- Validate and sanitize all inputs

## Troubleshooting

**Email not sending:**
- Check email credentials
- Verify App Password is correct (for Gmail)
- Check firewall/network settings
- Review server logs for errors

**Port already in use:**
- Change PORT in `.env` file
- Or kill the process using the port

