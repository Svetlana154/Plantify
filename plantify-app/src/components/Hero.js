import "../styles/Hero.css";


function Hero() {
  return (
    <div className="hero">
      <div className="hero-title">
        <h1>Lorem ipsum dolor sit amet.</h1>
      </div>
      <div className="hero-description">
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vehicula nunc lectus, nec egestas augue finibus et. Integer eleifend bibendum elit, in porta risus sodales at. Cras ac enim vitae nisl mollis convallis. Nulla facilisi. Aliquam mattis euismod tristique. Nam turpis ligula, hendrerit nec risus vel, maximus placerat turpis.
          </span>
          <div className="cto hero-cto">
            <button className="btn btn-outline-light">Get Started</button>
          </div>
        </div>
    </div>
  );
}

export default Hero;