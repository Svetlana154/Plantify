import Container from "react-bootstrap/esm/Container";
import CardGroup from "react-bootstrap/esm/CardGroup";
import "../styles/TeamPreview.css";
import wordCloud from "../images/word-cloud-raleway.png"
import PersonPreviewCard from "./PersonPreviewCard";
import teamData from "../data/team.json";

function TeamPreview() { 
  const cardGroup = [];

  teamData.forEach(teamMember => {
    cardGroup.push(<PersonPreviewCard profilePic={teamMember.profilePic} name={teamMember.name} description={teamMember.description}/>);
  });

  return (
    <Container className="team-preview">
      <h1>Who are we?</h1>
      <Container className="team-preview-img">
        <img src={wordCloud} alt="GARDENERS"/>
      </Container>
      <CardGroup className="team-preview-content">
        {cardGroup}
      </CardGroup>
      <Container className="team-learn-more">
        <a href="/AboutUs">Learn more...</a>
      </Container>
    </Container>
  );
}

export default TeamPreview;