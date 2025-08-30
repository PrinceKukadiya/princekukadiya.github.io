# Prince Kukadiya - Game Developer Portfolio

A modern, responsive portfolio website showcasing my extensive work as a Game Developer and Unity Specialist, featuring 15+ published games across iOS and Android platforms.

## 🚀 Features

- **Modern Design**: Clean, professional layout with smooth animations and hover effects
- **Responsive**: Works perfectly on desktop, tablet, and mobile devices
- **Interactive Navigation**: Smooth scrolling between sections with active state indicators
- **Organized Project Showcase**: Projects categorized by type (Casino Games, AR/VR, 2D Games, 3D Games)
- **Real Project Links**: Direct links to App Store and Google Play Store
- **Video Demos**: Interactive video links for project demonstrations
- **Skills Display**: Organized skill categories with visual tags
- **Contact Form**: Easy way for potential clients to reach out
- **GitHub Pages Ready**: Already configured for deployment

## 📋 Portfolio Sections

1. **Hero Section**: Eye-catching introduction with call-to-action buttons
2. **About**: Personal story and impressive statistics (5+ years, 15+ games, 10M+ downloads)
3. **Skills**: Organized by categories (Game Development, Casino Games, AR/VR, Mobile Development)
4. **Projects**: Featured work organized by categories:
   - 🎰 **Casino & Real Money Games**: Slot games, Poker, Fish games, NFT games
   - 🥽 **AR & Augmented Reality**: Car visualization, Room design, Sports training
   - 🎮 **2D & Casual Games**: Kids games, Educational games, Puzzle games
   - 🎯 **3D Games**: Action games with advanced physics
5. **Contact**: Contact information and contact form
6. **Footer**: Social links and quick navigation

## 🎮 Featured Projects

### Casino & Real Money Games
- **Cosmo Strike**: Popular slot game (iOS & Android)
- **Fish Game**: Multiplayer fishing game with real-time competition
- **Xana NFT Duel**: Card-based NFT game with blockchain integration
- **Texas Hold'em Poker**: Classic poker with multiplayer support

### AR & Augmented Reality
- **AR Car Experience**: Immersive car visualization
- **AR Room Experience**: Interactive furniture placement
- **AR Sports**: Sports training with motion tracking

### 2D & Casual Games
- **Peppa Pig World**: Educational kids game
- **Hen's Revenge**: Fun casual game with puzzle elements
- **ABC Preschool Games**: Learning and development activities
- **Word Search Adventure**: Engaging puzzle game

### 3D Games
- **River Rage**: 3D action game with stunning graphics

## 🛠️ Customization Guide

### Personal Information
Update the following in `src/App.js`:

```javascript
// Update your name and title
<h1 className="hero-title">Hi, I'm Prince Kukadiya</h1>
<h2 className="hero-subtitle">Game Developer & Unity Specialist</h2>

// Update about section
<p>I'm a dedicated game developer with extensive experience in Unity...</p>

// Update statistics
<div className="stat">
  <h3>5+</h3>
  <p>Years Experience</p>
</div>
```

### Contact Information
Update contact details in the contact section:

```javascript
<div className="contact-item">
  <span className="contact-icon">📧</span>
  <span>your-actual-email@example.com</span>
</div>
<div className="contact-item">
  <span className="contact-icon">📍</span>
  <span>Your City, Country</span>
</div>
```

### Social Links
Update social media links in the footer:

```javascript
<div className="social-links">
  <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">GitHub</a>
  <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">LinkedIn</a>
  <a href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer">Twitter</a>
</div>
```

### Adding New Projects
Add new projects to the appropriate category:

```javascript
<div className="project-card">
  <div className="project-image">
    <div className="project-placeholder">🎮</div> {/* Change emoji */}
  </div>
  <div className="project-content">
    <h3>Your Project Name</h3>
    <p>Project description goes here...</p>
    <div className="project-tech">
      <span className="tech-tag">Unity</span>
      <span className="tech-tag">C#</span>
    </div>
    <div className="project-links">
      <a href="your-link" className="btn btn-small">View Project</a>
      <button onClick={() => openVideo('your-video-url')} className="btn btn-small">Watch Demo</button>
    </div>
  </div>
</div>
```

### Adding Video Links
Use the `openVideo` function for video demonstrations:

```javascript
<button 
  onClick={() => openVideo('https://your-video-url.com')}
  className="btn btn-small"
>
  Watch Demo
</button>
```

## 🎨 Styling Customization

### Colors
Main colors are defined in `src/App.css`:

```css
/* Primary Blue */
#2563eb

/* Background Colors */
#f8fafc (light gray)
#1e293b (dark blue)

/* Text Colors */
#1e293b (dark)
#64748b (medium gray)
#94a3b8 (light gray)
```

### Project Categories
Add new project categories by following this pattern:

```css
.project-category {
  margin-bottom: 4rem;
}

.category-title {
  font-size: 1.8rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 2rem;
  padding-bottom: 0.5rem;
  border-bottom: 3px solid #2563eb;
  display: inline-block;
}
```

## 🚀 Deployment

### GitHub Pages (Already Configured)

1. **Push to GitHub**: Make sure your code is pushed to your GitHub repository
2. **Deploy**: Run the deployment command:
   ```bash
   npm run deploy
   ```
3. **Access**: Your portfolio will be available at `https://princekukadiya.github.io`

### Other Hosting Options

- **Netlify**: Drag and drop the `build` folder
- **Vercel**: Connect your GitHub repository
- **Firebase Hosting**: Use Firebase CLI to deploy

## 📱 Mobile Optimization

The portfolio is fully responsive and includes:
- Mobile-first design approach
- Touch-friendly navigation
- Optimized layouts for small screens
- Fast loading times
- Responsive project grids

## 🔧 Development

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation
```bash
npm install
```

### Development Server
```bash
npm start
```

### Build for Production
```bash
npm run build
```

## 📝 Adding New Features

### New Sections
To add a new section, follow this pattern:

```javascript
<section id="new-section" className="new-section">
  <div className="container">
    <h2 className="section-title">New Section</h2>
    {/* Your content */}
  </div>
</section>
```

### New Navigation Items
Add to the navigation menu:

```javascript
<li className="nav-item">
  <button 
    className={`nav-link ${activeSection === 'new-section' ? 'active' : ''}`}
    onClick={() => scrollToSection('new-section')}
  >
    New Section
  </button>
</li>
```

### New Project Categories
Add new project categories:

```javascript
<div className="project-category">
  <h3 className="category-title">🎯 Your Category</h3>
  <div className="projects-grid">
    {/* Your project cards */}
  </div>
</div>
```

## 🎯 SEO Optimization

The portfolio includes:
- Semantic HTML structure
- Meta tags (add to `public/index.html`)
- Fast loading times
- Mobile-friendly design
- Proper heading hierarchy

## 📞 Support

If you need help customizing your portfolio:
1. Check this README for common customizations
2. Review the code comments in `src/App.js`
3. Modify the CSS in `src/App.css` for styling changes

## 🏆 Portfolio Highlights

- **15+ Published Games**: Real games available on App Store and Google Play
- **Multiple Categories**: Casino games, AR/VR, 2D/3D games, educational games
- **Professional Design**: Modern, clean, and responsive design
- **Interactive Elements**: Video demos, smooth scrolling, hover effects
- **Comprehensive Skills**: Organized skill categories with relevant technologies
- **Contact Integration**: Easy way for potential clients to reach out

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Ready to showcase your game development expertise! 🎮✨**
