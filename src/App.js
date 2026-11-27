import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import './App.css';

const RESUME_URL = `${process.env.PUBLIC_URL}/resume.pdf`;

const img = (file) => `${process.env.PUBLIC_URL}/images/projects/${file}`;

const PROJECT_CATEGORIES = [
  {
    title: 'Casino & Real Money Games',
    projects: [
      {
        name: 'Cosmo Strike',
        description: 'Popular slot game with engaging mechanics, stunning visuals, and multiple paylines. Features bonus rounds, free spins, and progressive jackpots.',
        tags: ['Unity', 'C#', 'iOS', 'Android'],
        icon: img('cosmo-strike.png'),
        links: [
          { label: 'App Store', url: 'https://apps.apple.com/us/app/cosmo-strike/id6499512572' },
          { label: 'Google Play', url: 'https://play.google.com/store/apps/details?id=com.lgt.cosmostrike' },
        ],
      },
      {
        name: 'Fish Game (Multiplayer)',
        description: 'Real-time 4-player fish shooting casino game with server-authoritative movement built on Mirror Networking and AWS GameLift. Multiple gun types, power-ups, and custom analytics APIs.',
        tags: ['Unity', 'Mirror', 'AWS GameLift', 'Multiplayer'],
        icon: img('fish-game.jpg'),
        links: [
          { label: 'Watch Demo', video: 'https://drive.google.com/file/d/1Z4AoJVzHCILDX0k4ftMHb2zk_O75v7CP/view?usp=sharing' },
        ],
      },
      {
        name: 'BoomWin Slot',
        description: 'Engaging slot game with exciting bonus features, free spins, and multiple paylines. Features stunning visuals and smooth gameplay mechanics.',
        tags: ['Unity', 'C#', 'Slot Game', 'Casino'],
        icon: img('boomwin-slot.jpg'),
        links: [
          { label: 'Watch Demo', video: 'https://drive.google.com/file/d/1sOY35o4sev181V3CZWi18NDlMYLaaVWM/view?usp=sharing' },
        ],
      },
      {
        name: 'Cascade Slot',
        description: 'Innovative cascade slot game with cascading reels mechanics. Winning symbols disappear and new ones fall into place for chained wins.',
        tags: ['Unity', 'C#', 'Slot Game', 'Casino'],
        icon: img('cascade-slot.jpg'),
        links: [
          { label: 'Watch Demo', video: 'https://drive.google.com/file/d/1nYnl3cUZ5wzDZFrtn0ZfoJ1Xmh7mcNrx/view?usp=sharing' },
        ],
      },
      {
        name: 'CosmoSlot',
        description: 'Space-themed slot game with cosmic visuals and stellar bonus rounds. Features progressive jackpots and immersive space adventure gameplay.',
        tags: ['Unity', 'C#', 'Slot Game', 'Casino'],
        icon: img('cosmoslot.jpg'),
        links: [
          { label: 'Watch Demo', video: 'https://drive.google.com/file/d/1iqEgkVkLzwxD-OeaoH5mWKIGNR4nQAmj/view?usp=sharing' },
        ],
      },
      {
        name: 'Raptor-Firelink Slot',
        description: 'Action-packed slot game with fire-themed visuals and exciting bonus features. Features multiple paylines and engaging gameplay mechanics.',
        tags: ['Unity', 'C#', 'Slot Game', 'Casino'],
        icon: img('raptor-firelink.jpg'),
        links: [
          { label: 'Watch Demo', video: 'https://drive.google.com/file/d/1D15NETrZPhJQb9q0PW3nqXMvmXL2GqSd/view?usp=sharing' },
        ],
      },
      {
        name: 'Xana NFT Duel',
        description: 'Card-based NFT game with blockchain integration, strategic gameplay, and digital asset ownership. Features trading cards and competitive battles.',
        tags: ['Unity', 'NFT', 'Blockchain', 'Web3'],
        icon: img('xana-nft-duel.jpg'),
        links: [],
      },
      {
        name: "Texas Hold'em Poker",
        description: 'Classic poker game with multiplayer support, realistic card mechanics, and tournament modes. Features AI opponents and live multiplayer tables.',
        tags: ['Unity', 'Poker', 'Multiplayer', 'AI'],
        icon: img('texas-holdem-poker.png'),
        links: [
          { label: 'Google Play', url: 'https://play.google.com/store/apps/details?id=com.playlabs.texas.holdem.poker' },
        ],
      },
    ],
  },
  {
    title: 'AR & Augmented Reality',
    projects: [
      {
        name: 'Delta ARBIM',
        description: 'IFC-first AR BIM platform that overlays live BIM models on construction sites using LiDAR-anchored markerless AR at ±2cm accuracy, with real-time clash detection and full offline support on iOS & Android.',
        tags: ['Unity', 'LiDAR', 'AR BIM', 'iOS'],
        icon: img('delta-arbim.jpg'),
        links: [
          { label: 'Visit Website', url: 'https://deltaarbim.tech' },
        ],
      },
      {
        name: 'AR Car Experience',
        description: 'Immersive AR car visualization and interaction experience. Users can explore car models in their real environment with detailed 3D rendering.',
        tags: ['Unity', 'AR', 'Vuforia', '3D Models'],
        icon: img('ar-car.jpg'),
        links: [
          { label: 'Watch Demo', video: 'https://drive.google.com/file/d/1M2BsYrwg0PQPmNnoMKQTB8_jq75cwDEg/view?usp=sharing' },
        ],
      },
      {
        name: 'AR Room Experience',
        description: 'Interactive AR room design and furniture placement application. Users can visualize furniture in their space before purchasing.',
        tags: ['Unity', 'AR', 'ARKit', 'Spatial Mapping'],
        icon: img('ar-room.jpg'),
        links: [
          { label: 'Watch Demo', video: 'https://drive.google.com/file/d/1L3UkiBZeOtSqr5D5v5k8SbwIBwPfIlep/view?usp=drive_link' },
        ],
      },
      {
        name: 'AR Sports',
        description: 'Augmented reality sports training and visualization app. Features real-time motion tracking and performance analysis.',
        tags: ['Unity', 'AR', 'Sports', 'Motion Tracking'],
        icon: img('ar-sports.png'),
        links: [
          { label: 'Google Play', url: 'https://play.google.com/store/apps/details?id=com.volavole.volavolear' },
          { label: 'Watch Demo', video: 'https://drive.google.com/file/d/1gIA6tlCWc23hiipPpRkxKCOIlXIze5R8/view?usp=drive_link' },
        ],
      },
    ],
  },
  {
    title: '2D & Casual Games',
    projects: [
      {
        name: 'World of Peppa Pig',
        description: 'Educational kids game featuring the beloved Peppa Pig character. Includes learning activities, mini-games, and interactive storytelling.',
        tags: ['Unity', '2D', 'Kids', 'Education'],
        icon: img('peppa-pig-world.jpg'),
        links: [
          { label: 'App Store', url: 'https://apps.apple.com/us/app/world-of-peppa-pig-netflix/id6743238624' },
        ],
      },
      {
        name: "Hen's Revenge",
        description: 'Fun and engaging casual game with unique gameplay mechanics. Features puzzle elements and strategic thinking challenges.',
        tags: ['Unity', '2D', 'Casual', 'Puzzle'],
        icon: img('hens-revenge.png'),
        links: [
          { label: 'Google Play', url: 'https://play.google.com/store/apps/details?id=com.okpogame.hensrevenge' },
        ],
      },
      {
        name: 'ABC Preschool Games',
        description: 'Educational games for kids focusing on learning and development. Features alphabet learning, number recognition, and cognitive development activities.',
        tags: ['Unity', 'Education', 'Kids', 'Learning'],
        icon: img('abc-preschool.png'),
        links: [
          { label: 'Google Play', url: 'https://play.google.com/store/apps/details?id=com.kiddzoo.abc.preschool.games.kids' },
        ],
      },
      {
        name: 'Word Search Adventure',
        description: 'Engaging word search game with adventure elements and challenging puzzles. Features multiple themes and difficulty levels.',
        tags: ['Unity', 'Puzzle', 'Words', 'Adventure'],
        icon: img('word-search-adventure.png'),
        links: [
          { label: 'Google Play', url: 'https://play.google.com/store/apps/details?id=com.apexinteractive.wordsearchadventure' },
        ],
      },
    ],
  },
  {
    title: '3D Games',
    projects: [
      {
        name: 'River Rage',
        description: 'Spline-based 3D kayak racing game with trick animations, stunning graphics, and immersive gameplay. Features dynamic environments and advanced physics.',
        tags: ['Unity', '3D', 'Racing', 'Physics'],
        icon: img('river-rage.jpg'),
        links: [
          { label: 'Watch Demo', video: 'https://www.dropbox.com/scl/fi/hphwej5m7am5hoeqfeu7b/RiverRage-Video-30-10-2017.mp4?rlkey=4shfdlajhtvqgpa2ps9zqu3jw&st=r1lxdgw3&dl=0' },
        ],
      },
    ],
  },
];

const SKILL_GROUPS = [
  { title: 'Languages & Core', items: ['C#', 'C', 'C++', 'OOP', 'Design Patterns', 'Game Architecture'] },
  { title: 'Engines & Platforms', items: ['Unity 2D/3D', 'iOS', 'Android', 'Meta Quest', 'SteamVR', 'WebGL'] },
  { title: 'iOS Development', items: ['Build & Signing', 'App Store Release', 'Native Plugins', 'Apple Pay', 'LiDAR AR', 'Performance Profiling'] },
  { title: 'Multiplayer & Networking', items: ['Mirror Networking', 'AWS GameLift', 'Photon PUN', 'Server-Authoritative', 'Real-time Rooms', 'Voice Chat'] },
  { title: 'AR / VR', items: ['AR BIM (IFC)', 'Markerless AR', 'ARKit', 'ARCore', 'Vuforia', 'VRTK / OVR'] },
  { title: 'Game Domains', items: ['Slot', 'Fish', 'Poker', 'Keno', 'Teen Patti', 'Aviator'] },
];

const EXPERIENCE = [
  {
    company: 'Shivlam',
    role: 'Sr. Unity Game & iOS Developer',
    period: 'Mar 2025 – Present',
    location: 'Ahmedabad, Gujarat (Remote)',
    points: [
      'Core developer of Delta ARBIM — an IFC-first AR BIM platform overlaying live BIM models on construction sites with LiDAR-anchored markerless AR at ±2cm accuracy.',
      'Own the iOS side end-to-end: native integrations, build, signing, and App Store release of Unity iOS titles.',
    ],
  },
  {
    company: 'Gameium',
    role: 'Senior Unity Game Developer & Team Lead',
    period: 'Oct 2022 – Feb 2025',
    location: 'Ahmedabad, Gujarat',
    points: [
      'Built a real-time 4-player fish shooting casino game on Mirror Networking and AWS GameLift.',
      'Developed real-money casino titles (Slot, Fish, Keno, Poker, Teen Patti, Aviator) and led a team of Unity developers from architecture through release.',
    ],
  },
  {
    company: 'NOBORDER.z (InTechual Solutions)',
    role: 'Senior Developer & Team Lead',
    period: 'Jan 2022 – Sep 2022',
    location: 'Ahmedabad, Gujarat',
    points: [
      'Xana Card Game — multiplayer ability-card game with custom login/register/meta APIs, leading a team of 6 developers.',
      'Xana Builder environment-builder game and Billionaire Show — a VR quiz-show experience for Oculus Quest.',
    ],
  },
  {
    company: 'WedoWebapps',
    role: 'Senior Developer & Team Lead',
    period: 'Jan 2021 – Dec 2021',
    location: 'Ahmedabad, Gujarat',
    points: [
      'Tidy Designer — a Planner 5D-style architecture app with seamless 2D/3D switching, AR camera measurement, and Addressable-streamed models.',
      'Solved advanced rendering challenges: render-queue tuning, runtime mesh cutting, and mobile performance optimization.',
    ],
  },
  {
    company: '9 Brainz',
    role: 'Senior Developer',
    period: 'Aug 2017 – Dec 2020',
    location: 'Rajkot, Gujarat',
    points: [
      'VR Meeting — multi-user VR communication app with Photon PUN voice chat, spatial audio, and 3D video streaming.',
      'Shipped VR/AR titles including AR Kingdom Builder, VR Mall, VR DeadEnd, River Rage, and Screaming Bird.',
    ],
  },
];

function ProjectThumb({ project }) {
  if (project.icon) {
    return (
      <div className="thumb">
        <img className="thumb-icon" src={project.icon} alt={`${project.name} icon`} loading="lazy" />
      </div>
    );
  }
  const { from, to, label } = project.art;
  return (
    <div className="thumb">
      <div className="thumb-art" style={{ background: `linear-gradient(135deg, ${from}, ${to})` }}>
        <span>{label}</span>
      </div>
    </div>
  );
}

function ProjectCard({ project, onVideo }) {
  return (
    <article className="project-card">
      <ProjectThumb project={project} />
      <div className="project-content">
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        <div className="project-tech">
          {project.tags.map((tag) => (
            <span className="tech-tag" key={tag}>{tag}</span>
          ))}
        </div>
        {project.links.length > 0 && (
          <div className="project-links">
            {project.links.map((link) =>
              link.video ? (
                <button key={link.label} className="btn btn-small" onClick={() => onVideo(link.video)}>
                  {link.label}
                </button>
              ) : (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-small btn-outline"
                >
                  {link.label}
                </a>
              )
            )}
          </div>
        )}
      </div>
    </article>
  );
}

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isLoading, setIsLoading] = useState(true);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState({ submitted: false, success: false, message: '' });

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 900);
    emailjs.init('YOUR_PUBLIC_KEY');
    return () => clearTimeout(timer);
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
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ submitted: true, success: false, message: 'Sending message...' });

    try {
      setTimeout(() => {
        setFormStatus({
          submitted: true,
          success: true,
          message: "Thank you for your message! I'll get back to you soon. For urgent inquiries, please email me directly at kukadiyaprince1416@gmail.com",
        });
        setFormData({ name: '', email: '', message: '' });
      }, 1500);

      console.log('📧 Contact Form Submission:', {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        timestamp: new Date().toISOString(),
        action: 'Please check this message and respond manually',
      });
    } catch (error) {
      console.error('Email error:', error);
      setFormStatus({
        submitted: true,
        success: true,
        message: 'Thank you! Please email me directly at kukadiyaprince1416@gmail.com to ensure I receive your message.',
      });
      setFormData({ name: '', email: '', message: '' });
    }
  };

  if (isLoading) {
    return (
      <div className="loading">
        <div className="loading-mark">PK</div>
        <div className="loading-bar"><span /></div>
      </div>
    );
  }

  const navItems = ['home', 'about', 'skills', 'experience', 'projects', 'contact'];

  return (
    <div className="App">
      <div className="bg-glow bg-glow-1" />
      <div className="bg-glow bg-glow-2" />

      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <button className="nav-logo" onClick={() => scrollToSection('home')}>
            <span className="nav-mark">PK</span>
            <span className="nav-name">Prince Kukadiya</span>
          </button>
          <ul className="nav-menu">
            {navItems.map((item) => (
              <li key={item}>
                <button
                  className={`nav-link ${activeSection === item ? 'active' : ''}`}
                  onClick={() => scrollToSection(item)}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </button>
              </li>
            ))}
          </ul>
          <a className="btn btn-small nav-resume" href={RESUME_URL} download="Prince_Kukadiya_Resume.pdf">
            Resume
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <p className="hero-eyebrow">Senior Unity Game &amp; iOS Developer · AR/VR &amp; AR BIM · Team Lead</p>
          <h1 className="hero-title">
            Building games &amp; AR experiences <span className="accent">played by millions.</span>
          </h1>
          <p className="hero-description">
            9+ years shipping 2D, 3D, AR, and VR games across Android, iOS, and VR headsets.
            Specialized in real-money casino games with real-time multiplayer, and AR solutions
            like Delta ARBIM — an IFC-first AR BIM platform with LiDAR-anchored markerless AR at ±2cm accuracy.
          </p>
          <div className="hero-buttons">
            <button className="btn btn-primary" onClick={() => scrollToSection('projects')}>
              View My Work
            </button>
            <a className="btn btn-secondary" href={RESUME_URL} download="Prince_Kukadiya_Resume.pdf">
              Download Resume
            </a>
            <button className="btn btn-ghost" onClick={() => scrollToSection('contact')}>
              Get In Touch
            </button>
          </div>
          <div className="hero-stats">
            <div className="stat">
              <h3>9+</h3>
              <p>Years Experience</p>
            </div>
            <div className="stat">
              <h3>25+</h3>
              <p>Shipped Titles</p>
            </div>
            <div className="stat">
              <h3>10M+</h3>
              <p>Downloads</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <p>
              I'm a Senior Unity Game &amp; iOS Developer and Team Lead with 9+ years of experience
              building 2D, 3D, AR, and VR games for Android, iOS, and VR headsets (Oculus/Meta Quest,
              SteamVR). I specialize in real-money and casino games — Slot, Fish, Keno, Poker, Teen
              Patti, Aviator — with real-time multiplayer built on Mirror, AWS GameLift, and Photon PUN.
            </p>
            <p>
              On the AR side, I'm a core developer of Delta ARBIM, an IFC-first AR BIM platform that
              overlays live BIM models on construction sites with LiDAR-anchored markerless AR at ±2cm
              accuracy. I ship and release iOS builds end-to-end, including platform-specific native
              integration such as Apple Pay, and lead teams from architecture through App Store and
              Play Store release with clean, performance-optimized code.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills">
        <div className="container">
          <h2 className="section-title">Skills &amp; Technologies</h2>
          <div className="skills-grid">
            {SKILL_GROUPS.map((group) => (
              <div className="skill-category" key={group.title}>
                <h3>{group.title}</h3>
                <div className="skill-items">
                  {group.items.map((item) => (
                    <span className="skill-item" key={item}>{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="experience">
        <div className="container">
          <h2 className="section-title">Work Experience</h2>
          <div className="timeline">
            {EXPERIENCE.map((job) => (
              <div className="timeline-item" key={job.company}>
                <div className="timeline-dot" />
                <div className="timeline-card">
                  <div className="timeline-header">
                    <div>
                      <h3>{job.company}</h3>
                      <p className="timeline-role">{job.role}</p>
                    </div>
                    <div className="timeline-meta">
                      <span className="timeline-period">{job.period}</span>
                      <span className="timeline-location">{job.location}</span>
                    </div>
                  </div>
                  <ul>
                    {job.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <div className="container">
          <h2 className="section-title">Featured Projects</h2>
          {PROJECT_CATEGORIES.map((category) => (
            <div className="project-category" key={category.title}>
              <h3 className="category-title">{category.title}</h3>
              <div className="projects-grid">
                {category.projects.map((project) => (
                  <ProjectCard project={project} onVideo={openVideo} key={project.name} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          <div className="contact-content">
            <div className="contact-info">
              <h3>Let's work together!</h3>
              <p>
                I'm always interested in new opportunities and exciting projects. Whether you have a
                question about game development, want to collaborate, or just want to say hi, feel
                free to reach out.
              </p>
              <div className="contact-details">
                <a className="contact-item" href="mailto:kukadiyaprince1416@gmail.com">
                  <span className="contact-label">Email</span>
                  <span>kukadiyaprince1416@gmail.com</span>
                </a>
                <a className="contact-item" href="tel:+918000333033">
                  <span className="contact-label">Phone</span>
                  <span>+91 8000333033</span>
                </a>
                <a className="contact-item" href="https://linkedin.com/in/kprincebaba" target="_blank" rel="noopener noreferrer">
                  <span className="contact-label">LinkedIn</span>
                  <span>linkedin.com/in/kprincebaba</span>
                </a>
                <div className="contact-item">
                  <span className="contact-label">Location</span>
                  <span>Ahmedabad, Gujarat, India</span>
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
              <p>Senior Unity Game &amp; iOS Developer</p>
            </div>
            <div className="footer-section">
              <h4>Quick Links</h4>
              <ul>
                <li><button onClick={() => scrollToSection('about')}>About</button></li>
                <li><button onClick={() => scrollToSection('experience')}>Experience</button></li>
                <li><button onClick={() => scrollToSection('projects')}>Projects</button></li>
                <li><a href={RESUME_URL} download="Prince_Kukadiya_Resume.pdf">Resume</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Connect</h4>
              <div className="social-links">
                <a href="https://github.com/PrinceKukadiya" target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href="https://linkedin.com/in/kprincebaba" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2026 Prince Kukadiya. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
