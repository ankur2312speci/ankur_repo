// ============================================
// Main JavaScript File
// ============================================

// Header Scroll Effect
const header = document.getElementById('header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// Mobile Menu Toggle
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const navMenu = document.getElementById('navMenu');

if (mobileMenuToggle && navMenu) {
    mobileMenuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        mobileMenuToggle.classList.toggle('active');
    });
}

// Animated Counter
function animateCounter(element, target, duration = 2000) {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target % 1 === 0 ? Math.floor(target) : target.toFixed(1);
            clearInterval(timer);
        } else {
            element.textContent = current % 1 === 0 ? Math.floor(current) : current.toFixed(1);
        }
    }, 16);
}

// Intersection Observer for Counters
const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
            const target = parseFloat(entry.target.getAttribute('data-target'));
            animateCounter(entry.target, target);
            entry.target.classList.add('counted');
        }
    });
}, observerOptions);

// Observe all stat numbers
document.querySelectorAll('.stat-number, .stat-value').forEach(stat => {
    observer.observe(stat);
});

// Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Form Validation and Submission (for contact form)
// Supports both EmailJS (no backend) and custom backend
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const service = document.getElementById('service').value;
        const message = document.getElementById('message').value;
        
        // Basic validation
        if (!name || !email || !message) {
            alert('Please fill in all required fields.');
            return;
        }

        // Show loading state
        const submitButton = contactForm.querySelector('button[type="submit"]');
        const originalButtonText = submitButton.textContent;
        submitButton.textContent = 'Sending...';
        submitButton.disabled = true;

        try {
            // Check if EmailJS is available (for static hosting)
            if (typeof emailjs !== 'undefined' && emailjs.send) {
                // Use EmailJS (no backend required)
                const templateParams = {
                    from_name: name,
                    from_email: email,
                    phone: phone || 'Not provided',
                    service: service || 'Not specified',
                    message: message,
                    to_name: 'DigitalEdge Team'
                };

                // Replace 'YOUR_SERVICE_ID' and 'YOUR_TEMPLATE_ID' with your EmailJS credentials
                await emailjs.send(
                    'YOUR_SERVICE_ID',    // Replace with your EmailJS Service ID
                    'YOUR_TEMPLATE_ID',   // Replace with your EmailJS Template ID
                    templateParams
                );

                alert('Thank you for your message! We will get back to you soon.');
                contactForm.reset();
            } else {
                // Fallback: Try backend API (if server is running)
                try {
                    const response = await fetch('/api/contact', {
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

                    if (!response.ok) throw new Error('Backend not available');

                    const data = await response.json();

                    if (data.success) {
                        alert(data.message || 'Thank you for your message! We will get back to you soon.');
                        contactForm.reset();
                    } else {
                        alert(data.message || 'Sorry, there was an error. Please try again.');
                    }
                } catch (backendError) {
                    // If backend fails, show helpful message
                    console.error('Backend error:', backendError);
                    alert('Form submission requires EmailJS setup or a running backend server.\n\nSee SETUP_GUIDE.md for instructions.');
                }
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Sorry, there was an error sending your message. Please check your EmailJS configuration or try again later.');
        } finally {
            // Reset button state
            submitButton.textContent = originalButtonText;
            submitButton.disabled = false;
        }
    });
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    console.log('DigitalEdge website loaded successfully!');
});

