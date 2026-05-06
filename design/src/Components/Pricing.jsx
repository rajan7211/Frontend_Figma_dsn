import "./Pricing.css";

function Pricing() {
  return (
    <div className="pricing-section">
      <div className="container">
        <h1 className="tittle">Choose Your Plan</h1>
        <p className="subtittle">
          Whether you want to get organized, keep your personal life on track,
          or boost workplace productivity, Evernote has the right plan for you.
        </p>

        <div className="cards">
          <div className="card">
            <h3>Free</h3>
            <h1>$0</h1>
            <p>Capture ideas and find them quickly</p>

            <ul>
              <li>✔ Sync unlimited devices</li>
              <li>✔ Sync unlimited devices</li>
              <li>✔ Sync unlimited devices</li>
              <li>✔ Sync unlimited devices</li>
              <li>✔ Sync unlimited devices</li>
              <li>✔ Sync unlimited devices</li>
            </ul>

            <button className="bttn">Get Started</button>
          </div>

          <div className="card-active">
            <h3>Personal</h3>
            <h1>$11.99</h1>
            <p>keep home and family on track</p>
            <ul>
              <li>✔ 10 GB monthly uploads</li>
              <li>✔ 10 GB monthly uploads</li>
              <li>✔ 10 GB monthly uploads</li>
              <li>✔ 10 GB monthly uploads</li>
              <li>✔ 10 GB monthly uploads</li>
              <li>✔ 10 GB monthly uploads</li>
            </ul>
            <button className="bttn-outlet">Get Started</button>
          </div>

          <div className="card">
            <h3>Organisation</h3>
            <h1>$49.99</h1>
            <p>Capture ideas and find them quickly</p>
            <ul>
              <li>✔ Customize dashboard</li>
              <li>✔ Customize dashboard</li>
              <li>✔ Customize dashboard</li>
              <li>✔ Customize dashboard</li>
              <li>✔ Customize dashboard</li>
              <li>✔ Customize dashboard</li>
            </ul>
            <button className="bttn">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
