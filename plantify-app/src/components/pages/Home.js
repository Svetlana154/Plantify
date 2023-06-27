import DescriptorBlock from "../DescriptorBlock";
import Hero from "../Hero";

function Home() {
  return (
    <div>
      <Hero />
      <DescriptorBlock />
      <h1>Hello, world</h1>
      <p>Homepage</p>
      <h6> A title that could be used</h6>
      <div id="contactUs">
        <p>This is a contact us section</p>
      </div>
    </div>
  );
}

export default Home;