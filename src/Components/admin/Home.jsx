import { Chalkboard } from "@phosphor-icons/react";
import Userporofile from "../../assets/react.svg";
import { Gear, Person, Clock } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="">
        <div className="flex justify-between max-sm:flex-col-reverse gap-[15px] ">
          <div className="flex items-center text-costum-blue">
            <span className="mr-4">
              <Chalkboard />
            </span>
            <span className="max-sm:text-xs text-[21px]">Admin Dashboard</span>
          </div>
          <div className="flex gap-2 items-center justify-between">
            <div className="flex flex-col bg-costum-blue w-[155px] h-24 rounded-xl gap-1 pr-4 py-4 text-right justify-end items-end">
              <span className="text-sm text-white">Sol Cabreza</span>
              <span className="text-xs/[8px] text-center rounded-xl  py-1 px-2 bg-orange-400 text-white">
                Iconiqlast
              </span>
              <span className="text-xs/[8px] text-center rounded-xl py-1 px-2 bg-white text-costum-blue">
                Frontend Developer
              </span>
            </div>
            <div className="flex flex-col gap-2 p-2">
              <img
                src={Userporofile}
                className="border-costum-blue border-4 rounded-full p-1 w-16 h-16"
              />
              <div className="">
                <Link
                  to="settings/systemaccess"
                  className="flex items-center gap-1"
                >
                  <span className="text-xs">Settings</span>
                  <Gear size={18} />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* body */}
        <div className="flex h-[480px] mt-2 gap-7 p-3">
          <div
            className="w-[260px] rounded-2xl"
            style={{
              boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.5)",
            }}
          >
            <div className="flex py-[15px] text-white bg-costum-blue rounded-t-2xl items-center justify-center gap-4">
              <Person size={16} />
              <span className="text-[16px]">Personal Request</span>
            </div>
            <div className="flex justify-center w-[260px] items-center h-[395px] rounded-b-2xl  drop-shadow-xl shadow-gray-900 bg-white">
              <div className="h-[150px] w-[180px] bg-slate-900"></div>
            </div>
          </div>

          <div
            className="w-[260px] rounded-2xl"
            style={{
              boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.5)",
            }}
          >
            <div className="flex py-[15px] text-white bg-costum-blue rounded-t-2xl items-center justify-center gap-4">
              <Clock size={16} />
              <span className="text-[16px]">Daily Time Record</span>
            </div>

            <div className="flex justify-center w-[260px] items-center  h-[395px] rounded-b-2xl  drop-shadow-xl shadow-gray-900 bg-white">
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
              <Clock size={16} />
              <span className="text-[16px]">Employee Lookup</span>
            </div>
            <div className="flex justify-center w-[462px] items-center h-[395px] rounded-b-2xl  drop-shadow-xl shadow-gray-900 bg-white">
              <div className="h-[150px] w-[180px] bg-slate-900"></div>
            </div>
          </div>

          <div className="flex flex-col gap-4 w-[260px] ">
            <div
              className="h-[270px] flex py-[15px] text-white bg-white rounded-2xl items-center justify-center"
              style={{
                boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.5)",
              }}
            ></div>
            <div
              className="h-[210px] flex py-[15px] text-white bg-white rounded-2xl items-center justify-center"
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
