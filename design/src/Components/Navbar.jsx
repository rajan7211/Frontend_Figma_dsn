import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar({ isLoggedIn, userName, onLogout }) {
  return (
    <section className="nav-bar">
      <div className="container">
        <div className="nav">
          <h1 className="logo">whitepace</h1>

          <ul className="chak-lo">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/resources">Resources</Link></li>
            <li><Link to="/pricing">Pricing</Link></li>
            <li><Link to="/solutions">Solutions</Link></li>
            <li><Link to="/demands">Demands</Link></li>
          </ul>
          
          <div className="buttons">
            {isLoggedIn ? (
              <>
                <span className="user-name">{userName}</span>
                <button className="btn-1" onClick={onLogout}>Logout</button>
              </>
            ) : (
              <>
                <Link to="/login" className="btn-1">Login</Link>
                <button className="btn-2">Try Free</button>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Navbar;






