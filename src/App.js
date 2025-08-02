import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Kukadiya Prince</h1>
        <p>Game Developer | Unity | VR/AR | Multiplayer</p>
      </header>

      <section className="projects">
        <h2>Projects</h2>
        <div className="project-card">
          <h3>Cosmo Strike</h3>
          <p>Slot game built in Unity, available on Google Play.</p>
          <a href="https://play.google.com/store/apps/details?id=com.lgt.cosmostrike" target="_blank" rel="noopener noreferrer">Play Now</a>
        </div>

        <div className="project-card">
          <h3>VR Mall</h3>
          <p>Immersive VR shopping experience made in Unity for Android.</p>
        </div>
      </section>

      <footer>
        <p>© 2025 Kukadiya Prince | Contact: youremail@example.com</p>
      </footer>
    </div>
  );
}

export default App;
