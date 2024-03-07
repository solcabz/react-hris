import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

function SystemAccess({ onLogout }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear the user information (replace with your actual logic)
    onLogout();

    navigate("/");
  };

  return (
    <div>
      <h2>System Access</h2>
      {/* Other content related to System Access */}

      {/* Logout button */}
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

SystemAccess.propTypes = {
  onLogout: PropTypes.func.isRequired,
};

export default SystemAccess;
