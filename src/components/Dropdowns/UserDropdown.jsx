import React, { useState } from "react";
import Team from "../../assets/img/team-1-800x800.jpg";
import { IoNotifications } from "react-icons/io5";
import images from "./UserDropdownArray";

const UserDropdown = () => {
  const [openModal, setOpenModal] = useState(false);
  const toggleModal = () => {
    setOpenModal(!openModal);
  };
  return (
    <>
      <div className="items-center flex text-white text-4xl justify-evenly bg-slate-400 w-full rounded-md py-1 bg-opacity-40 shadow-md">
        <span>
          <IoNotifications onClick={toggleModal} className="cursor-pointer" />
        </span>
        <span className="w-12 h-12 text-sm text-white bg-blueGray-200 inline-flex items-center justify-center rounded-full">
          <img
            alt="..."
            className="w-full rounded-full align-middle border-none shadow-lg"
            src={Team}
          />
        </span>
        {openModal && (
          <div className="absolute bg-white top-[4.3rem] flex rounded-lg overflow-hidden right-[3.5rem] w-[17rem] shadow-md">
            <div className="w-full">
              <h1 className="text-white text-[1rem] text-center bg-slate-500">Notification</h1>

              {images.map((item, idx) => {
                return (
                  <div key={idx} className="flex flex-row gap-[.4em] items-center mt-2 border-b-slate-400 border-b-[0.063rem] ">
                    <div className="w-[3rem] h-[3rem] overflow-hidden rounded-full m-1">
                      <img src={item.image} alt="img" />
                    </div>

                    <div className="text-[]#252525 flex flex-col space-y-2">
                      <span className="text-[1rem] leading-[0.625rem] text-[#252525]">{item.title}</span>
                      <span className="text-[.70rem] leading-[0.625em] text-[#252525]">{item.description}</span>

                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
      <div></div>
    </>
  );
};

export default UserDropdown;
