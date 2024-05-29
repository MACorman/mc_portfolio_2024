import projects from "../ProjectData";
import Carousel from "react-bootstrap/Carousel";
import YouTube from "react-youtube";
import { useState, useEffect } from "react";

export default function Projects() {
  const [size, setSize] = useState(["600", "1000"]);

  useEffect(() => {
    const updateWindowSize = () => {
      // maybe do something like if window less than XXX set size to [XXX, XXXX]
      if (window.innerWidth < 1200) {
        setSize(["400", "800"]);
      }
      if (window.innerWidth < 992) {
        setSize(["300", "650"]);
      }
      if (window.innerWidth < 768) {
        setSize(["200", "600"]);
      }
      if (window.innerWidth < 600) {
        setSize(["200", "400"]);
      }
      if (window.innerWidth < 400) {
        setSize(["150", "240"]);
      }
    };

    window.addEventListener("resize", updateWindowSize);
    return () => {
      window.removeEventListener("resize", updateWindowSize);
    };
  }, []);

  console.log(size);
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
                  opts={{
                    height: size[0],
                    width: size[1],
                  }}
                />
              ) : (
                <img
                  id={project.image}
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
