import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import "../styles/Location.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

function Location() {
  return (
    <Container fluid className="location" id="location">
      <Container className="location-container">
        <h1>Where to find us</h1>
        <Row className="location-content">
          <Col >
            <Container className="location-content-text">
              <div className="location-content-text-entry">
                <FontAwesomeIcon icon={faLocationDot} size="2xl"/>
              </div>
              <Container className="location-content-text-entry">
                <h3>
                  105 St Andrew St, Ottawa, ON, Canada, K1N 5G1
                </h3>
              </Container>
              <Container fluid className="location-content-text-entry">
                <Row>
                  <Col>
                    <b>Monday - Friday:</b>
                  </Col>
                  <Col>
                    09:00 AM - 19:00 PM
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <b>Saturday - Sunday:</b>
                  </Col>
                  <Col>
                    10:00 AM - 16:00 PM
                  </Col>
                </Row>
              </Container>
            </Container>
          </Col>
          <Col>
            <iframe className="location-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d889.768977540772!2d-75.69503841807929!3d45.43224534794876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce04e32c0ecbb1%3A0xa2295fd8cad0cf5e!2s105%20St%20Andrew%20St%2C%20Ottawa%2C%20ON%20K1N%205G1!5e0!3m2!1sen!2sca!4v1688050923886!5m2!1sen!2sca" allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> 
          </Col>
        </Row>
      </Container>
    </Container>  
  );
}

export default Location;