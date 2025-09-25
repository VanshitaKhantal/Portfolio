// Initialize AOS (Animate On Scroll)
AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});

// DOM Elements
const themeToggle = document.getElementById('themeToggle');
const hamburger = document.getElementById('hamburger');
const navMenu = document.querySelector('.nav-menu');
const scrollTopBtn = document.getElementById('scrollTop');
const contactForm = document.getElementById('contactForm');
const projectsGrid = document.getElementById('projectsGrid');

// Theme Management
function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
}

function updateThemeIcon(theme) {
    const icon = themeToggle.querySelector('i');
    icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
}

// Mobile Navigation
function toggleMobileMenu() {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
}

function closeMobileMenu() {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}

// Smooth Scrolling for Navigation Links
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                closeMobileMenu();
            }
        });
    });
}

// Scroll to Top Button
function handleScrollTop() {
    if (window.pageYOffset > 300) {
        scrollTopBtn.classList.add('visible');
    } else {
        scrollTopBtn.classList.remove('visible');
    }
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Skills Animation
function animateSkills() {
    const skillBars = document.querySelectorAll('.skill-progress');
    const skillsSection = document.getElementById('skills');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                skillBars.forEach(bar => {
                    const width = bar.getAttribute('data-width');
                    bar.style.setProperty('--target-width', width);
                    bar.style.width = width;
                    bar.classList.add('animate');
                });
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    if (skillsSection) {
        observer.observe(skillsSection);
    }
}

// Load Projects
function loadProjects() {
    const projects = [
        {
            "title": "SkyBooker - Flight Booking System",
            "description": "A dynamic flight booking solution offering real-time search, secure payments, personalized itineraries, and user reviews. Enhanced with an integrated chatbot for travel assistance, SkyBooker simplifies the entire journey—from planning to boarding.",
            "image": "https://media.istockphoto.com/photos/night-flight-of-a-passenger-jet-airplane-picture-id175544661?k=6&m=175544661&s=612x612&w=0&h=42guBpWuC5yybDGNfZw09FS4xpjW-UGDXjjK1419iOY=",
            "technologies": ["ASP.NET Core", "SQL Server", "WebAPI", "Angular", "GenAI"]
        },
        {
            "title": "Ask Adam 2.0 - Onboarding Chatbot",
            "description": "An intelligent onboarding assistant powered by RAG and SQL Database. Ask Adam 2.0 guides users through processes with conversational ease, gves responses to onboarding queries and integrates with major messaging platforms to deliver support anytime, anywhere.",
            "image": "https://coruzant.com/wp-content/uploads/2022/10/chatbot-robot.jpg",
            "technologies": ["GenAI", "RAG", "SQL Server", "C#", ".NET Core"]
        },
        {
            "title": "Clarivo - Meeting Minutes Generator",
            "description": "Clarivo is an AI-powered meeting minutes generator that transcribes and summarizes meetings in real-time. It integrates with popular video conferencing platforms to provide accurate and concise meeting notes, enhancing productivity and collaboration.",
            "image": "https://www.tgccpa.com/wp-content/uploads/2019/04/Meeting-Minutes.png",
            "technologies": ["ASP.NET Core", "SQL Server", "OpenAI", "AngularJS", "HTML", "CSS"]
        }
    ];
    renderProjects(projects);
}



function renderProjects(projects) {
    const projectsHTML = projects.map(project => `
        <div class="project-card" data-aos="fade-up">
            <div class="project-image">
                <img src="${project.image}" alt="${project.title}">
            </div>
            <div class="project-content">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                ${project.technologies ? `<div class="project-tech">
                    ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                </div>` : ''}

            </div>
        </div>
    `).join('');
    
    projectsGrid.innerHTML = projectsHTML;
}

// Form Validation
function validateForm(formData) {
    const errors = {};
    
    // Name validation
    if (!formData.name.trim()) {
        errors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
        errors.name = 'Name must be at least 2 characters';
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
        errors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
        errors.email = 'Please enter a valid email address';
    }
    
    // Message validation
    if (!formData.message.trim()) {
        errors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
        errors.message = 'Message must be at least 10 characters';
    }
    
    return errors;
}

function displayErrors(errors) {
    // Clear previous errors
    document.querySelectorAll('.error-message').forEach(error => {
        error.textContent = '';
    });
    
    // Display new errors
    Object.keys(errors).forEach(field => {
        const errorElement = document.getElementById(`${field}Error`);
        if (errorElement) {
            errorElement.textContent = errors[field];
        }
    });
}

async function handleFormSubmit(e) {
    e.preventDefault();
    
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };
    
    const errors = validateForm(formData);
    
    if (Object.keys(errors).length === 0) {
        const submitBtn = e.target.querySelector('.submit-btn');
        const originalText = submitBtn.textContent;
        
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
        
        try {
            const response = await fetch('http://localhost:5256/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            
            if (response.ok) {
                const result = await response.json();
                alert('Message sent successfully! I\'ll get back to you soon.');
                contactForm.reset();
            } else {
                const result = await response.json();
                alert('Failed to send message: ' + (result.message || 'Unknown error'));
            }
        } catch (error) {
            console.error('API Connection Error:', error);
            console.log('Make sure API is running on http://localhost:5256');
            alert('Connection failed. Please check if the API is running on http://localhost:5256');
        } finally {
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }
    } else {
        displayErrors(errors);
    }
}

// Active Navigation Link
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

// Navbar Background on Scroll
function handleNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = document.documentElement.getAttribute('data-theme') === 'dark' 
            ? 'rgba(17, 24, 39, 0.98)' 
            : 'rgba(255, 255, 255, 0.98)';
    } else {
        navbar.style.background = document.documentElement.getAttribute('data-theme') === 'dark' 
            ? 'rgba(17, 24, 39, 0.95)' 
            : 'rgba(255, 255, 255, 0.95)';
    }
}

// Typing Animation for Hero Section
function initTypingAnimation() {
    const tagline = document.querySelector('.tagline');
    if (!tagline) return;
    
    const text = tagline.textContent;
    tagline.textContent = '';
    
    let i = 0;
    const typeWriter = () => {
        if (i < text.length) {
            tagline.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    };
    
    // Start typing animation after a delay
    setTimeout(typeWriter, 1000);
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize theme
    initTheme();
    
    // Initialize smooth scrolling
    initSmoothScrolling();
    
    // Initialize skills animation
    animateSkills();
    
    // Load projects
    loadProjects();
    
    // Initialize typing animation
    initTypingAnimation();
    
    // Event Listeners
    themeToggle.addEventListener('click', toggleTheme);
    hamburger.addEventListener('click', toggleMobileMenu);
    scrollTopBtn.addEventListener('click', scrollToTop);
    contactForm.addEventListener('submit', handleFormSubmit);
    
    // Close mobile menu when clicking on nav links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });
    
    // Scroll event listeners
    window.addEventListener('scroll', () => {
        handleScrollTop();
        updateActiveNavLink();
        handleNavbarScroll();
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
            closeMobileMenu();
        }
    });
    
    // Handle window resize
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            closeMobileMenu();
        }
    });
});

// Preloader (optional)
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe elements for fade-in animation
document.addEventListener('DOMContentLoaded', () => {
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(el => observer.observe(el));
});