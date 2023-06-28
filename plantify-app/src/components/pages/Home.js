import ContactUs from "../ContactUs";
import DescriptorBlock from "../DescriptorBlock";
import Hero from "../Hero";
import ProductLinkSection from "../ProductLinkSection";
import TeamPreview from "../TeamPreview";
import Tutorial from "../Tutorial";

function Home() {
  return (
    <div>
      <Hero />
      <DescriptorBlock />
      <ProductLinkSection />
      <TeamPreview />
      <Tutorial />
      <ContactUs />
    </div>
  );
}

export default Home;