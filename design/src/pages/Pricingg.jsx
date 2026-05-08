import { Link } from "react-router-dom";
import "./index2.css"

function Pricingg() {
  return (
    <div className="pricing-page">
      <div className="back-button">
        <Link to="/" className="back-btn">
          ← Back to Home
        </Link>
      </div>
      <h1>Pricing Page</h1>
    </div>
  );
}

export default Pricingg;


