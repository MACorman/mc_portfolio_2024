import projects from "../ProjectData";
import Carousel from "react-bootstrap/Carousel";
import YouTube from "react-youtube";
import { useState, useEffect } from "react";

export default function Projects() {
  const [size, setSize] = useState(["600", "1020"]);

  useEffect(() => {
    const updateWindowSize = () => {
      // maybe do something like if window less than XXX set size to [XXX, XXXX]
      if (window.innerWidth < 1400) {
        setSize(["510", "920"]);
      }
      if (window.innerWidth < 1300) {
        setSize(["460", "870"]);
      }
      if (window.innerWidth < 1230) {
        setSize(["440", "810"]);
      }
      if (window.innerWidth < 1145) {
        setSize(["420", "780"]);
      }
      if (window.innerWidth < 1090) {
        setSize(["400", "740"]);
      }
      if (window.innerWidth < 1035) {
        setSize(["380", "700"]);
      }
      if (window.innerWidth < 992) {
        setSize(["360", "660"]);
      }
      if (window.innerWidth < 930) {
        setSize(["340", "620"]);
      }
      if (window.innerWidth < 875) {
        setSize(["320", "580"]);
      }
      if (window.innerWidth < 815) {
        setSize(["300", "540"]);
      }
      if (window.innerWidth < 778) {
        setSize(["280", "520"]);
      }
      if (window.innerWidth < 740) {
        setSize(["250", "455"]);
      }
      if (window.innerWidth < 660) {
        setSize(["230", "435"]);
      }
      if (window.innerWidth < 600) {
        setSize(["210", "395"]);
      }
      if (window.innerWidth < 550) {
        setSize(["200", "355"]);
      }
      if (window.innerWidth < 500) {
        setSize(["180", "335"]);
      }
      if (window.innerWidth < 480) {
        setSize(["170", "315"]);
      }
      if (window.innerWidth < 450) {
        setSize(["160", "295"]);
      }
      if (window.innerWidth < 430) {
        setSize(["160", "285"]);
      }
      if (window.innerWidth < 410) {
        setSize(["160", "275"]);
      }
      if (window.innerWidth < 395) {
        setSize(["150", "265"]);
      }
      if (window.innerWidth < 380) {
        setSize(["150", "255"]);
      }
      if (window.innerWidth < 370) {
        setSize(["140", "250"]);
      }
      if (window.innerWidth < 360) {
        setSize(["140", "245"]);
      }
      if (window.innerWidth < 345) {
        setSize(["140", "230"]);
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
