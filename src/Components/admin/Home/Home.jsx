import * as Icon from "@phosphor-icons/react";
import * as FIcon from "feather-icons-react";
import Breadcrumbs from "../../Tools/Breadcrumbs";
import HeaderUser from "../../Tools/HeaderUser";

function Home() {
  // In your component's styles
  const containerStyles = {
    overflowY: "auto",
    scrollbarColor: "#2B388C transparent", // Specify your desired color for the scrollbar
    scrollbarWidth: "thin",
    WebkitScrollbarTrack: {
      borderRadius: "10px", // Adjust the border-radius to your preference
    },
    WebkitScrollbarThumb: {
      background: "#2B388C", // Specify your desired color for the scrollbar thumb
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
          <div className="flex justify-center items-center text-costum-blue">
            <span className="mr-4">
              <Icon.Chalkboard />
            </span>
            <Breadcrumbs className="max-sm:text-xs text-[21px]" />
          </div>
          <HeaderUser />
        </div>

        {/* body */}
        <div
          className="flex w-[1980] mt-2 gap-7 p-3 mb- overflow-x-auto"
          style={containerStyles}
        >
          <div
            className="w-[260px] rounded-2xl"
            style={{
              boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.5)",
            }}
          >
            <div className="flex py-[15px] text-white bg-costum-blue rounded-t-2xl items-center justify-center gap-4">
              <Icon.Person size={16} />
              <span className="text-[16px]">Personal Request</span>
            </div>
            <div className="flex justify-center items-center px-4 w-[260px] h-[395px] rounded-b-2xl bg-white">
              <div className="">
                <a className="flex w-full p-2 justify-center items-center gap-2 cursor-pointer text-costum-blue border-b border-costum-blue">
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

              <span></span>
              <span></span>
            </div>
          </div>

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

            <div className="flex justify-center w-[260px] items-center  h-[395px] rounded-b-2xl bg-white">
              <div className="h-[150px] w-[180px] bg-slate-900"></div>
            </div>
          </div>

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
            <div className="flex justify-center w-[462px] items-center h-[395px] rounded-b-2xl bg-white">
              <div className="h-[150px] w-[180px] bg-slate-900"></div>
            </div>
          </div>

          <div className="flex flex-col gap-4 w-[260px] ">
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
    </>
  );
}

export default Home;
