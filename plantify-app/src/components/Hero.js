import "../styles/Hero.css";


function Hero() {
  return (
    <div className="hero row">
      <div className="col g-0">
        <div className="hero-title">
          <h1>Lorem ipsum dolor sit amet, consectetur adipiscing.</h1>
          <div className="hero-description">
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing.Lorem ipsum dolor sit amet, consectetur adipiscing.
              Lorem ipsum dolor sit amet, consectetur adipiscing.
              </span>
            <div className="cto">
              <button className="btn btn-outline-dark">Get Started</button>
            </div>
          </div>
        </div>
      </div>
      <div className="col-7 g-0 hero-image-col">
      </div>
    </div>
  );
}

export default Hero;