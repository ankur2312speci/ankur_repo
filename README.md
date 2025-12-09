# DigitalEdge - Digital Marketing Agency Website

A modern, responsive website for a digital marketing agency built with HTML, CSS, and JavaScript.

## Features

### Pages
- **Home** - Hero section with animated statistics, service overview
- **Services** - Detailed service pages (SEO, PPC, Social Media) with comparison table
- **Portfolio** - Case studies grid with filtering and detailed case study pages
- **About Us** - Team section, mission, and values
- **Blog** - Blog listing and detailed blog post pages
- **Contact** - Contact form and map integration placeholder

### Complex Layout Features
- ✅ Animated statistics (counters)
- ✅ Service comparison table
- ✅ Case study cards with hover animations
- ✅ Responsive 3-column grid + masonry grid support
- ✅ Sticky header + mega menu

### Design System
- **Primary Color**: Indigo/Blue (#4F46E5)
- **Fonts**: Inter (body) / Poppins (headings)
- **UI Components**: Cards, badges, CTA buttons, tag styles, pricing cards

## Project Structure

```
.
├── index.html              # Home page
├── services.html           # Services page
├── portfolio.html         # Portfolio listing
├── case-study-1.html      # Case study detail page
├── about.html             # About Us page
├── blog.html              # Blog listing
├── blog-post-1.html       # Blog post detail
├── contact.html           # Contact page
├── css/
│   └── style.css         # Main stylesheet
├── js/
│   ├── main.js           # Main JavaScript
│   └── portfolio.js      # Portfolio filtering
└── README.md             # This file
```

## Getting Started

### Frontend Only (Static)
1. Open `index.html` in a web browser
2. All pages are linked and ready to navigate
3. No build process required - pure HTML/CSS/JS

### With Backend (Full Stack)
1. Install dependencies: `npm install`
2. Configure email in `.env` file (see `env.example.txt`)
3. Start server: `npm start` or `npm run dev`
4. Visit `http://localhost:3000`
5. See `BACKEND_SETUP.md` for detailed setup instructions

## Features Breakdown

### Animated Statistics
- Counters animate when scrolled into view
- Uses Intersection Observer API
- Smooth number counting animation

### Sticky Header
- Header becomes sticky on scroll
- Shadow effect on scroll
- Mobile-responsive hamburger menu

### Mega Menu
- Hover-activated dropdown menu
- Three-column layout
- Smooth transitions

### Portfolio Filtering
- Filter buttons for different service categories
- Smooth card animations on filter
- Grid layout with hover effects

### Responsive Design
- Mobile-first approach
- Breakpoints at 768px and 968px
- Fully responsive on all devices

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Customization

### Colors
Edit CSS variables in `css/style.css`:
```css
:root {
    --primary: #4F46E5;
    --primary-dark: #4338CA;
    --primary-light: #6366F1;
    /* ... */
}
```

### Fonts
Fonts are loaded from Google Fonts. Change in HTML `<head>`:
```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Poppins:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
```

## Contact Form Setup

The contact form supports two methods:

### Option 1: EmailJS (Recommended - No Backend)
1. Sign up at [emailjs.com](https://www.emailjs.com/)
2. Get your Public Key, Service ID, and Template ID
3. Update `contact.html` with your Public Key
4. Update `js/main.js` with your Service ID and Template ID
5. Done! Works on any static hosting.

**See `QUICK_SETUP.md` for 5-minute setup guide.**

### Option 2: Node.js Backend
1. Run `npm install`
2. Create `.env` file with email credentials
3. Run `npm start`
4. Form will work on `http://localhost:3000`

**See `SETUP_GUIDE.md` for detailed instructions.**

## Notes

- Contact form works with EmailJS (no backend) or Node.js backend
- Map section includes placeholder - integrate Google Maps API for full functionality
- All images use emoji placeholders - replace with actual images
- Case study and blog post pages are templates - duplicate and customize as needed

## License

This project is open source and available for use.

