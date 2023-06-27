import Card from "react-bootstrap/esm/Card";
import "../styles/PersonPreviewCard.css";

function PersonPreviewCard({profilePic, name, description}) {
  return(
    <Card className="person-preview-card">
      <img src={profilePic} alt="hi"/>
      <div className="person-preview-card-name">
        {name}
      </div>
      <div className="person-preview-card-content">
        {description}
      </div>
    </Card>
  );
}

export default PersonPreviewCard;