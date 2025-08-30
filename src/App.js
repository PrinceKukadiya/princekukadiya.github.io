import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isLoading, setIsLoading] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: ''
  });

  useEffect(() => {
    // Simulate loading time
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  const openVideo = (url) => {
    window.open(url, '_blank');
  };

  const handleFormChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ submitted: true, success: false, message: 'Sending message...' });

    try {
      const response = await fetch('https://formspree.io/f/xpzgwqgw', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormStatus({
          submitted: true,
          success: true,
          message: 'Message sent successfully! I\'ll get back to you soon.'
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        setFormStatus({
          submitted: true,
          success: false,
          message: 'Failed to send message. Please try again.'
        });
      }
    } catch (error) {
      setFormStatus({
        submitted: true,
        success: false,
        message: 'Error sending message. Please try again.'
      });
    }
  };

  if (isLoading) {
    return (
      <div className="loading">
        <div className="loading-spinner"></div>
      </div>
    );
  }

  return (
    <div className="App">
      {/* Animated Background */}
      <div className="animated-bg"></div>
      
      {/* Floating Particles */}
      <div className="particles">
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
      </div>

      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <h2>Prince Kukadiya</h2>
          </div>
          <ul className="nav-menu">
            <li className="nav-item">
              <button 
                className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}
                onClick={() => scrollToSection('home')}
              >
                Home
              </button>
            </li>
            <li className="nav-item">
              <button 
                className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
                onClick={() => scrollToSection('about')}
              >
                About
              </button>
            </li>
            <li className="nav-item">
              <button 
                className={`nav-link ${activeSection === 'skills' ? 'active' : ''}`}
                onClick={() => scrollToSection('skills')}
              >
                Skills
              </button>
            </li>
            <li className="nav-item">
              <button 
                className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`}
                onClick={() => scrollToSection('projects')}
              >
                Projects
              </button>
            </li>
            <li className="nav-item">
              <button 
                className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
                onClick={() => scrollToSection('contact')}
              >
                Contact
              </button>
            </li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Hi, I'm Prince Kukadiya</h1>
          <h2 className="hero-subtitle">Game Developer & Unity Specialist</h2>
          <p className="hero-description">
            Passionate about creating immersive gaming experiences with Unity, 
            specializing in Casino Games, VR/AR development, and multiplayer games.
            Published 15+ games across iOS and Android platforms with millions of downloads.
          </p>
          <div className="hero-buttons">
            <button 
              className="btn btn-primary"
              onClick={() => scrollToSection('projects')}
            >
              View My Work
            </button>
            <button 
              className="btn btn-secondary"
              onClick={() => scrollToSection('contact')}
            >
              Get In Touch
            </button>
          </div>
        </div>
        <div className="hero-image">
          <div className="hero-avatar">
            <span>🎮</span>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                I'm a dedicated game developer with extensive experience in Unity, specializing in 
                Casino Games, AR/VR applications, and mobile game development. With over 15 published 
                games across iOS and Android platforms, I've created engaging experiences that have 
                reached millions of players worldwide.
              </p>
              <p>
                My expertise spans from real-money casino games to educational kids' games, 
                from immersive AR experiences to competitive multiplayer games. I'm passionate 
                about pushing the boundaries of mobile gaming technology and creating memorable 
                user experiences that keep players engaged and entertained.
              </p>
              <div className="about-stats">
                <div className="stat">
                  <h3>8+</h3>
                  <p>Years Experience</p>
                </div>
                <div className="stat">
                  <h3>15+</h3>
                  <p>Published Games</p>
                </div>
                <div className="stat">
                  <h3>10M+</h3>
                  <p>Downloads</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills">
        <div className="container">
          <h2 className="section-title">Skills & Technologies</h2>
          <div className="skills-grid">
            <div className="skill-category">
              <h3>Game Development</h3>
              <div className="skill-items">
                <span className="skill-item">Unity</span>
                <span className="skill-item">C#</span>
                <span className="skill-item">Game Design</span>
                <span className="skill-item">3D Modeling</span>
                <span className="skill-item">2D Animation</span>
                <span className="skill-item">Particle Systems</span>
              </div>
            </div>
            <div className="skill-category">
              <h3>Casino & Real Money Games</h3>
              <div className="skill-items">
                <span className="skill-item">Slot Games</span>
                <span className="skill-item">Poker</span>
                <span className="skill-item">Crash Games</span>
                <span className="skill-item">Fish Games</span>
                <span className="skill-item">Keno</span>
                <span className="skill-item">RNG Systems</span>
              </div>
            </div>
            <div className="skill-category">
              <h3>AR/VR Development</h3>
              <div className="skill-items">
                <span className="skill-item">AR Development</span>
                <span className="skill-item">Vuforia</span>
                <span className="skill-item">ARKit</span>
                <span className="skill-item">ARCore</span>
                <span className="skill-item">3D Scanning</span>
                <span className="skill-item">Spatial Computing</span>
              </div>
            </div>
            <div className="skill-category">
              <h3>Mobile Development</h3>
              <div className="skill-items">
                <span className="skill-item">iOS</span>
                <span className="skill-item">Android</span>
                <span className="skill-item">App Store</span>
                <span className="skill-item">Google Play</span>
                <span className="skill-item">Mobile Optimization</span>
                <span className="skill-item">Performance Tuning</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <div className="container">
          <h2 className="section-title">Featured Projects</h2>
          
          {/* Casino Games Category */}
          <div className="project-category">
            <h3 className="category-title">🎰 Casino & Real Money Games</h3>
            <div className="projects-grid">
              <div className="project-card">
                <div className="project-image">
                  <div className="project-placeholder">🎰</div>
                </div>
                <div className="project-content">
                  <h3>Cosmo Strike</h3>
                  <p>Popular slot game with engaging mechanics, stunning visuals, and multiple paylines. Features bonus rounds, free spins, and progressive jackpots.</p>
                  <div className="project-tech">
                    <span className="tech-tag">Unity</span>
                    <span className="tech-tag">C#</span>
                    <span className="tech-tag">iOS</span>
                    <span className="tech-tag">Android</span>
                  </div>
                  <div className="project-links">
                    <a 
                      href="https://apps.apple.com/us/app/cosmo-strike/id6499512572" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn btn-small"
                    >
                      iOS App Store
                    </a>
                    <a 
                      href="https://play.google.com/store/apps/details?id=com.lgt.cosmostrike" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn btn-small"
                    >
                      Google Play
                    </a>
                  </div>
                </div>
              </div>

              <div className="project-card">
                <div className="project-image">
                  <div className="project-placeholder">🐟</div>
                </div>
                <div className="project-content">
                  <h3>Fish Game (Multiplayer)</h3>
                  <p>Multiplayer fishing game with real-time competition, multiple weapons, and engaging gameplay mechanics. Features live tournaments and leaderboards.</p>
                  <div className="project-tech">
                    <span className="tech-tag">Unity</span>
                    <span className="tech-tag">Multiplayer</span>
                    <span className="tech-tag">Real-time</span>
                    <span className="tech-tag">Networking</span>
                  </div>
                  <div className="project-links">
                    <button 
                      onClick={() => openVideo('https://drive.google.com/file/d/17-bHsmK-hatxTRCJkWwgOZl07vqaqMP7/view?usp=sharing')}
                      className="btn btn-small"
                    >
                      Watch Demo
                    </button>
                  </div>
                </div>
              </div>

              <div className="project-card">
                <div className="project-image">
                  <div className="project-placeholder">🃏</div>
                </div>
                <div className="project-content">
                  <h3>Xana NFT Duel</h3>
                  <p>Card-based NFT game with blockchain integration, strategic gameplay, and digital asset ownership. Features trading cards and competitive battles.</p>
                  <div className="project-tech">
                    <span className="tech-tag">Unity</span>
                    <span className="tech-tag">NFT</span>
                    <span className="tech-tag">Blockchain</span>
                    <span className="tech-tag">Web3</span>
                  </div>
                  <div className="project-links">
                    <a 
                      href="https://play.google.com/store/apps/details?id=com.noborderz.tcgnftduel" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn btn-small"
                    >
                      Google Play
                    </a>
                  </div>
                </div>
              </div>

              <div className="project-card">
                <div className="project-image">
                  <div className="project-placeholder">♠️</div>
                </div>
                <div className="project-content">
                  <h3>Texas Hold'em Poker</h3>
                  <p>Classic poker game with multiplayer support, realistic card mechanics, and tournament modes. Features AI opponents and live multiplayer tables.</p>
                  <div className="project-tech">
                    <span className="tech-tag">Unity</span>
                    <span className="tech-tag">Poker</span>
                    <span className="tech-tag">Multiplayer</span>
                    <span className="tech-tag">AI</span>
                  </div>
                  <div className="project-links">
                    <a 
                      href="https://play.google.com/store/apps/details?id=com.playlabs.texas.holdem.poker" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn btn-small"
                    >
                      Google Play
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* AR Games Category */}
          <div className="project-category">
            <h3 className="category-title">🥽 AR & Augmented Reality</h3>
            <div className="projects-grid">
              <div className="project-card">
                <div className="project-image">
                  <div className="project-placeholder">🚗</div>
                </div>
                <div className="project-content">
                  <h3>AR Car Experience</h3>
                  <p>Immersive AR car visualization and interaction experience. Users can explore car models in their real environment with detailed 3D rendering.</p>
                  <div className="project-tech">
                    <span className="tech-tag">Unity</span>
                    <span className="tech-tag">AR</span>
                    <span className="tech-tag">Vuforia</span>
                    <span className="tech-tag">3D Models</span>
                  </div>
                  <div className="project-links">
                    <button 
                      onClick={() => openVideo('https://drive.google.com/file/d/17-bHsmK-hatxTRCJkWwgOZl07vqaqMP7/view?usp=sharing')}
                      className="btn btn-small"
                    >
                      Watch Demo
                    </button>
                  </div>
                </div>
              </div>

              <div className="project-card">
                <div className="project-image">
                  <div className="project-placeholder">🏠</div>
                </div>
                <div className="project-content">
                  <h3>AR Room Experience</h3>
                  <p>Interactive AR room design and furniture placement application. Users can visualize furniture in their space before purchasing.</p>
                  <div className="project-tech">
                    <span className="tech-tag">Unity</span>
                    <span className="tech-tag">AR</span>
                    <span className="tech-tag">ARKit</span>
                    <span className="tech-tag">Spatial Mapping</span>
                  </div>
                  <div className="project-links">
                    <button 
                      onClick={() => openVideo('https://drive.google.com/file/d/17-bHsmK-hatxTRCJkWwgOZl07vqaqMP7/view?usp=sharing')}
                      className="btn btn-small"
                    >
                      Watch Demo
                    </button>
                  </div>
                </div>
              </div>

              <div className="project-card">
                <div className="project-image">
                  <div className="project-placeholder">⚽</div>
                </div>
                <div className="project-content">
                  <h3>AR Sports</h3>
                  <p>Augmented reality sports training and visualization app. Features real-time motion tracking and performance analysis.</p>
                  <div className="project-tech">
                    <span className="tech-tag">Unity</span>
                    <span className="tech-tag">AR</span>
                    <span className="tech-tag">Sports</span>
                    <span className="tech-tag">Motion Tracking</span>
                  </div>
                  <div className="project-links">
                    <a 
                      href="https://play.google.com/store/apps/details?id=com.volavole.volavolear" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn btn-small"
                    >
                      Google Play
                    </a>
                    <button 
                      onClick={() => openVideo('https://drive.google.com/file/d/17-bHsmK-hatxTRCJkWwgOZl07vqaqMP7/view?usp=sharing')}
                      className="btn btn-small"
                    >
                      Watch Demo
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 2D Games Category */}
          <div className="project-category">
            <h3 className="category-title">🎮 2D & Casual Games</h3>
            <div className="projects-grid">
              <div className="project-card">
                <div className="project-image">
                  <div className="project-placeholder">🐷</div>
                </div>
                <div className="project-content">
                  <h3>Peppa Pig World</h3>
                  <p>Educational kids game featuring the beloved Peppa Pig character. Includes learning activities, mini-games, and interactive storytelling.</p>
                  <div className="project-tech">
                    <span className="tech-tag">Unity</span>
                    <span className="tech-tag">2D</span>
                    <span className="tech-tag">Kids</span>
                    <span className="tech-tag">Education</span>
                  </div>
                  <div className="project-links">
                    <a 
                      href="https://play.google.com/store/apps/details?id=com.peppapig.worldofpeppapig_g" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn btn-small"
                    >
                      Google Play
                    </a>
                  </div>
                </div>
              </div>

              <div className="project-card">
                <div className="project-image">
                  <div className="project-placeholder">🐔</div>
                </div>
                <div className="project-content">
                  <h3>Hen's Revenge</h3>
                  <p>Fun and engaging casual game with unique gameplay mechanics. Features puzzle elements and strategic thinking challenges.</p>
                  <div className="project-tech">
                    <span className="tech-tag">Unity</span>
                    <span className="tech-tag">2D</span>
                    <span className="tech-tag">Casual</span>
                    <span className="tech-tag">Puzzle</span>
                  </div>
                  <div className="project-links">
                    <a 
                      href="https://play.google.com/store/apps/details?id=com.okpogame.hensrevenge" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn btn-small"
                    >
                      Google Play
                    </a>
                  </div>
                </div>
              </div>

              <div className="project-card">
                <div className="project-image">
                  <div className="project-placeholder">🎓</div>
                </div>
                <div className="project-content">
                  <h3>ABC Preschool Games</h3>
                  <p>Educational games for kids focusing on learning and development. Features alphabet learning, number recognition, and cognitive development activities.</p>
                  <div className="project-tech">
                    <span className="tech-tag">Unity</span>
                    <span className="tech-tag">Education</span>
                    <span className="tech-tag">Kids</span>
                    <span className="tech-tag">Learning</span>
                  </div>
                  <div className="project-links">
                    <a 
                      href="https://play.google.com/store/apps/details?id=com.kiddzoo.abc.preschool.games.kids" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn btn-small"
                    >
                      Google Play
                    </a>
                    <button 
                      onClick={() => openVideo('https://drive.google.com/file/d/17-bHsmK-hatxTRCJkWwgOZl07vqaqMP7/view?usp=sharing')}
                      className="btn btn-small"
                    >
                      Watch Demo
                    </button>
                  </div>
                </div>
              </div>

              <div className="project-card">
                <div className="project-image">
                  <div className="project-placeholder">🔍</div>
                </div>
                <div className="project-content">
                  <h3>Word Search Adventure</h3>
                  <p>Engaging word search game with adventure elements and challenging puzzles. Features multiple themes and difficulty levels.</p>
                  <div className="project-tech">
                    <span className="tech-tag">Unity</span>
                    <span className="tech-tag">Puzzle</span>
                    <span className="tech-tag">Words</span>
                    <span className="tech-tag">Adventure</span>
                  </div>
                  <div className="project-links">
                    <a 
                      href="https://play.google.com/store/apps/details?id=com.apexinteractive.wordsearchadventure" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn btn-small"
                    >
                      Google Play
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 3D Games Category */}
          <div className="project-category">
            <h3 className="category-title">🎯 3D Games</h3>
            <div className="projects-grid">
              <div className="project-card">
                <div className="project-image">
                  <div className="project-placeholder">🌊</div>
                </div>
                <div className="project-content">
                  <h3>River Rage</h3>
                  <p>3D action game with stunning graphics and immersive gameplay experience. Features dynamic environments and advanced physics.</p>
                  <div className="project-tech">
                    <span className="tech-tag">Unity</span>
                    <span className="tech-tag">3D</span>
                    <span className="tech-tag">Action</span>
                    <span className="tech-tag">Physics</span>
                  </div>
                  <div className="project-links">
                    <button 
                      onClick={() => openVideo('https://www.dropbox.com/scl/fi/hphwej5m7am5hoeqfeu7b/RiverRage-Video-30-10-2017.mp4?rlkey=4shfdlajhtvqgpa2ps9zqu3jw&st=r1lxdgw3&dl=0')}
                      className="btn btn-small"
                    >
                      Watch Demo
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          <div className="contact-content">
            <div className="contact-info">
              <h3>Let's work together!</h3>
              <p>I'm always interested in new opportunities and exciting projects. Whether you have a question about game development, want to collaborate on a project, or just want to say hi, feel free to reach out.</p>
              <div className="contact-details">
                <div className="contact-item">
                  <span className="contact-icon">📧</span>
                  <span>kukadiyaprince1416@gmail.com</span>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">📱</span>
                  <span>+91 8000333033</span>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">📍</span>
                  <span>India</span>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">💼</span>
                  <span>Available for Freelance & Full-time</span>
                </div>
              </div>
            </div>
            <div className="contact-form">
              {formStatus.submitted && (
                <div className={`form-message ${formStatus.success ? 'success' : 'error'}`}>
                  {formStatus.message}
                </div>
              )}
              <form onSubmit={handleFormSubmit}>
                <div className="form-group">
                  <input 
                    type="text" 
                    name="name"
                    placeholder="Your Name" 
                    className="form-input" 
                    value={formData.name}
                    onChange={handleFormChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <input 
                    type="email" 
                    name="email"
                    placeholder="Your Email" 
                    className="form-input" 
                    value={formData.email}
                    onChange={handleFormChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <textarea 
                    name="message"
                    placeholder="Your Message" 
                    className="form-textarea" 
                    rows="5"
                    value={formData.message}
                    onChange={handleFormChange}
                    required
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="btn btn-primary"
                  disabled={formStatus.submitted && !formStatus.success}
                >
                  {formStatus.submitted && !formStatus.success ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>Prince Kukadiya</h3>
              <p>Game Developer & Unity Specialist</p>
            </div>
            <div className="footer-section">
              <h4>Quick Links</h4>
              <ul>
                <li><button onClick={() => scrollToSection('home')}>Home</button></li>
                <li><button onClick={() => scrollToSection('about')}>About</button></li>
                <li><button onClick={() => scrollToSection('projects')}>Projects</button></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Connect</h4>
              <div className="social-links">
                <a href="https://github.com/princekukadiya" target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href="https://linkedin.com/in/princekukadiya" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href="https://twitter.com/princekukadiya" target="_blank" rel="noopener noreferrer">Twitter</a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2025 Prince Kukadiya. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
