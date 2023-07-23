import "../styles/GoalBlock.css";
import Container from "react-bootstrap/esm/Container"

function GoalBlock({title, description}) {
    return(
        <section className="goal-block" aria-description='This section described the goals and aspirations of Platify'>
            <Container>
                <h1 className="title-white-with-shadow goal-title">
                    {title}
                </h1>
                <h2 className="title-white-with-shadow goal-description">
                    {description}
                </h2>
            </Container>
        </section>
    );
}

export default GoalBlock;