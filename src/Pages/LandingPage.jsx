import { Link } from "react-router-dom";
import "./LandingPage.css";
import heroImg from "../../public/heroImg.png";

const LandingPage = () => {
  return (
    <section className="landing-container">
      <div className="intro-text">
        <h1>
          Hi, I'm <span className="highlight">Cole Whitehurst</span>
        </h1>
        <h2 className="subtitle">Fullstack Developer • PERN Stack</h2>
        <p className="summary">
          I specialize in building scalable, performant web apps, with hands-on experience across both frontend architecture and backend systems. From advanced React concepts and responsive UI/UX to RESTful APIs and database design, I bring a comprehensive approach to development. I am also experienced with real-time features via WebSockets and the use of
          AWS for cloud storage solutions. My background in sales leadership adds a user-focused and collaborative edge to everything I build, offering a unique perspective that distinguishes my approach to problem-solving. I thrive on solving puzzles and pushing myself mentally, which drives my passion for software engineering. My process is to build solutions quickly and iteratively, focusing on functionality first, followed by a meticulous refinement phase to ensure maintainability and performance. When it comes to staying
          current with the latest technologies, I prioritize understanding the most relevant libraries and tools for each project, teaching myself the necessary skills swiftly and thoroughly. This approach has allowed
          me to continuously adapt to new challenges and expand my expertise. As I continue to grow as a software engineer, I'm eager to push beyond simple web development and embrace more complex, full-scale projects that challenge my skills and broaden my horizons.
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
