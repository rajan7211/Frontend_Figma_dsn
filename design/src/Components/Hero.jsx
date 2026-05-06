import "./Hero.css";

function Hero() {
  return (
    <div className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-left">
            <h1 className="Heading">Get More Done with WhiteSpace</h1>

            <p className="Heading-2">
              Project management software that enables your teams to
              collaborate, plan, analyze and manage everyday tasks
            </p>

            <button className="buttn">Try WhiteSpace</button>
          </div>

          <div className="poster1">
            <img src="/photo1.png" alt="Image" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
