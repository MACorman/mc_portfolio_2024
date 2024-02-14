import Carousel from "react-bootstrap/Carousel";

export default function Projects() {
  return (
    <div>
      <h1 id="projects">Projects</h1>
      <Carousel data-bs-theme="dark" controls={false} fade>
        <Carousel.Item interval={5000}>
          <img
            className="d-block w-100"
            src="https://www.saberhealth.com/uploaded/blog/images/Oranges.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <img
            className="d-block w-100"
            src="https://www.tastingtable.com/img/gallery/are-oranges-named-after-the-color/l-intro-1666984048.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h5>Second slide label</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <img
            className="d-block w-100"
            src="https://drizzlemeskinny.com/wp-content/uploads/2023/04/shutterstock_1014021409-scaled.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h5>Third slide label</h5>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
