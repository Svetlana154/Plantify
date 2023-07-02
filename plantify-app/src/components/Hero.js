import "../styles/Hero.css";

function Hero() {

  const scrollDown = () => {
    var scrollDiv = document.getElementById("home-descriptor-block").offsetTop;
    window.scrollTo({ top: scrollDiv-100, behavior: 'smooth'});
  };

  return (
    <div className="hero">
      <div className="hero-title title-white-with-shadow">
        <h1>Plantify your space for a fresher look</h1>
      </div>
      <div className="hero-description">
          <span>
            We take pride in the volume and quality of plants that we offer. Whatever your desired plant may be - tall or short, rare or common - we got you covered!  
            Satisfy all of your planting needs right here today!
          </span>
          <div className="cto hero-cto">
            <button className="btn btn-outline-light" onClick={scrollDown}>Get Started</button>
          </div>
        </div>
    </div>
  );
}

export default Hero;