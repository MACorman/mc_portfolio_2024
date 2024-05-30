import projects from "../ProjectData";
import Carousel from "react-bootstrap/Carousel";
import YouTube from "react-youtube";
import { useState, useEffect } from "react";

export default function Projects() {
  const [size, setSize] = useState(["600", "1000"]);

  useEffect(() => {
    const updateWindowSize = () => {
      // maybe do something like if window less than XXX set size to [XXX, XXXX]
      if (window.innerWidth < 1400) {
        setSize(["470", "900"]);
      }
      if (window.innerWidth < 1300) {
        setSize(["450", "860"]);
      }
      if (window.innerWidth < 1230) {
        setSize(["420", "800"]);
      }
      if (window.innerWidth < 1145) {
        setSize(["400", "760"]);
      }
      if (window.innerWidth < 1090) {
        setSize(["380", "720"]);
      }
      if (window.innerWidth < 1035) {
        setSize(["360", "680"]);
      }
      if (window.innerWidth < 992) {
        setSize(["340", "640"]);
      }
      if (window.innerWidth < 930) {
        setSize(["320", "600"]);
      }
      if (window.innerWidth < 875) {
        setSize(["300", "560"]);
      }
      if (window.innerWidth < 815) {
        setSize(["280", "520"]);
      }
      if (window.innerWidth < 778) {
        setSize(["260", "500"]);
      }
      if (window.innerWidth < 740) {
        setSize(["230", "440"]);
      }
      if (window.innerWidth < 660) {
        setSize(["210", "400"]);
      }
      if (window.innerWidth < 600) {
        setSize(["190", "360"]);
      }
      if (window.innerWidth < 550) {
        setSize(["180", "320"]);
      }
      if (window.innerWidth < 500) {
        setSize(["170", "300"]);
      }
      if (window.innerWidth < 480) {
        setSize(["160", "280"]);
      }
      if (window.innerWidth < 450) {
        setSize(["150", "260"]);
      }
      if (window.innerWidth < 430) {
        setSize(["150", "250"]);
      }
      if (window.innerWidth < 410) {
        setSize(["150", "240"]);
      }
      if (window.innerWidth < 395) {
        setSize(["140", "230"]);
      }
      if (window.innerWidth < 380) {
        setSize(["140", "220"]);
      }
      if (window.innerWidth < 370) {
        setSize(["130", "215"]);
      }
      if (window.innerWidth < 360) {
        setSize(["130", "210"]);
      }
      if (window.innerWidth < 345) {
        setSize(["130", "205"]);
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
