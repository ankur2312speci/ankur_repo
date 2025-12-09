# Complete Setup Guide - Make Your Website Fully Functional

This guide will help you set up the contact form to work properly. Choose one of the methods below.

## 🚀 Method 1: EmailJS (Recommended - No Backend Required)

**Best for:** Static hosting (GitHub Pages, Netlify, Vercel, etc.)

### Step 1: Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account (100 emails/month free)

### Step 2: Set Up Email Service
1. Go to **Email Services** in dashboard
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions
5. **Copy your Service ID** (e.g., `service_abc123`)

### Step 3: Create Email Template
1. Go to **Email Templates** in dashboard
2. Click **Create New Template**
3. Use this template:

```
Subject: New Contact Form Submission from {{from_name}}

Hello,

You have received a new contact form submission:

Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Service: {{service}}

Message:
{{message}}

---
Reply to: {{from_email}}
```

4. **Copy your Template ID** (e.g., `template_xyz789`)

### Step 4: Get Your Public Key
1. Go to **Account** > **General**
2. Find **Public Key**
3. **Copy your Public Key**

### Step 5: Update Your Website Files

**Update `contact.html`** (around line 10):
```html
<script type="text/javascript">
    emailjs.init("YOUR_PUBLIC_KEY_HERE"); // Paste your Public Key
</script>
```

**Update `js/main.js`** (around line 120):
```javascript
await emailjs.send(
    'YOUR_SERVICE_ID',    // Paste your Service ID
    'YOUR_TEMPLATE_ID',   // Paste your Template ID
    templateParams
);
```

### ✅ Done! Your form will now work without any backend server.

---

## 🔧 Method 2: Node.js Backend (For Full Control)

**Best for:** Custom hosting, database storage, advanced features

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Configure Email
Create a `.env` file:
```
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
PORT=3000
```

**For Gmail:**
- Enable 2-Step Verification
- Generate App Password: Google Account > Security > 2-Step Verification > App passwords
- Use the generated app password

### Step 3: Update Email Recipient
In `server.js`, change:
```javascript
to: 'hello@digitaledge.com', // Change to your email
```

### Step 4: Run Server
```bash
npm start
```

### Step 5: Access Website
Visit: `http://localhost:3000`

---

## 📋 Method 3: Formspree (Alternative - No Backend)

**Best for:** Quick setup, no coding required

### Step 1: Sign Up
1. Go to [https://formspree.io/](https://formspree.io/)
2. Sign up for free account (50 submissions/month free)

### Step 2: Create Form
1. Click **New Form**
2. Copy your **Form Endpoint URL** (e.g., `https://formspree.io/f/YOUR_FORM_ID`)

### Step 3: Update JavaScript
Replace the form submission code in `js/main.js` with:

```javascript
const response = await fetch('YOUR_FORMSPREE_URL', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        name,
        email,
        phone,
        service,
        message
    })
});
```

---

## 🎯 Quick Start Checklist

### For EmailJS (Easiest):
- [ ] Sign up at emailjs.com
- [ ] Create email service
- [ ] Create email template
- [ ] Get Public Key, Service ID, Template ID
- [ ] Update `contact.html` with Public Key
- [ ] Update `js/main.js` with Service ID and Template ID
- [ ] Test the form!

### For Node.js Backend:
- [ ] Run `npm install`
- [ ] Create `.env` file with email credentials
- [ ] Update recipient email in `server.js`
- [ ] Run `npm start`
- [ ] Test the form!

---

## 🐛 Troubleshooting

### Form shows error message:
1. **EmailJS:** Check that Public Key, Service ID, and Template ID are correct
2. **Backend:** Make sure server is running (`npm start`)
3. **Backend:** Check email credentials in `.env` file

### Emails not received:
1. Check spam folder
2. Verify email service is connected in EmailJS dashboard
3. Check server logs for errors

### Backend connection error:
- Make sure you're running the Node.js server
- Or switch to EmailJS method (no server needed)

---

## 📝 Which Method Should I Use?

| Method | Best For | Setup Time | Cost |
|--------|----------|------------|------|
| **EmailJS** | Static sites, beginners | 5 minutes | Free (100/month) |
| **Node.js** | Full control, databases | 15 minutes | Free (self-hosted) |
| **Formspree** | Quick setup, no coding | 3 minutes | Free (50/month) |

**Recommendation:** Start with **EmailJS** - it's the easiest and works everywhere!

---

## 🎉 After Setup

Once configured, your contact form will:
- ✅ Send emails to your inbox
- ✅ Show success/error messages
- ✅ Work on any hosting platform
- ✅ No backend server required (with EmailJS)

Your website is now fully functional! 🚀

