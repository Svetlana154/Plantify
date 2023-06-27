import "../styles/DescriptorBlock.css";
import StepCard from "./StepCard";
import { fa1, fa2, fa3 } from "@fortawesome/free-solid-svg-icons";

function DescriptorBlock() {
  return (
    <div className="descriptor-block">
        <StepCard
            icon={fa1}
            text="Donec erat turpis, aliquet vel lacinia in, suscipit vel ante. Fusce eros risus, porttitor vitae lorem sit amet."
        />
        <StepCard 
            icon={fa2}
            text="Donec erat turpis, aliquet vel lacinia in, suscipit vel ante. Fusce eros risus, porttitor vitae lorem sit amet."
        />
        <StepCard 
            icon={fa3}
            text="Donec erat turpis, aliquet vel lacinia in, suscipit vel ante. Fusce eros risus, porttitor vitae lorem sit amet."
        />
    </div>
  );
}

export default DescriptorBlock;