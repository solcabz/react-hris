import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

// Destructuring the onLogout prop within the function parameters
function Home({ onLogout }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear the user information (replace with your actual logic)
    onLogout();

    navigate("/");
  };

  return (
    <>
      <h1>Home</h1>
      <button onClick={handleLogout}>Logout</button>
    </>
  );
}

Home.propTypes = {
  onLogout: PropTypes.func.isRequired,
};

export default Home;
