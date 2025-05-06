import { Link } from "react-router-dom";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import "./ProjectCard.css";

const ProjectCard = ({ project }) => {
  const { id, title, description, tech, image, github, site } = project;

  return (
    <div className="project-card">
      <img src={image} alt={title} className="project-image" />

      <div className="project-content">
        <h3 className="project-title">
          <Link to={`/projects/${id}`}>{title}</Link>
        </h3>

        <p className="project-description">{description}</p>

        <ul className="project-tech">
          {tech.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>

        <div className="project-links">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub size={20} />
          </a>

          {site && (
            <a
              href={site}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Live Site"
            >
              <FaExternalLinkAlt size={20} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;