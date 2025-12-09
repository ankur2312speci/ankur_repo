# 🚀 Backend Server Setup - Quick Start Guide

## Step-by-Step Setup (10 minutes)

### Step 1: Get Gmail App Password (5 minutes)

1. **Go to Google Account Security:**
   - Visit: https://myaccount.google.com/security
   - Sign in with your Gmail account

2. **Enable 2-Step Verification** (if not already enabled):
   - Click on "2-Step Verification"
   - Follow the setup process
   - This is required for App Passwords

3. **Generate App Password:**
   - Go to: https://myaccount.google.com/apppasswords
   - Or: Google Account → Security → App passwords
   - Select app: **Mail**
   - Select device: **Other (Custom name)**
   - Type: "DigitalEdge Website"
   - Click **Generate**

4. **Copy the Password:**
   - You'll see a 16-character password (like: `abcd efgh ijkl mnop`)
   - **Important:** Copy it exactly, including spaces (we'll remove them)
   - This password is only shown once!

---

### Step 2: Configure .env File (2 minutes)

1. **Open `.env` file** in your project folder

2. **Replace the placeholder values:**

```env
EMAIL_USER=your-actual-email@gmail.com
EMAIL_PASS=abcdefghijklmnop
PORT=3000
```

**Example:**
```env
EMAIL_USER=john.doe@gmail.com
EMAIL_PASS=abcd efgh ijkl mnop
PORT=3000
```

**Important Notes:**
- Use your actual Gmail address
- For `EMAIL_PASS`: You can keep spaces OR remove them (both work)
- `PORT=3000` is fine unless that port is busy

3. **Optional - Set Recipient Email:**
   If you want form submissions sent to a different email:
```env
RECIPIENT_EMAIL=contact@yourdomain.com
```

4. **Save the file**

---

### Step 3: Install Dependencies (1 minute)

Open terminal/command prompt in your project folder and run:

```bash
npm install
```

This installs all required packages (express, nodemailer, dotenv, etc.)

---

### Step 4: Start the Server (1 minute)

Run this command:

```bash
npm start
```

You should see:
```
Server is running on http://localhost:3000
Make sure to configure your email settings in server.js or environment variables
```

---

### Step 5: Test Your Website (1 minute)

1. **Open your browser**
2. **Visit:** `http://localhost:3000`
3. **Navigate to Contact page**
4. **Fill out the form**
5. **Submit**
6. **Check your email inbox!** (and spam folder)

---

## ✅ Success Checklist

- [ ] Gmail App Password generated
- [ ] `.env` file updated with credentials
- [ ] `npm install` completed successfully
- [ ] Server starts without errors
- [ ] Website loads at `http://localhost:3000`
- [ ] Contact form submits successfully
- [ ] Email received in inbox

---

## 🐛 Troubleshooting

### "Invalid login" Error
- ✅ Make sure you're using **App Password**, not regular password
- ✅ Check that 2-Step Verification is enabled
- ✅ Verify no typos in `.env` file
- ✅ Make sure password has no extra spaces

### "Port 3000 already in use"
- Change `PORT=3001` in `.env` file
- Or close the program using port 3000

### "Cannot find module" Error
- Run `npm install` again
- Make sure you're in the project folder

### Email Not Received
- Check spam/junk folder
- Verify `EMAIL_USER` is correct
- Check server console for error messages
- Make sure server is running

### Form Shows Error
- Make sure server is running (`npm start`)
- Visit `http://localhost:3000` (not file://)
- Check browser console for errors (F12)

---

## 🎯 Quick Commands Reference

```bash
# Install dependencies
npm install

# Start server (production)
npm start

# Start server (development with auto-reload)
npm run dev

# Stop server
Press Ctrl+C in terminal
```

---

## 📧 Email Configuration Details

**What emails will be sent:**

1. **To You (Business Email):**
   - Subject: "New Contact Form Submission from [Name]"
   - Contains: Name, Email, Phone, Service, Message
   - Reply-To: Set to sender's email

2. **To User (Confirmation):**
   - Subject: "Thank you for contacting DigitalEdge"
   - Confirmation that their message was received

**To change recipient email:**
- Add `RECIPIENT_EMAIL=your-email@domain.com` to `.env`
- Or edit `server.js` line 47

---

## 🚀 You're Ready!

Once the server is running, your website is **100% functional**!

- ✅ All pages work
- ✅ Contact form sends emails
- ✅ Everything is ready!

**Next:** Just keep the server running while testing, or deploy it to a hosting service for production.

