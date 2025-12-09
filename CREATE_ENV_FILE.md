# How to Create Your .env File

## Quick Steps:

### 1. Copy the Template
Copy `.env.example` to `.env`:

**Windows (PowerShell):**
```powershell
Copy-Item .env.example .env
```

**Windows (Command Prompt):**
```cmd
copy .env.example .env
```

**Mac/Linux:**
```bash
cp .env.example .env
```

### 2. Open .env File
Open the `.env` file in any text editor.

### 3. Fill in Your Email Credentials

#### For Gmail:

**A. Get Your Email:**
```
EMAIL_USER=your-actual-email@gmail.com
```

**B. Generate App Password:**
1. Go to: [Google Account Security](https://myaccount.google.com/security)
2. Enable **2-Step Verification** (if not already enabled)
3. Go to: **App passwords**
4. Select app: **Mail**
5. Select device: **Other (Custom name)** → Type "DigitalEdge"
6. Click **Generate**
7. Copy the 16-character password (no spaces)
8. Paste it in `.env`:

```
EMAIL_PASS=abcd efgh ijkl mnop
```

**Important:** Remove spaces! It should look like:
```
EMAIL_PASS=abcdefghijklmnop
```

### 4. Set Port (Optional)
If port 3000 is busy, change it:
```
PORT=3001
```

### 5. Set Recipient Email (Optional)
If you want form submissions sent to a different email:
```
RECIPIENT_EMAIL=hello@yourdomain.com
```

### 6. Save and Done!
Save the `.env` file. It's ready to use!

---

## Example .env File:

```env
EMAIL_USER=john.doe@gmail.com
EMAIL_PASS=abcdefghijklmnop
PORT=3000
RECIPIENT_EMAIL=contact@mybusiness.com
```

---

## ⚠️ Important Notes:

1. **Never commit .env to Git** - It's already in `.gitignore`
2. **Keep your password secret** - Don't share the .env file
3. **App Password, not regular password** - Gmail requires app password for security
4. **No spaces in password** - Remove all spaces from the app password

---

## ✅ Test Your Setup:

1. Make sure `.env` file exists
2. Run: `npm install` (to install dotenv package)
3. Run: `npm start`
4. Submit the contact form
5. Check your email inbox!

---

## 🐛 Troubleshooting:

**"Invalid login" error:**
- Make sure you're using App Password, not regular password
- Check that 2-Step Verification is enabled
- Verify no spaces in password

**"Port already in use" error:**
- Change PORT in .env to a different number (e.g., 3001)

**Emails not sending:**
- Check spam folder
- Verify EMAIL_USER and EMAIL_PASS are correct
- Check server console for error messages

