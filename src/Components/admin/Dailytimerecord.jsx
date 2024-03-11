import Breadcrumbs from "../Tools/Breadcrumbs";
import Calendar from "../Tools/Calendar/Calendar";
import * as Icon from "@phosphor-icons/react";

import HeaderUser from "../Tools/HeaderUser";

function Dailytimerecord() {
  return (
    <>
      <div className="flex justify-between max-sm:flex-col-reverse gap-[15px] ">
        <div className="flex justify-center items-center text-costum-blue">
          <span className="mr-4">
            <Icon.Calendar size={24} />
          </span>
          <Breadcrumbs className="max-sm:text-xs text-[21px]" />
        </div>
        <HeaderUser />
      </div>

      <Calendar />
    </>
  );
}

export default Dailytimerecord;
