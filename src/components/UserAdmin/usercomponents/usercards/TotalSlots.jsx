/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { FaCirclePlus } from "react-icons/fa6";
import axios from "axios";
import { RiDeleteBin7Fill } from "react-icons/ri";
import { RiEditFill } from "react-icons/ri";
import { toast, ToastContainer } from "react-toastify";
import { Link, Navigate, useParams } from "react-router-dom";
import { IoCloseSharp } from "react-icons/io5";

const TotalSlots = ({ color }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [openModal, setOpenModal] = useState();
  const [slots, setSlots] = useState([]);
  const [parkingName, setParkingName] = useState("");
  const [Amount, setAmount] = useState("");
  const { id } = useParams();
  const [floors, setFloors] = useState([]);
  const toggleModal = () => {
    setOpenModal(!openModal);
  };

  let token = localStorage.getItem("token");

  const getFloors = ()=>{
    axios({
      url: `https://smart-parking-api-3g3e.onrender.com/parking/floor/getFloors/`,
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((response) => {
      setFloors(response.data.floors);
    });
  };
  
  useEffect(()=>{
    getFloors();
  })

  const fetchSlots = () => {
    let token = localStorage.getItem("token");
    console.log("Token:", token);
    axios({
      url: `https://smart-parking-api-3g3e.onrender.com/parking/slots/getAllSlots/${id}`,
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        console.log("data", response.data.slots);
        setSlots(response.data.slots);
        console.log(slots, "slooooots");
      })
      .catch((error) => {
        console.error("Error fetching slots:", error);
      });
  };

  useEffect(() => {
    fetchSlots();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
                {slots.map((item, idx)=>{
                  return(
                    <div key={idx}>
                      <FaCirclePlus className="text-4xl font-bold" />
                <Link to={`/managerDashboard/addslots/${item._id}`}>
                <button className="text-lg font-semibold">
                  Add Slot
                </button>
                </Link>
                    </div>
                  )
                })}
                
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white text-black block w-full overflow-x-auto">
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
                  Slot Name
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
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {slots && Array.isArray(slots) && slots.map((floor, floorIdx) => (
                floor.slots.map((item, slotIdx) => (
                  <tr key={slotIdx}>
                    <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                      <span
                        className={`ml-0 font-bold ${color === "light" ? "text-blueGray-600" : "text-black"
                          }`}
                      >
                        {item.Slot}
                      </span>
                    </th>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      {`${item.Price} Rwf`}
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      <div className="flex items-center">
                        <span className="mr-2">{item.status}</span>
                      </div>
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      <button>{item.floorName}</button>
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 space-x-2 border-r-0 text-xs whitespace-nowrap p-4">
                      <button>
                        <RiEditFill className="text-green-700 text-xl" />
                      </button>
                      <button>
                        <RiDeleteBin7Fill className="text-red-700 text-xl" />
                      </button>
                    </td>
                  </tr>
                )))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
export default TotalSlots;
