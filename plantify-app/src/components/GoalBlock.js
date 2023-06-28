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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vehicula nunc lectus, nec egestas augue finibus et. Integer eleifend bibendum elit, in porta risus sodales at. 
                </h2>
            </Container>
        </div>
    );
}

export default GoalBlock;