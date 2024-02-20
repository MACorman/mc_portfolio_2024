import projects from "../ProjectData";
import Carousel from "react-bootstrap/Carousel";
import YouTube from "react-youtube";

export default function Projects() {
  return (
    <div id="projects" className="projects-container">
      <h2>P r o j e c t s</h2>
      <div className="projects-carousel">
        <Carousel data-bs-theme="dark" controls={false}>
          {projects.map((project) => (
            <Carousel.Item interval={3000}>
              {project.demo ? (
                <YouTube
                  className="youtube-embed"
                  videoId={project.demo}
                  opts={{ height: "600", width: "1000" }}
                />
              ) : (
                <img
                  className="d-block w-100"
                  src={require(`../${project.image}.png`)}
                  alt={project.image}
                />
              )}
              <div className="project-caption">
                <Carousel.Caption>
                  <h5>{project.name}</h5>
                  <p>{project.description}</p>
                  <span>
                    <a href={project.frontend} target="_blank" rel="noreferrer">
                      Frontend
                    </a>
                  </span>
                  <span> | </span>
                  <span>
                    <a href={project.backend} target="_blank" rel="noreferrer">
                      Backend
                    </a>
                  </span>
                </Carousel.Caption>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
}
