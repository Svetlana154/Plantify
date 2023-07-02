import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Button from "react-bootstrap/esm/Button";
import "../styles/Tutorial.css";
import plantDisplayCroppedSquare from "../images/plant-display-cropped-square.jpg";
import greenhouse from "../images/greenhouse.jpg";


function Tutorial({handleGoToProducts}) {
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
                There are hundreds of different species of plants, but when we refer to the <i>type</i> of a plant, we actually mean the <i>category of plants</i> that it belongs to. For example, a dandelion is a flower, a cactus is a succulent, and an oak tree is... well... a tree. Our products in particular split up all the plants in the following categories: seeds, succulents, ferns and shrubs, crops, flowers, and trees. 
              </span>
            </Container>
          </Col>
        </Row>
        <Row className="tutorial-row">
          <Col className="tutorial-information-col">
            <Container className="tutorial-content">
              <h4>How to Take Care of Plants</h4>
              <span>
                Caring for a plant is crucial for its survival. The most important factor to consider is the environment you place your plant in. Is there enough water and nutrients in the soil? Is the air damp and warm enough? Is there direct sunlight or is the area in the shade? Every plant requires its own specific environment considerations for it to thrive and, as you get more and more familiar with different plants, you will start to understand more about them. But for now, let's to get you started with a beginner-friendly plant - any of the succulents - and see if you can perfect the art of taking care of plants.
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
              In order to figure out what is the perfect environment for your plant, check its hardiness zone a.k.a the region the plant is usually found in. Hardiness zones range from 0 to 13 with A and B levels for each and they usually define the acceptable temperatures of the plants in that region. Learn more about Canada's hardiness zones <a href="http://www.planthardiness.gc.ca/?m=1" target="_blank">here</a>. And with that, you're ready to start with gardening journey!
            </span>
            <div className="cto tutorial-btn">
                <Button variant="outline-light" onClick={handleGoToProducts}>Buy your first plant</Button>
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