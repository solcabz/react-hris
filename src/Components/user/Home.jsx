import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Breadcrumbs from "../Tools/Breadcrumbs";
import * as Icon from "@phosphor-icons/react";
import * as FIcon from "feather-icons-react";
import PropTypes from "prop-types";

// Destructuring the onLogout prop within the function parameters
function Home({ onLogout }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear the user information (replace with your actual logic)
    onLogout();

    navigate("/");
  };

  const containerStyles = {
    overflowY: "auto",
    scrollbarColor: "#1D75BD transparent", // Specify your desired color for the scrollbar
    scrollbarWidth: "thin",
    WebkitScrollbarTrack: {
      borderRadius: "10px", // Adjust the border-radius to your preference
    },
    WebkitScrollbarThumb: {
      background: "#1D75BD", // Specify your desired color for the scrollbar thumb
      borderRadius: "10px", // Adjust the border-radius to match the track
    },
    WebkitScrollbarButton: {
      display: "none", // Hide the arrow buttons
    },
  };

  return (
    <>
      <div className="w-full overflow-x-hidden">
        <div className="flex justify-between max-sm:flex-col-reverse gap-[15px] ">
          <div className="flex justify-center items-center text-light-blue">
            <span className="mr-4">
              <Icon.Chalkboard size={24} />
            </span>
            <Breadcrumbs className="max-sm:text-xs text-[21px] text-Light-blue hover:text-hover-active" />
          </div>
          {/* <HeaderUser /> */}
        </div>

        {/* body */}
        <div
          className="flex w-[1980] mt-2 gap-7 p-3 mb- overflow-x-auto"
          style={containerStyles}
        >
          {/* personal request */}
          <div
            className="w-[260px] rounded-2xl"
            style={{
              boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.5)",
            }}
          >
            {/* header */}
            {/* <div className="flex py-[15px] text-white bg-Light-blue rounded-t-2xl items-center justify-center gap-4">
              <Icon.Person size={16} />
              <span className="text-[16px]">Personal Request</span>
            </div> */}

            {/* bodyContext */}
            <div className="flex flex-col justify-around items-center px-4 w-[260px] h-full rounded-2xl bg-white">
              {/* 1st layer */}
              <div className=" w-[180px]">
                <a className="flex w-full p-2 justify-start items-center gap-2 cursor-pointer text-costum-blue border-b border-costum-blue">
                  <Icon.Plus className="border border-costum-blue" size={18} />
                  <span>Add Employee </span>
                </a>
                <a className="flex w-full p-2 justify-start items-center gap-2 cursor-pointer text-costum-blue  border-b border-costum-blue">
                  <FIcon.UserPlus className="" size={18} />
                  <span>My Requests </span>
                </a>
                <div className="text-[10px] flex flex-col cursor-pointer text-costum-blue font-semibold">
                  <span className="p-1">4 Applicants</span>
                  <span className="px-1">2 pending Requests</span>
                </div>
              </div>

              {/* 2nd layer */}
              <div className="p-2 ">
                <div className="flex text-[10px] cursor-pointer gap-12 justify-evenly  text-costum-blue border-b border-costum-blue">
                  <span>4 Applicants</span>
                  <span>6 Requests</span>
                </div>
                <div className="flex flex-col gap-2 w-[180px] mt-2 text-white">
                  <div className=" w-[180px]">
                    <div className="bg-blue-code h-[43px] rounded-t-lg p-2">
                      <span className="text-[12px]">Web dev</span>
                    </div>
                    <div className="bg-under-code h-[43px] rounded-b-lg p-2">
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                  <div className=" w-[180px]">
                    <div className="bg-blue-code h-[43px] rounded-t-lg p-2">
                      <span className="text-[12px]">Data Admin</span>
                    </div>
                    <div className="bg-under-code h-[43px] rounded-b-lg p-2">
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                </div>
                <div className="text-[10px] flex justify-end items-center p-2 cursor-pointer text-costum-blue hover:text-hover-active">
                  {/* <FIcon.ChevronsRight size={16} /> */}
                  <Link to={"/admin/reports/201files"}>
                    View Personal Request
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* daily time record  */}
          <div
            className="w-[260px] rounded-2xl"
            style={{
              boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.5)",
            }}
          >
            <div className="flex py-[15px] text-white bg-costum-blue rounded-t-2xl items-center justify-center gap-4">
              <Icon.Clock size={16} />
              <span className="text-[16px]">Daily Time Record</span>
            </div>

            <div className="flex flex-col justify-around w-[260px] items-center  h-[430 px] rounded-b-2xl bg-white mt-3">
              <div className="flex w-[180px] p-2 justify-center items-center gap-2 cursor-pointer text-costum-blue border-b border-costum-blue">
                <span> 4 Pending Requests</span>
              </div>
              <div className="h-[150px] w-[180px] bg-slate-900 mt-2"></div>
            </div>
          </div>

          {/* employee lookup */}
          <div
            className="w-[462px] rounded-2xl"
            style={{
              boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.5)",
            }}
          >
            <div className="flex py-[15px] text-white bg-costum-blue rounded-t-2xl items-center justify-center gap-4">
              <Icon.Clock size={16} />
              <span className="text-[16px]">Employee Lookup</span>
            </div>
            <div className="flex flex-col justify-start w-[462px] items-center h-[395px] rounded-b-2xl bg-white p-2">
              <div className="h-[150px] w-[180px] bg-slate-900"></div>
            </div>
          </div>

          {/* extras */}
          <div className="flex flex-col gap-4 w-[260px] p-2">
            <div
              className="h-[270px] w-[260px] flex py-[15px] text-white bg-white rounded-2xl items-center justify-center"
              style={{
                boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.5)",
              }}
            ></div>
            <div
              className="h-[210px] w-[260px] flex py-[15px] text-white bg-white rounded-2xl items-center justify-center"
              style={{
                boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.5)",
              }}
            ></div>
          </div>
        </div>
      </div>
      <button onClick={handleLogout}>Logout</button>
    </>
  );
}

Home.propTypes = {
  onLogout: PropTypes.func.isRequired,
};

export default Home;
