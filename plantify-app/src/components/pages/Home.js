import DescriptorBlock from "../DescriptorBlock";
import Hero from "../Hero";
import ProductLinkSection from "../ProductLinkSection";
import TeamPreview from "../TeamPreview";

function Home() {
  return (
    <div>
      <Hero />
      <DescriptorBlock />
      <ProductLinkSection />
      <TeamPreview />
      <div id="contactUs">
        <p>This is a contact us section</p>
      </div>
    </div>
  );
}

export default Home;