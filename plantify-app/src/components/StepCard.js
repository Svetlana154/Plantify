import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/StepCard.css";

function StepCard({icon, text}) {
    return (
        <div className="step-card">
            <FontAwesomeIcon icon={icon} size="2x" className="icon-number"/>
            <div className="step-card-text">{text}</div>
        </div>
    );
}

export default StepCard;