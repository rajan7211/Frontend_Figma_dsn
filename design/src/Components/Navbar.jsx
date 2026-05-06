import "./Navbar.css";

function Navbar() {
  return (
    <section className="nav-bar">
      <div className="container">
        <div className="nav">
          <h1 className="logo">whitepace</h1>

          <ul className="chak-lo">
            <li>Resources</li>
            <li>Pricing</li>
            <li>Solutions</li>
            <li>Demands</li>
          </ul>

          <div className="buttons">
            <button className="btn-1">Login</button>
            <button className="btn-2">Try Free</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Navbar;








