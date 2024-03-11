import { Link } from "react-router-dom";
import * as Icon from "@phosphor-icons/react";

import Userprofile from "../../assets/react.svg";

export default function HeaderUser() {
  return (
    <>
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
            src={Userprofile}
            className="border-costum-blue border-4 rounded-full p-1 w-16 h-16"
          />
          <div className="">
            <Link
              to="settings/systemaccess"
              className="flex items-center gap-1"
            >
              <span className="text-xs">Settings</span>
              <Icon.Gear size={18} />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
