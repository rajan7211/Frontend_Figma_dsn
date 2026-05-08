import { Link } from "react-router-dom";


function Resources() {
  return (
    <div className="resources-page">
      <div className="back-button">
        <Link to="/" className="back-btn">
          ← Back to Home
        </Link>
      </div>
      <h1>Welcome to Resources Page</h1>
    </div>
  );
}

export default Resources;



