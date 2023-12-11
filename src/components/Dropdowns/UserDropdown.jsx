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
          <IoNotifications onClick={toggleModal} className="pointer" />
        </span>
        <span className="w-12 h-12 text-sm text-white bg-blueGray-200 inline-flex items-center justify-center rounded-full">
          <img
            alt="..."
            className="w-full rounded-full align-middle border-none shadow-lg"
            src={Team}
          />
        </span>
        {openModal && (
          <div style={{
            display: "flex",
            // position: "absolute",
            backgroundColor: "white",
            // top: "4rem",
            // marginTop: "0.5px",
            // width: "20rem",
            // right: "2.5rem",
            // borderRadius: "0.375"
          }} >
            <div style={{
              backgroundColor:"white"
              
              }}>
              <h1 style={{
                color: '#252525',
                fontSize: ''
              }}>Notification</h1>

              {images.map((item, idx) => {
                return (
                  <div key={idx} style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "20px"
                    }} className="flex flex-row gap-[1.25em] rounded-r-md overflow-hidden">
                    <div className="w-[2rem] h-[2rem] overflow-hidden rounded-full">
                      <img src={item.image} alt="img" />
                    </div>

                    <div className="text-[]#252525 flex flex-col">
                      <span className="text-[.70rem] leading-[0.625rem] text-[#252525]">{item.title}</span>
                      <span style={{ background: "blue", fontSize:"10px",lineHeight: "10px"}} className="text-[0625rem] leading[.625rem] text-[#252525]">{item.description}</span>

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
