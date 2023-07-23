import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import CardGroup from "react-bootstrap/esm/CardGroup";
import "../styles/Team.css";
import PersonPreviewCard from "./PersonPreviewCard";

function Team({title, data}) {

  const cardGroup = [];

  if (Object.keys(data).length > 0)
    data.forEach(teamMember => {
      cardGroup.push(
        <PersonPreviewCard 
          key={"person-preview-"+teamMember.name.replace(" ", "-")}
          profilePic={teamMember.profilePic}
          name={teamMember.name}
          description={teamMember.description}
        />);
    });   

  return (
    <Container className="team">
      <Row>
        <h1>{title}</h1>
        <CardGroup className="team-preview-content">
          {cardGroup}
        </CardGroup>
      </Row>
    </Container>
  );
}

export default Team;