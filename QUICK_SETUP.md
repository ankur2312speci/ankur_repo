# ⚡ Quick Setup - 5 Minutes to Working Form

## Fastest Way: Use EmailJS (No Backend Needed!)

### 1. Sign Up (2 minutes)
- Go to: https://www.emailjs.com/
- Click "Sign Up" (free account)

### 2. Get Your Keys (2 minutes)
After signing up, you'll need 3 things:

**A. Public Key:**
- Go to: Account → General
- Copy "Public Key"

**B. Service ID:**
- Go to: Email Services → Add New Service
- Choose Gmail (or your email)
- Copy "Service ID"

**C. Template ID:**
- Go to: Email Templates → Create New Template
- Use this template:
```
Subject: New Contact: {{from_name}}

Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Service: {{service}}

Message: {{message}}
```
- Copy "Template ID"

### 3. Update Files (1 minute)

**File 1: `contact.html`** (line ~10)
Replace `YOUR_PUBLIC_KEY` with your Public Key:
```html
emailjs.init("YOUR_PUBLIC_KEY_HERE");
```

**File 2: `js/main.js`** (line ~120)
Replace both IDs:
```javascript
await emailjs.send(
    'YOUR_SERVICE_ID',    // Your Service ID
    'YOUR_TEMPLATE_ID',   // Your Template ID
    templateParams
);
```

### ✅ Done! Test your form now!

---

## Alternative: Run Backend Server

If you prefer the Node.js backend:

```bash
# 1. Install
npm install

# 2. Create .env file
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password

# 3. Run
npm start

# 4. Visit
http://localhost:3000
```

**That's it!** Your form will work. 🎉

