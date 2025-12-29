# Md Nahidul Islam - Cybersecurity Portfolio

A modern, professional portfolio website for a cybersecurity expert and red team operator. Designed with a sleek red gradient theme and built with vanilla HTML, CSS, and JavaScript.

## 🎯 Features

- **Modern Design**: Clean, professional layout with red gradient color scheme
- **Responsive**: Fully responsive design that works on all devices
- **Fast Performance**: Pure vanilla HTML, CSS, and JavaScript - no external dependencies
- **Interactive Elements**: Smooth animations, hover effects, and scroll effects
- **Mobile Optimized**: Hamburger menu and touch-friendly interface
- **Accessibility**: Semantic HTML and proper color contrast
- **SEO Friendly**: Meta tags and proper HTML structure

## 📁 Project Structure

```
Portfolio/
├── index.html          # Main portfolio page
├── style.css           # Styling with red gradient theme
├── script.js           # Interactive functionality
├── README.md           # This file
└── .gitignore          # Git ignore file
```

## 🚀 Getting Started

### Local Development

1. Clone the repository:
```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

2. Open `index.html` in your browser:
   - Simply double-click the file, or
   - Use a local server (recommended):
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Python 2
   python -m SimpleHTTPServer 8000
   
   # Node.js (if you have http-server installed)
   http-server
   ```

3. Navigate to `http://localhost:8000` in your browser

## 🌐 GitHub Pages Deployment

### Step 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com) and log in
2. Click the `+` icon and select "New repository"
3. Name it: `yourusername.github.io` (replace with your GitHub username)
4. Make it public
5. Click "Create repository"

### Step 2: Push Your Code

```bash
cd portfolio

# Initialize git
git init

# Add all files
git add .

# Commit changes
git commit -m "Initial portfolio commit"

# Add remote origin
git remote add origin https://github.com/yourusername/yourusername.github.io.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to your repository settings
2. Scroll to "GitHub Pages" section
3. Under "Source", select "main" branch
4. Click "Save"
5. Your portfolio will be live at: `https://yourusername.github.io`

## 🎨 Customization

### Colors
Edit the CSS variables in `style.css`:

```css
:root {
    --primary-red: #e63946;
    --dark-red: #a4161a;
    --light-red: #f77f88;
    /* ... other colors */
}
```

### Content
Edit `index.html` to:
- Change your name, title, and description
- Update skills and expertise sections
- Modify contact information
- Add or remove sections as needed

### Fonts
The portfolio uses system fonts for optimal performance. To add custom fonts:

```html
<link href="https://fonts.googleapis.com/css2?family=YourFont:wght@400;600;800&display=swap" rel="stylesheet">
```

Then update the font-family in CSS.

## 📱 Sections

1. **Navigation**: Fixed header with smooth scrolling
2. **Hero Section**: Eye-catching introduction with terminal animation
3. **Expertise**: 6 key cybersecurity areas
4. **Skills**: Technical skills organized by category
5. **Services**: Core services offered
6. **Contact**: Multiple contact methods and social links
7. **Footer**: Copyright information

## 🔧 Features Included

- Smooth scroll navigation
- Active nav link indicator
- Responsive hamburger menu
- Intersection Observer animations
- Typewriter effect on hero title
- Parallax scrolling
- Scroll-to-top button
- Card hover animations
- Terminal-style code visualization
- Social media links
- Contact methods

## 📧 Contact Information

- **Email**: nahidhasanph79@gmail.com
- **Telegram**: @fumioryoto
- **Facebook**: facebook.com/fumioryoto

## 📄 License

This portfolio is open source and available under the MIT License.

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

## ⚡ Performance Tips

1. **Images**: Keep image file sizes small (optimize before uploading)
2. **Caching**: GitHub Pages automatically caches static files
3. **SEO**: Update meta tags in `index.html` for better search visibility
4. **Analytics**: Consider adding Google Analytics for traffic insights

## 🐛 Troubleshooting

**Portfolio not showing up?**
- Ensure your repository is named `yourusername.github.io`
- Wait a few minutes after pushing - GitHub Pages takes time to update
- Check the repository settings to ensure GitHub Pages is enabled

**Styles not loading?**
- Clear your browser cache (Ctrl+F5 or Cmd+Shift+R)
- Check that CSS file is in the same directory as index.html

**Links not working?**
- Ensure all file paths use forward slashes (/)
- Check that anchor IDs match the href values

## 💡 Future Enhancements

Consider adding:
- Blog section with cybersecurity articles
- Project showcases with descriptions
- Client testimonials
- PDF resume download
- Dark mode toggle
- Multiple language support
- Contact form with backend

---

**Created with ❤️ for cybersecurity professionals**
