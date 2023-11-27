import React from "react";
import { createPopper } from "@popperjs/core";
import Team from "../../userassets/img/team-1-800x800.jpg";
import { IoNotifications } from "react-icons/io5";


const UserDropdown = () => {
  return (
    <>
        <div className="items-center flex text-white text-4xl justify-evenly bg-slate-400 w-full rounded-md py-1 bg-opacity-40 shadow-md">
          <span><IoNotifications /></span>
          <span className="w-12 h-12 text-sm text-white bg-blueGray-200 inline-flex items-center justify-center rounded-full">
            <img
              alt="..."
              className="w-full rounded-full align-middle border-none shadow-lg"
              src={Team}
            />
          </span>
        </div>
      <div>
        
      </div>
    </>
  );
};

export default UserDropdown;
