import { useParams, Link } from "react-router-dom";
import { projects } from "../Data/projects";
import { FaGithub, FaExternalLinkAlt, FaArrowLeft } from "react-icons/fa";
import {motion} from 'framer-motion';
import "./SingleProject.css";

const SingleProject = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="single-project-container">
        <h2>Project not found</h2>
        <Link to="/projects" className="back-link">
          <FaArrowLeft /> Back to Projects
        </Link>
      </div>
    );
  }

  const index = projects.findIndex((p) => p.id === id);
  const prev = projects[index - 1];
  const next = projects[index + 1];

  const { title, description2, tech, image, github, site } = project;

  return (
    <div className="single-project-container">
      <Link to="/projects" className="back-link">
        <FaArrowLeft /> Back to Projects
      </Link>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="project-title">{title}</h2>
        <img src={image} alt={title} className="project-image" />
        <p className="project-description">{description2}</p>
      </motion.div>

      <ul className="project-tech">
        {tech.map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ul>

      <div className="project-links">
        <a href={github} target="_blank" rel="noopener noreferrer">
          <FaGithub size={20} /> GitHub
        </a>
        {site && (
          <a href={site} target="_blank" rel="noopener noreferrer">
            <FaExternalLinkAlt size={20} /> Live Site
          </a>
        )}
      </div>
      <div className="project-navigation">
        {prev && <Link to={`/projects/${prev.id}`}>← {prev.title}</Link>}
        {next && <Link to={`/projects/${next.id}`}>{next.title} →</Link>}
      </div>
    </div>
  );
};

export default SingleProject;