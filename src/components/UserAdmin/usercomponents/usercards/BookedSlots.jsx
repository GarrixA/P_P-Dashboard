/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import PropTypes from "prop-types";
// eslint-disable-next-line no-unused-vars
import { FaCirclePlus } from "react-icons/fa6";
import SlotsArray from "./SlotsArray";


export default function BookedSlots({ color }) {
  const [openModal, setOpenModal] = useState(false);

  const toogleModal = ()=>{
    setOpenModal(!openModal);
  }

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
                Booked Slots
              </h3>
              
            </div>
            
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
              {
                SlotsArray.map((slot, idx)=>{
                  return <tr key={idx}>
                            <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                              
                              <span
                                className={
                                  "ml-0 font-bold " +
                                  +(color === "light" ? "text-blueGray-600" : "text-white")
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
                              <button>
                                {slot.status}
                              </button>

                            </td>
                          </tr> 
                })
              }
                   
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

BookedSlots.defaultProps = {
  color: "light",
};

BookedSlots.propTypes = {
  color: PropTypes.oneOf(["light", "dark"]),
};
