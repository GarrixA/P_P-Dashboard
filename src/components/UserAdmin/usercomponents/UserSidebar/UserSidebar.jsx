import React, { useState } from "react";
import { Link } from "react-router-dom";
import park from "./prof.png";
import { LuLayoutDashboard } from "react-icons/lu";
import { BsBuildingsFill } from "react-icons/bs";
import { MdLogout } from "react-icons/md";
import { LuParkingCircle } from "react-icons/lu";
import { FiMenu } from "react-icons/fi";
import BulidingFloor from "./BulidingFloor";
import { IoNotifications } from "react-icons/io5";
import images from "../../../Dropdowns/UserDropdownArray";
import "../../../../index.css";

export default function Sidebar() {
  const [collapseShow, setCollapseShow] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [openNotification, setOpenNotification] = useState("");

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("../../../../../");
  };
  const toggleNotification = () => {
    setOpenNotification(!openNotification);
  };

  const toggleModal = () => {
    setOpenModal(!openModal);
    console.log("clicked");
  };
  return (
    <>
      <nav className=" w-full md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto  md:overflow-hidden shadow-xl bg-white relative md:w-64 z-10">
        <div className=" flex sm:flex-col">
          <div className="flex items-center w-full text-[1rem] uppercase m-4 space-x-2 font-extrabold">
            <img src={park} className="w-[12%] md:w-1/4 rounded-full" />
            <h1 className="w-full flex-">Mugisha</h1>
            <span>
              <IoNotifications
                onClick={toggleNotification}
                className="cursor-pointer text-black md:hidden inline-block text-[2rem] sm:text-[3rem] sm:absolute mr-10 sm:left-[75%] sm:bottom-8 w-10 sm:w-12"
              />
            </span>
            <FiMenu
              className="cursor-pointer md:hidden inline-block text-[3rem] sm:absolute sm:left-[90%]"
              onClick={toggleModal}
            />
          </div>
          <div
            className={
              "md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded " +
              collapseShow
            }
          >
            <hr className="md:min-w-full sm:flex hidden" />

            <ul className="hidden md:flex  md:flex-col md:min-w-full flex-col list-none ml-4 p-4">
              <li className="items-center flex hover:bg-gray-100 ml-1">
                <LuLayoutDashboard className="text-[1rem]" />
                <Link
                  className={" py-3  block text-[1rem]"}
                  to="/managerDashboard/stats"
                >
                  <i className={"fas fa-tv mr-2 text-sm"}></i>
                  Dashboard
                </Link>
              </li>

              {/* <li className="items-center flex">
                <LuParkingCircle className="text-[1rem]"/>
                <Link
                  className={
                    "py-3 block text-[1rem]"
                  }
                  to="/managerDashboard/floors"
                >
                  <i
                    className={
                      "fas fa-tools mr-2 "
                    }
                  ></i>{""}
                  Floors
                </Link>
              </li> */}

              <li className="items-center flex">
                <BulidingFloor />
              </li>

              {/* <li className="items-center flex">
                <LuParkingCircle className="text-[1rem]"/>
                <Link
                  className={
                    "py-3 block text-[1rem]"
                  }
                  to="/managerDashboard/slots"
                >
                  <i
                    className={
                      "fas fa-tools mr-2 "
                    }
                  ></i>{" "}
                  Total Slots
                </Link>
              </li> */}

              <li className="items-center flex hover:bg-gray-100">
                <MdLogout className="text-[1rem]" />
                <Link className={"uppercase py-3 ml-2 mr-2 block "} to="/">
                  <button onClick={handleLogout} className="text-[1rem]">
                    Logout
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {openModal && (
          <div
            id="modal-bg"
            className="bg-white absolute w-full h-[148vh] z-30 border-t-2"
          >
            <ul
              id="modal-content"
              className="m-12 z-10 top-[11.2rem] w-full h-full flex flex-col md:hidden"
            >
              <li className="items-center flex hover:bg-gray-100 ml-1">
                <LuLayoutDashboard className="text-[1rem]" />
                <Link
                  className={" py-3  block text-[1rem]"}
                  to="/managerDashboard/stats"
                >
                  <i className={"fas fa-tv mr-2 text-sm"}></i>
                  Dashboard
                </Link>
              </li>

              {/* <li className="items-center flex">
            <LuParkingCircle className="text-[1rem]"/>
            <Link
              className={
                "py-3 block text-[1rem]"
              }
              to="/managerDashboard/floors"
            >
              <i
                className={
                  "fas fa-tools mr-2 "
                }
              ></i>{""}
              Floors
            </Link>
          </li> */}

              <li className="items-center flex">
                <BulidingFloor />
              </li>

              {/* <li className="items-center flex">
            <LuParkingCircle className="text-[1rem]"/>
            <Link
              className={
                "py-3 block text-[1rem]"
              }
              to="/managerDashboard/slots"
            >
              <i
                className={
                  "fas fa-tools mr-2 "
                }
              ></i>{" "}
              Total Slots
            </Link>
          </li> */}

              <li className="items-center flex hover:bg-gray-100">
                <MdLogout className="text-[1rem]" />
                <Link className={"uppercase py-3 ml-2 mr-2 block "} to="/">
                  <button onClick={handleLogout} className="text-[1rem]">
                    Logout
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        )}
        {openNotification && (
          <div className=" md:hidden absolute bg-white top-[4rem] sm:top-[5.2rem] flex rounded-lg overflow-hidden right-10 sm:right-[7.8rem] w-[14rem] sm:w-[17rem] shadow-md">
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
      </nav>
    </>
  );
}
