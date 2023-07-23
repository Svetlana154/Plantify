import Container from "react-bootstrap/esm/Container";
import "../styles/TeamPreview.css";
import wordCloud from "../images/word-cloud-raleway.png"

function TeamPreview() { 
  

  return (
    <Container className="team-preview">
      <h1>Who are we?</h1>
      <Container className="team-preview-img">
        <img src={wordCloud} alt="GARDENERS"/>
      </Container>
      <Container className="team-learn-more">
        <a href="/AboutUs">Learn more...</a>
      </Container>
    </Container>
  );
}

export default TeamPreview;