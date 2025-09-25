# Modern Portfolio Website

A clean, professional, and responsive portfolio website built with HTML5, CSS3, and JavaScript. Features dark mode, smooth animations, and mobile-friendly design.

## 🚀 Features

### Core Sections
- **Hero Section** - Eye-catching introduction with name, tagline, and call-to-action
- **About Me** - Personal bio with downloadable resume
- **Skills** - Interactive skill bars with icons and progress animations
- **Projects** - Dynamic project cards loaded from JSON data
- **Experience** - Timeline layout showcasing work history
- **Testimonials** - Client feedback with photos and quotes
- **Contact** - Functional contact form with validation

### Design Features
- **Responsive Design** - Mobile-first approach with CSS Grid and Flexbox
- **Dark Mode Toggle** - Seamless theme switching with localStorage persistence
- **Smooth Animations** - AOS.js integration for scroll-triggered animations
- **Interactive Elements** - Hover effects, transitions, and micro-interactions
- **Modern Typography** - Google Fonts (Inter) for clean readability
- **Professional Color Scheme** - Carefully selected color palette with CSS variables

### Technical Features
- **Form Validation** - Client-side validation with error handling
- **Dynamic Content** - Projects loaded from external JSON file
- **Mobile Navigation** - Hamburger menu for mobile devices
- **Scroll Effects** - Active navigation highlighting and scroll-to-top button
- **Performance Optimized** - Minimal dependencies and optimized assets

## 📁 File Structure

```
portfolio/
├── index.html          # Main HTML structure
├── styles.css          # Complete CSS styling with dark mode
├── script.js           # JavaScript functionality
├── projects.json       # Project data (easily editable)
└── README.md          # Documentation
```

## 🛠️ Setup Instructions

1. **Clone or Download** the files to your local machine
2. **Customize Content**:
   - Replace placeholder text with your information
   - Update profile images (replace placeholder URLs)
   - Modify the `projects.json` file with your projects
   - Add your resume file and update the download link
3. **Deploy** to any web hosting service (GitHub Pages, Netlify, Vercel, etc.)

## 🎨 Customization Guide

### Colors and Themes
Edit CSS variables in `:root` and `[data-theme="dark"]` selectors:
```css
:root {
    --primary-color: #4f46e5;    /* Main brand color */
    --secondary-color: #06b6d4;  /* Accent color */
    --accent-color: #f59e0b;     /* Highlight color */
}
```

### Adding New Projects
Edit `projects.json`:
```json
{
    "title": "Project Name",
    "description": "Project description",
    "image": "path/to/image.jpg",
    "github": "https://github.com/username/repo",
    "demo": "https://demo-url.com",
    "technologies": ["Tech1", "Tech2"]
}
```

### Modifying Sections
- Update content in `index.html`
- Adjust styling in `styles.css`
- Add functionality in `script.js`

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: Below 768px
- **Small Mobile**: Below 480px

## 🔧 Dependencies

### External Libraries
- **AOS.js** - Animate On Scroll library
- **Font Awesome** - Icons
- **Google Fonts** - Inter font family

### Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🚀 Performance Features

- **Optimized Images** - Placeholder images for fast loading
- **Minimal JavaScript** - Vanilla JS without heavy frameworks
- **CSS Grid/Flexbox** - Modern layout techniques
- **Lazy Loading** - AOS animations trigger on scroll
- **Local Storage** - Theme preference persistence

## 📧 Contact Form

The contact form includes:
- **Client-side validation** - Real-time error checking
- **Required fields** - Name, email, and message validation
- **Email format validation** - Regex pattern matching
- **Success feedback** - User-friendly confirmation

*Note: This is a frontend-only implementation. For a working contact form, integrate with a backend service or form handler like Formspree, Netlify Forms, or EmailJS.*

## 🎯 SEO Ready

- Semantic HTML5 structure
- Meta tags for social sharing
- Descriptive alt texts for images
- Clean URL structure
- Fast loading times

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and customize it for your own use. If you make improvements, consider sharing them back with the community!

---

**Built with ❤️ using HTML5, CSS3, and JavaScript**