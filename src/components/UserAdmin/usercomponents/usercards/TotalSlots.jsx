import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { FaCirclePlus } from "react-icons/fa6";
import SlotsArray from "./SlotsArray";
import axios from "axios";

export default function TotalSlots({ color }) {
  const [openModal, setOpenModal] = useState(false);

  const toogleModal = () => {
    setOpenModal(!openModal);
  };

  const fetchSlots = ()=>{
    axios({
      method: "GET",
      url: 'https://smart-parking-api-3g3e.onrender.com/parking/parkings/getTotalParking',
      headers: {
        "content-type": "application/json",
    }
    })
    .then((response)=>{
      console.log(response)
    })
    .catch((error)=>{
      console.log(error);
    })
  }

  useEffect(()=>{
    fetchSlots();
  }, [])

  return (
    <>
      <div
        className={
          "relative bottom-32 flex flex-col min-w-0 break-words w-full mb-6 shadow-xl rounded " +
          (color === "light" ? "bg-white" : "bg-lightBlue-900 text-white")
        }
      >
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full max-w-full flex flex-grow items-center flex-1 justify-between">
              <h3
                className={
                  "font-semibold text-lg " +
                  (color === "light" ? "text-blueGray-700" : "text-white")
                }
              >
                Total Slots
              </h3>
              <div className="bg-[#0C7489] flex items-center gap-2 rounded text-white px-4 py-2 shadow-2xl">
                <FaCirclePlus className="text-4xl font-bold" />
                <button className="text-lg font-semibold" onClick={toogleModal}>
                  Add Slot
                </button>
              </div>
            </div>
            {openModal && (
              <div className="absolute top-0 left-0 flex justify-center bg-[#252525]bg-opacity-10 backdrop-blur-sm p-4 w-full h-screen">
                <form className="flex flex-col w-1/2 h-2/5 bg-white shadow-2xl mt-40 ">
                  <h1 className="m-4 text-center font-extrabold text-3xl mx-2 py-2">
                    Add New Slot
                  </h1>
                  <div className="flex space-x-6 mx-2 items-center font-semibold ml-10">
                    <label>Park Id:</label>
                    <input
                      type="text"
                      placeholder="Insert Id eg: M 012 East"
                      className="p-1 mt-2 rounded border w-3/5"
                    />
                  </div>
                  <div className="flex space-x-5  mx-4 items-center font-semibold ml-10">
                    <label>Price/Hr</label>
                    <input
                      type="number"
                      placeholder="Insert price eg:1200"
                      className="p-1 mt-2 rounded border w-3/5"
                    />
                  </div>

                  <button
                    className="bg-[#0C7489] w-2/6 mx-24 mt-4 p-1 rounded-md ml-36 font-extrabold text-2xl text-white"
                    onClick={toogleModal}
                  >
                    Add
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
        <div className="block w-full overflow-x-auto">
          <table className="items-center w-full bg-transparent border-collapse">
            <thead>
              <tr>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  Parking Id
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  Price/hr
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  Latest booked
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {SlotsArray.map((slot, idx) => {
                return (
                  <tr key={idx}>
                    <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                      <span
                        className={
                          "ml-0 font-bold " +
                          +(color === "light"
                            ? "text-blueGray-600"
                            : "text-white")
                        }
                      >
                        {slot.parkId}
                      </span>
                    </th>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      {`${slot.price} Rwf`}
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      <div className="flex items-center">
                        <span className="mr-2">{slot.booked}</span>
                      </div>
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      <button>{slot.status}</button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

TotalSlots.defaultProps = {
  color: "light",
};

TotalSlots.propTypes = {
  color: PropTypes.oneOf(["light", "dark"]),
};
