import { useNavigate } from "react-router-dom";
import * as Icon from "@phosphor-icons/react";
import Breadcrumbs from "../Tools/Breadcrumbs";
import HeaderUser from "../Tools/HeaderUser";
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
      <div className="flex justify-between max-sm:flex-col-reverse gap-[15px] ">
        <div className="flex justify-center items-center text-costum-blue">
          <span className="mr-4">
            <Icon.Chalkboard />
          </span>
          <Breadcrumbs className="max-sm:text-xs text-[21px]" />
        </div>
        <HeaderUser />
      </div>
      {/* Other content related to System Access */}

      {/* Logout button */}
      <div>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
}

SystemAccess.propTypes = {
  onLogout: PropTypes.func.isRequired,
};

export default SystemAccess;
