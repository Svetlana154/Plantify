import ContactUs from "../ContactUs";
import DescriptorBlock from "../DescriptorBlock";
import Hero from "../Hero";
import ProductLinkSection from "../ProductLinkSection";
import TeamPreview from "../TeamPreview";
import Tutorial from "../Tutorial";
import {useNavigate} from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const handleGoToProducts = () => {
    navigate("/OurProducts");
  }

  return (
    <div>
      <Hero />
      <DescriptorBlock />
      <ProductLinkSection handleGoToProducts={handleGoToProducts}/>
      <TeamPreview />
      <Tutorial handleGoToProducts={handleGoToProducts}/>
      <ContactUs />
    </div>
  );
}

export default Home;