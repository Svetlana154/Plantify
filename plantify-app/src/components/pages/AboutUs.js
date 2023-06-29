import GoalBlock from "../GoalBlock";
import ServicesCarousel from "../ServicesCarousel";
import Team from "../Team";
import Location from "../Location";

function AboutUs() {
  return (
    <div classname="goal-block">
      <GoalBlock />
      <Team />
      <ServicesCarousel />
      <Location />
    </div>
  );
}

export default AboutUs;