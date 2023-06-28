import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/esm/Container';
import potsOnShelvesCropped from "../images/pots-on-shelves-cropped-4-3.jpg";
import flowers from "../images/flowers-cropped-4-3.jpg";
import planting from "../images/planting-cropped-4-3.jpg";
import "../styles/ServicesCarousel.css"

function ServicesCarousel() {
  return (
    <Container className="services-carousel">
      <Carousel className="services-carousel-content">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={potsOnShelvesCropped}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={flowers}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={planting}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </Container>
  );
}

export default ServicesCarousel;