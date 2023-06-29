import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import "../styles/PersonEntry.css";


function PersonEntry({profilePic, name, description, extendedDescription}) {
  return (
    <Row className="person-entry">
      <Col md={2}>
        <img src={profilePic} alt="profile pic" className="person-entry-img" />
      </Col>
      <Col>
        <Container>
          <h3> {name} </h3>
          <div>
            <div className="person-entry-description"> 
              {description}
            </div>
            <div>
              {extendedDescription}
            </div>
          </div>
        </Container>
      </Col>
    </Row>
  );
}

export default PersonEntry;