import "../styles/GoalBlock.css";
import Container from "react-bootstrap/esm/Container"

function GoalBlock({title, description}) {
    return(
        <div className="goal-block">
            <Container>
                <h1 className="title-white-with-shadow goal-title">
                    {title}
                </h1>
                <h2 className="title-white-with-shadow goal-description">
                    {description}
                </h2>
            </Container>
        </div>
    );
}

export default GoalBlock;