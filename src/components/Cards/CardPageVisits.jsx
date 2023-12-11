import React, { useEffect, useState } from "react";
import { MdOutlineAddCircleOutline } from "react-icons/md";
import CardPageArray from "./CardPageArra";
import { FaPen } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
import axios from "axios";

const CardPageVisits = () => {
  const [openModal, setopenModal] = useState(false);
  const toggleModal = () => {
    setopenModal(!openModal);
  };

  const [open, setOpen] = useState();
  const toggleOpen = () => {
    setOpen(!open);
  };

  const [edit, setEdit] = useState(false);
  const toggleEdit = () => {
    setEdit(!edit);
  };

  const [build, setBuild] = useState("");

  // useEffect(() => {
  const fetchBuildings = () => {
    axios({
      method: "GET",
      url: "https://smart-parking-api-3g3e.onrender.com/parking/buildings/getAllBuildingData",
      headers: {
        "Content-Type": "Application/json",
      },
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error, "error happening");
      });
  };

  fetchBuildings();
  // }, []);

  return (
    <>
      <div className="relative bottom-[30rem] md:bottom-36 flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="flex items-cemter flex-row justify-between w-full">
              <h3 className="font-semibold text-base text-blueGray-700">
                Total Buildings
              </h3>
              <div className="flex flex-row items-center text-white bg-[#0C7489] rounded px-2 sm:px-4 py-1">
                <MdOutlineAddCircleOutline className="text-2xl sm:text-4xl" />
                <button
                  onClick={toggleModal}
                  className="text-sm sm:text-lg font-bold py-2 px-1"
                  type="button"
                >
                  Add Building
                </button>
              </div>
            </div>
            {openModal && (
              <div className="absolute top-0 left-0 flex justify-center bg-[#252525]bg-opacity-10 backdrop-blur-sm p-4 w-full h-screen">
                <form className="flex flex-col lg:w-3/5  bg-white shadow-2xl  text-[.9rem] h-1/2 mt-20">
                  <h1 className="m-4 text-center font-extrabold text-[1rem] mx-2 py-2">
                    Add New Building
                  </h1>
                  <div className="flex space-x-6 mx-2 items-center font-semibold ml-10 justify-between mr-10 mt-">
                    <label>Building Id:</label>
                    <input
                      type="text"
                      placeholder="Insert Id eg: M 012 East"
                      className="p-1 mt-2 rounded border w-3/5"
                    />
                  </div>
                  <div className="flex space-x-5  mx-4 items-center font-semibold ml-10 justify-between mr-10 mt-">
                    <label>Building Name</label>
                    <input
                      type="text"
                      placeholder="Makuza Peace Plaza"
                      className="p-1 mt-2 rounded border w-3/5"
                    />
                  </div>
                  <div className="flex space-x-5  mx-4 items-center font-semibold ml-10 justify-between mr-10 mt-">
                    <label>Location</label>
                    <input
                      type="text"
                      placeholder="City Town"
                      className="p-1 mt-2 rounded border w-3/5"
                    />
                  </div>
                  <div className="flex space-x-5  mx-4 items-center font-semibold ml-10 justify-between mr-10 mt-">
                    <label>Building Manager</label>
                    <input
                      type="text"
                      placeholder="Mugisha"
                      className="p-1 mt-2 rounded border w-3/5"
                    />
                  </div>
                  <div className="flex justify-center">
                    <button
                      className="bg-[#0C7489] w-2/6 mt-4 p-1 rounded-md font-extrabold text-2xl text-white"
                      onClick={toggleModal}
                    >
                      Add
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>

        <div className="block w-full overflow-x-auto">
          {/* Projects table */}
          <table className="items-center w-full bg-transparent border-collapse">
            <thead>
              <tr>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  BuildingID
                </th>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  BuildingName
                </th>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Location
                </th>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  BuildingManager
                </th>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="cursor-pointer shadow-lg">
              {CardPageArray.map((items, idx) => {
                return (
                  <tr
                    key={idx}
                    className="hover:bg-slate-400 hover:bg-opacity-50 text-xl font-semibold"
                  >
                    <td
                      className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
                      onClick={toggleOpen}
                    >
                      {items.buildingId}
                    </td>
                    <td
                      className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
                      onClick={toggleOpen}
                    >
                      {items.buildingName}
                    </td>
                    <td
                      className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
                      onClick={toggleOpen}
                    >
                      <i className="fas fa-arrow-up text-emerald-500 mr-4"></i>
                      {items.location}
                    </td>
                    <td
                      className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
                      onClick={toggleOpen}
                    >
                      <i className="fas fa-arrow-up text-emerald-500 mr-4"></i>
                      {items.manager}
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4 flex space-x-3">
                      <i className="fas fa-arrow-up text-emerald-500 mr-4"></i>
                      <span>
                        <FaPen onClick={toggleEdit} />
                      </span>
                      <span className=" text-red-600">
                        <FaTrash />
                      </span>
                    </td>
                    {open && (
                      <div className="p-6 bg-slate-200 rounded-md shadow-xl absolute bottom-40 xl:right-[30%] lg:right-[30%] md:right-[20%] sm:right-[20%] right-[0%]">
                        <p className="mb-4 text-lg font-bold">
                          Makuza Building
                        </p>
                        <p className="mb-2">Total Slots: 400</p>
                        <p className="mb-2">Total Booked: 100</p>
                        <p className="mb-4">Total Remaining: 300</p>
                        <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 focus:outline-none focus:ring focus:border-blue-300">
                          View More Details
                        </button>
                        <button
                          className="bg-red-500 ml-10 text-white px-4 py-2 rounded-md hover:bg-orange-600 focus:outline-none focus:ring focus:border-blue-300"
                          onClick={toggleOpen}
                        >
                          Cancel
                        </button>
                      </div>
                    )}
                  </tr>
                );
              })}
            </tbody>
            {edit && (
              <div className="absolute top-0 left-0 flex justify-center bg-[#252525]bg-opacity-10 backdrop-blur-sm p-4 w-full h-screen">
                <form className="flex flex-col w-3/5 h-3/5 bg-white shadow-2xl mt-40 text-[.9rem]">
                  <h1 className="m-4 text-center font-extrabold text-[1rem] mx-2 py-2">
                    let's Update some
                  </h1>
                  <div className="flex space-x-6 mx-2 items-center font-semibold ml-10 justify-between mr-10 mt-">
                    <label>Building Id:</label>
                    <input
                      type="text"
                      placeholder="Insert Id eg: M 012 East"
                      className="p-1 mt-2 rounded border w-3/5"
                    />
                  </div>
                  <div className="flex space-x-5  mx-4 items-center font-semibold ml-10 justify-between mr-10 mt-">
                    <label>Building Name</label>
                    <input
                      type="text"
                      placeholder="Makuza Peace Plaza"
                      className="p-1 mt-2 rounded border w-3/5"
                    />
                  </div>
                  <div className="flex space-x-5  mx-4 items-center font-semibold ml-10 justify-between mr-10 mt-">
                    <label>Location</label>
                    <input
                      type="text"
                      placeholder="City Town"
                      className="p-1 mt-2 rounded border w-3/5"
                    />
                  </div>
                  <div className="flex space-x-5  mx-4 items-center font-semibold ml-10 justify-between mr-10 mt-">
                    <label>Building Manager</label>
                    <input
                      type="text"
                      placeholder="Mugisha"
                      className="p-1 mt-2 rounded border w-3/5"
                    />
                  </div>
                  <div className="flex justify-center">
                    <button
                      className="bg-[#0C7489] w-2/6 mt-4 p-1 rounded-md font-extrabold text-2xl text-white"
                      onClick={toggleEdit}
                    >
                      Update
                    </button>
                  </div>
                </form>
              </div>
            )}
          </table>
        </div>
      </div>
    </>
  );
};
export default CardPageVisits;
