import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import "../styles/Tutorial.css";
import plantDisplayCroppedSquare from "../images/plant-display-cropped-square.jpg";
import greenhouse from "../images/greenhouse.jpg";


function Tutorial() {
  return(
    <div className="tutorial">
      <Container>
        <Row className="tutorial-row">
          <h2>
            Are you a beginner?
          </h2>
          <span>
            Learn everything there is to know about plants.
          </span>
        </Row>
        <Row className="tutorial-row">
          <Col>
            <img src={plantDisplayCroppedSquare} width="90%" alt="other" />
          </Col>
          <Col className="tutorial-information-col">
            <Container className="tutorial-content">
              <h4>Types of Plants</h4>
              <span>
                Nulla vulputate nulla efficitur, pellentesque sapien at, tristique erat. Fusce lobortis dictum libero in pellentesque. Sed volutpat sit amet mi ac fermentum. Nullam tempus leo et bibendum placerat. Nulla nec ante ligula. Donec convallis, purus vel tempus vestibulum, nunc neque gravida risus, nec tincidunt lacus lectus sit amet magna.
              </span>
            </Container>
          </Col>
        </Row>
        <Row className="tutorial-row">
          <Col className="tutorial-information-col">
            <Container className="tutorial-content">
              <h4>How to Take Care of Plants</h4>
              <span>
                Nulla vulputate nulla efficitur, pellentesque sapien at, tristique erat. Fusce lobortis dictum libero in pellentesque. Sed volutpat sit amet mi ac fermentum. Nullam tempus leo et bibendum placerat. Nulla nec ante ligula. Donec convallis, purus vel tempus vestibulum, nunc neque gravida risus, nec tincidunt lacus lectus sit amet magna.
              </span>
            </Container>
          </Col>
          <Col>
            <img src={greenhouse} width="80%" alt="other" />
          </Col>
        </Row>
        <Row className="tutorial-row">
          <Container className="tutorial-content">
            <h4>Preparing the Perfect Environment</h4>
            <span>
              Nulla vulputate nulla efficitur, pellentesque sapien at, tristique erat. Fusce lobortis dictum libero in pellentesque. Sed volutpat sit amet mi ac fermentum. Nullam tempus leo et bibendum placerat. Nulla nec ante ligula. Donec convallis, purus vel tempus vestibulum, nunc neque gravida risus, nec tincidunt lacus lectus sit amet magna.
            </span>
            <div className="cto tutorial-btn">
                <button className="btn btn-outline-light">Buy your first plant</button>
              </div>
          </Container>
        </Row>
        <Row>
          <iframe width="1280" height="720" src="https://www.youtube.com/embed/LZhnCxG5c6s" title="HOUSEPLANT CARE TIPS FOR BEGINNERS » + printable guide" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </Row>
      </Container>
    </div>
  );
}

export default Tutorial;