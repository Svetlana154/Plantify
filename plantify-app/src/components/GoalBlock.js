import "../styles/GoalBlock.css";
import Container from "react-bootstrap/esm/Container"

function GoalBlock() {
    return(
        <div className="goal-block">
            <Container>
                <h1 className="title-white-with-shadow goal-title">
                    Our Purpose
                </h1>
                <h2 className="title-white-with-shadow goal-description">
                    Spread our passion for gardening by providing the topmost quality of plants and a large selection of options.
                </h2>
            </Container>
        </div>
    );
}

export default GoalBlock;