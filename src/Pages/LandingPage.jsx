import { Link } from "react-router-dom";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <section className="landing-container">
      <div className="intro-text">
        <h1>
          Hey, I'm <span className="highlight">Your Name</span>
        </h1>
        <h2 className="subtitle">
          Fullstack Developer • JavaScript Enthusiast
        </h2>
        <p className="summary">
        I specialize in building scalable, performant web apps using the PERN stack (PostgreSQL, Express.js, React.js, Node.js), with hands-on experience across both frontend architecture and backend systems. From advanced React concepts and responsive UI/UX to RESTful APIs and database design, I bring a comprehensive approach to development. I am also experienced with real-time features via WebSockets and usage of AWS for cloud storage solutions. My background in sales leadership adds a user-focused and collaborative edge to everything I build.
        </p>

        <div className="cta-buttons">
          <Link to="/projects" className="btn primary">
            View Projects
          </Link>
          <Link to="/contact" className="btn secondary">
            Contact Me
          </Link>
        </div>
      </div>

      <div className="hero-graphic">
        <img src={heroImg} alt="Developer illustration" />
      </div>
    </section>
  );
};

export default LandingPage;