import React, { useState } from "react";
import { createPopper } from "@popperjs/core";
import Team from "../../userassets/img/team-1-800x800.jpg";
import { IoNotifications } from "react-icons/io5";
import images from "../../../Dropdowns/UserDropdownArray";

const UserDropdown = () => {
  const [collapseShow, setCollapseShow] = useState(false);
  const [menu, setMenu] = useState(false);
  const [menuModal, setmenuModal] = useState(false);
  const [openNotification, setOpenNotification] = useState("");

  const toggleNotification = () => {
    setOpenNotification(! openNotification);
  };

  return (
    <>
      <div className="items-center flex text-white text-4xl justify-evenly bg-slate-400 w-full rounded-md py-1 bg-opacity-40 shadow-md">
        <span>
          <IoNotifications onClick={toggleNotification} />
        </span>
        <span className="w-12 h-12 text-sm text-white bg-blueGray-200 inline-flex items-center justify-center rounded-full">
          <img
            alt="..."
            className="w-full rounded-full align-middle border-none shadow-lg"
            src={Team}
          />
        </span>
      </div>
      <div>
        {openNotification && (
          <div className=" hidden absolute bg-white top-[4rem] sm:top-[5.2rem] md:flex flex-col rounded-lg overflow-hidden right-10 sm:right-[7.8rem] w-[14rem] sm:w-[17rem] shadow-md">
            <div className="w-full">
              <h1 className="text-white text-[1.4rem] py-2 sm:text-[1rem] text-center bg-slate-500">
                Notification
              </h1>

              {images.map((item, idx) => {
                return (
                  <div
                    key={idx}
                    className="flex flex-row gap-[.4em] items-center mt-2 border-b-slate-400 border-b-[0.063rem] "
                  >
                    <div className="rounded-full overflow-hidden m-1">
                      <span>{item.icon}</span>
                    </div>

                    <div className="text-[]#252525 flex flex-col space-y-2">
                      <span className="text-[1rem] leading-[0.625rem] text-[#252525]">
                        {item.title}
                      </span>
                      <span className="text-[.70rem] leading-[0.625em] text-[#252525]">
                        {item.description}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default UserDropdown;
