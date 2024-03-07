import { Chalkboard } from "@phosphor-icons/react";
import Userporofile from "../../assets/react.svg";
import { Gear } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="flex justify-between ">
        <div className="flex items-center text-costum-blue">
          <span className="mr-4">
            <Chalkboard />
          </span>
          <span>Admin Dashboard</span>
        </div>
        <div className="flex gap-2">
          <div className="flex flex-col bg-costum-blue w-17 h-24 rounded-xl gap-1 pl-20 pr-4 py-4 text-right justify-end items-end">
            <span className="text-sm text-white">Sol Cabreza</span>
            <span className="text-xs text-center rounded-xl w-16 py.5 bg-orange-400 text-white">
              Iconiqlast
            </span>
            <span className="text-xs text-center rounded-xl py-1 px-2 bg-white text-costum-blue">
              Frontend Developer
            </span>
          </div>
          <div className="flex flex-col gap-2">
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
      <div className="flex justify-between">
        <div className=" ">
          <div className="flex">
            <span>Personal Request</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
