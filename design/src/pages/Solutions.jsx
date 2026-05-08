import { Link } from "react-router-dom";
import "./index2.css"

function Solutions() {
  return (
    <div className="solutions-page">
      <div className="back-button">
        <Link to="/" className="back-btn">
          ← Back to Home
        </Link>
      </div>

      <h1>Solutions Page</h1>
    </div>
  );
}

export default Solutions;





