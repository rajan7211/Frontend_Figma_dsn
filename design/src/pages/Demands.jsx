import { Link } from "react-router-dom";
import "./index2.css"

function Demands() {
  return (
    <div className="demands-page">
      <div className="back-button">
        <Link to="/" className="back-btn">
          ← Back to Home
        </Link>
      </div>

      <h1>Demands Page</h1>
    </div>
  );
}

export default Demands;





