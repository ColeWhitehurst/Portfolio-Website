import { projects } from "../Data/projects";
import ProjectCard from "../Components/ProjectCard";
import "./Projects.css";

const Projects = () => {
  return (
    <>
      <section className="projects-section">
        <h2 className="projects-heading">Projects</h2>

        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Projects;