import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/esm/Container';
import potsOnShelvesCropped from "../images/pots-on-shelves-cropped-4-3.jpg";
import planting from "../images/planting-cropped-4-3.jpg";
import service1 from "../images/service-1.jpeg";
import service2 from "../images/service-2.jpeg";
import service3 from "../images/service-3.jpeg";
import service4 from "../images/service-4.jpeg";
import service5 from "../images/service-5.jpeg";
import service6 from "../images/service-6.jpeg";
import "../styles/ServicesCarousel.css"

function ServicesCarousel() {
  return (
    <section className="services-carousel" aria-describedby='This is an image carousel.'>
      <Carousel className="services-carousel-content">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={potsOnShelvesCropped}
            alt="Pots with flowers on a shelf"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={service1}
            alt="A man in grey shirt planting flowers in tire flower beds"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={planting}
            alt="A woman preciously holding a pot with a plant sprout"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={service2}
            alt="A woman smelling a yellow flower in a field"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={service3}
            alt="An old lady in a trench coat buying flowers"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={service4}
            alt="A woman in black shirt planting flowers in a flower bed"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={service5}
            alt="A man in a red striped sweater watering plants"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={service6}
            alt="A child watering vegetables"
          />
        </Carousel.Item>
      </Carousel>
    </section>
  );
}

export default ServicesCarousel;