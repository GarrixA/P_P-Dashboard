import React, { useState } from "react";
import { Link } from "react-router-dom";
import park from "./prof.png";
import { LuLayoutDashboard } from "react-icons/lu";
import { BsBuildingsFill } from "react-icons/bs";
import { MdLogout } from "react-icons/md";

export default function Sidebar() {
  const [collapseShow, setCollapseShow] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const toggleCollapse = () => {
    setCollapseShow(!collapseShow);
  };
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("../../../../../");
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };
  return (
    <>
      <nav className="w-full sm:fixed md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto  md:overflow-hidden shadow-xl bg-white relative md:w-64 z-10">
        <div className="flex sm:flex-col">
          <div className="flex items-center w-full text-[1rem] uppercase m-4 space-x-2 font-extrabold">
            <img src={park} className="w-1/4 rounded-full" />
            <h1 className="w-full flex-">Admin</h1>
          </div>
          <div
            className={
              "md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded " +
              collapseShow
            }
          >
            <hr className=" md:min-w-full" />

            <ul className="md:flex-col md:min-w-full flex flex-col list-none ml-4 p-4">
              <li className="items-center flex">
                <LuLayoutDashboard className="text-[1rem]" />
                <Link
                  className={" py-3  block text-[1rem]"}
                  to="/dashboard/stats"
                >
                  <i className={"fas fa-tv mr-2 text-sm"}></i>
                  Dashboard
                </Link>
              </li>

              <li className="items-center flex">
                <BsBuildingsFill className="text-[1rem]" />
                <Link
                  className={"py-3 block text-[1rem]"}
                  to="/dashboard/settings"
                >
                  <i className={"fas fa-tools mr-2 "}></i> Buildings
                </Link>
              </li>

              

              <li className="items-center flex">
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
      </nav>
    </>
  );
}
