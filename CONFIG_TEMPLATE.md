# Configuration Template

Copy these values after setting up EmailJS and paste them into the files:

## EmailJS Credentials

After setting up EmailJS (see QUICK_SETUP.md), you'll get:

```
Public Key:    _________________________
Service ID:    _________________________
Template ID:   _________________________
```

## Where to Paste:

### 1. In `contact.html` (around line 10):
```html
emailjs.init("PASTE_PUBLIC_KEY_HERE");
```

### 2. In `js/main.js` (around line 120):
```javascript
await emailjs.send(
    'PASTE_SERVICE_ID_HERE',
    'PASTE_TEMPLATE_ID_HERE',
    templateParams
);
```

## Quick Test:

1. Open `contact.html` in browser
2. Fill out the form
3. Submit
4. Check your email inbox!

If you see an error, double-check that all three values are correctly pasted.

