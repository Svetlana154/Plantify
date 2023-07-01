import ContactUs from "../ContactUs";
import DescriptorBlock from "../DescriptorBlock";
import Hero from "../Hero";
import ProductLinkSection from "../ProductLinkSection";
import RecoveryPasswordModal from "../RecoveryPasswordModal";
import TeamPreview from "../TeamPreview";
import Tutorial from "../Tutorial";

function Home() {
  var signalRecoveryPasswordModal = false;

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