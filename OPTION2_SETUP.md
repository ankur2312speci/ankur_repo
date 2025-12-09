# ✅ Option 2: Backend Server Setup

## 🎯 Quick Setup (3 Steps)

### **Step 1: Get Gmail App Password** (5 min)

1. Visit: https://myaccount.google.com/apppasswords
2. Generate password for "Mail" → "Other" → "DigitalEdge"
3. Copy the 16-character password

---

### **Step 2: Update .env File** (2 min)

Open `.env` and replace:

```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-16-char-password
PORT=3000
```

**Example:**
```env
EMAIL_USER=john@gmail.com
EMAIL_PASS=abcd efgh ijkl mnop
PORT=3000
```

---

### **Step 3: Start Server** (1 min)

**Option A: Double-click**
- Double-click `START_SERVER.bat`

**Option B: Command Line**
```bash
npm install
npm start
```

---

## ✅ Test It!

1. Open: `http://localhost:3000`
2. Go to Contact page
3. Submit form
4. Check your email! 📧

---

## 📋 Your .env File Should Look Like:

```env
EMAIL_USER=your-actual-email@gmail.com
EMAIL_PASS=abcdefghijklmnop
PORT=3000
```

**That's it!** Your website is now 100% ready! 🚀

---

## 🆘 Need Help?

See `BACKEND_QUICK_START.md` for detailed instructions.

