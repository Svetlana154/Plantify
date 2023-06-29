import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import CardGroup from "react-bootstrap/esm/CardGroup";
import "../styles/Team.css";
import PersonEntry from "./PersonEntry";
import teamData from "../data/team.json";

function Team() {
  
  const group = [];

  teamData.forEach(teamMember => {
    group.push(<PersonEntry profilePic={teamMember.profilePic} name={teamMember.name} description={teamMember.description} extendedDescription={teamMember.extendedDescription}/>);
  });

  return (
    <Container className="team">
      <Row>
        <h1>Meet the Team</h1>
        <Container className="team-preview-content">
          {group}
        </Container>
      </Row>
    </Container>
  );
}

export default Team;