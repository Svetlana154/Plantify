import Container  from "react-bootstrap/esm/Container";
import "../styles/DescriptorBlock.css";
import StepCard from "./StepCard";
import { fa1, fa2, fa3 } from "@fortawesome/free-solid-svg-icons";

function DescriptorBlock() {
  return (
    <Container className="descriptor-block" id="home-descriptor-block">
        <StepCard
            icon={fa1}
            text="What kind of plant are you looking for? Pick your desired category and explore the options we have to offer!"
        />
        <StepCard 
            icon={fa2}
            text="Found your plant? Order it through our quick-and-easy checkout process and pick it up at our location or get it shipped to yours!"
        />
        <StepCard 
            icon={fa3}
            text="Are you buying for someone else? Gift options with messages and packaging options are available at the checkout step!"
        />
    </Container>
  );
}

export default DescriptorBlock;