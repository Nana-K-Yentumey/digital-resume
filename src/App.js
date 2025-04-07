import React from 'react';
import './App.css';
import selfie from './selfie.jpg';

const App = () => {
  return (
    <div className="app">
      {/* Navigation */}
      <nav className="navbar">
        <div className="navbar-container">
          <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="hero">
        <div className="hero-content">
          <h1>Nana Mewiedela Yentumey</h1>
          <p className="subtitle">Frontend Developer | React Enthusiast</p>
          <button className="cta-button">View My Work</button>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="section about-me">
        <div className="section-container">
          <div className="about-content">
            <div className="about-image-container">
              <img src={selfie} alt="Nana Mewiedela Yentumey" className="about-image" />
            </div>
            <div className="about-text">
              <h2>About Me</h2>
              <p>
                Passionate developer with experience in building web applications using
                React and modern technologies. I love solving problems and creating
                interactive user experiences.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies,
                contributing to open-source projects, or enjoying outdoor activities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section skills-section">
        <div className="section-container">
          <h2>My Skills</h2>
          <div className="skills-grid">
            <div className="skill-card">
              <h3>React.js</h3>
              <p>Building interactive UIs with modern React practices</p>
            </div>
            <div className="skill-card">
              <h3>JavaScript</h3>
              <p>ES6+ features and functional programming</p>
            </div>
            <div className="skill-card">
              <h3>CSS</h3>
              <p>Responsive design and CSS animations</p>
            </div>
            <div className="skill-card">
              <h3>REST APIs</h3>
              <p>Integration and data fetching</p>
            </div>
            <div className="skill-card">
              <h3>Git</h3>
              <p>Version control and collaboration</p>
            </div>
            <div className="skill-card">
              <h3>UI/UX</h3>
              <p>Creating intuitive user experiences</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section projects-section">
        <div className="section-container">
          <h2>My Projects</h2>
          <div className="projects-grid">
            <div className="project-card">
              <h3>Portfolio Website</h3>
              <p>A responsive personal portfolio built with React</p>
              <a href="#" className="project-link">View Project</a>
            </div>
            <div className="project-card">
              <h3>E-commerce Store</h3>
              <p>Full-featured online shop with cart functionality</p>
              <a href="#" className="project-link">View Project</a>
            </div>
            <div className="project-card">
              <h3>Blog Application</h3>
              <p>Content management system with markdown support</p>
              <a href="#" className="project-link">View Project</a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <footer id="contact" className="footer">
        <div className="section-container">
          <h2>Get In Touch</h2>
          <p>I'm currently looking for new opportunities!</p>
          <a href="mailto:pamela@example.com" className="email-link">pamela@example.com</a>
          <div className="social-links">
            <a href="#" className="social-icon">LinkedIn</a>
            <a href="#" className="social-icon">GitHub</a>
            <a href="#" className="social-icon">Twitter</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;