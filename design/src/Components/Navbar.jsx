import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FaUserCircle } from "react-icons/fa";
import { useState, useEffect } from "react";

function Navbar({ isLoggedIn, userName, onLogout }) {
  const navigate = useNavigate();

  const [showProfile, setShowProfile] = useState(false);

  const user = JSON.parse(localStorage.getItem("currentUser"));

  // CLOSE MODAL ON OUTSIDE CLICK
  useEffect(() => {
    const closeProfile = () => {
      setShowProfile(false);
    };

    window.addEventListener("click", closeProfile);

    return () => {
      window.removeEventListener("click", closeProfile);
    };
  }, []);

  // LOGOUT
  const handleonLogout = () => {
    toast.success("Logout Successfully!");

    onLogout();

    setTimeout(() => {
      navigate("/login");
    }, 2000);
  };

  return (
    <section className="nav-bar">
      <div className="container">
        <div className="nav">
          <h1 className="logo">whitepace</h1>

          <ul className="chak-lo">
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/resources">Resources</Link>
            </li>

            <li>
              <Link to="/pricing">Pricing</Link>
            </li>

            <li>
              <Link to="/solutions">Solutions</Link>
            </li>

            <li>
              <Link to="/demands">Demands</Link>
            </li>
          </ul>

          <div className="buttons">
            {isLoggedIn ? (
              <>
                {/* USER PROFILE */}
                <div
                  className="user-profile"
                  onClick={(e) => {
                    e.stopPropagation();

                    setShowProfile(!showProfile);
                  }}
                >
                  <FaUserCircle className="user-icon" />

                  <span className="user-name">{userName}</span>
                </div>

                {/* PROFILE MODAL */}
                {showProfile && (
                  <div
                    className="profile-modal"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div className="profile-header">
                      <FaUserCircle className="modal-icon" />

                      <div>
                        <h3>{user?.name}</h3>

                        <p>{user?.email}</p>
                      </div>
                    </div>

                    <button
                      className="profile-logout-btn"
                      onClick={handleonLogout}
                    >
                      Logout
                    </button>
                  </div>
                )}
              </>
            ) : (
              <>
                <Link to="/login" className="btn-1">
                  Login
                </Link>

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










