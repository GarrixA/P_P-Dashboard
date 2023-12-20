/* eslint-disable no-undef */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { BiSolidBuildingHouse } from "react-icons/bi";
import { Link } from "react-router-dom";
import { RiDeleteBin7Fill } from "react-icons/ri";
import { RiEditFill } from "react-icons/ri";
import { FaCirclePlus } from "react-icons/fa6";

const AllFloors = () => {

  const [floor, setFloor] = useState([]);

  // console.log(floor);
  const fetchFloors = () => {
    let token = localStorage.getItem("token");
    axios({
      url: `https://smart-parking-api-3g3e.onrender.com/parking/floor/getFloors/`,
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((response) => {
      setFloor(response.data.floors);
    });
  };
  useEffect(() => {
    fetchFloors();
  }, []);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      let token = localStorage.getItem("token")
      axios({
        url: `https://smart-parking-api-3g3e.onrender.com/parking/floor/deletefloor/${id}`,
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`
        },
      }).then((response) => {
        console.log(response, "Response")
      }).catch((error) => {
        console.log(error)
      })
    }
  }

  return (
    <div
      className={
        "relative bottom-32 flex flex-col min-w-0 break-words w-full mb-6 shadow-xl rounded "
      }
    >
      <div className="rounded-t mb-0 px-4 py-3 border-0">
        <div className="flex flex-wrap items-center">
          <div className="relative w-full max-w-full flex flex-grow items-center flex-1 justify-between">
            <h3 className={"font-semibold text-lg text-white"}>Floors</h3>
            <Link to={"/managerDashboard/addfloor"}>
              <div className="bg-[#0C7489] flex items-center gap-2 rounded text-white px-4 py-2 shadow-2xl">
                <FaCirclePlus className="text-4xl font-bold" />
                <button className="text-lg font-semibold">
                  Add Floor
                </button>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-white text-black block w-full overflow-x-auto">
        <table className="items-center w-full bg-transparent border-collapse">
          <thead>
            <tr className="flex justify-between">
              <th
                className={
                  "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0  whitespace-nowrap font-semibold text-left "
                }
              >
                Floor Name
              </th>
              <th
                className={
                  "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left "
                }
              >
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {floor.map((items, idx) => {
              return (
                <tr key={idx} className="flex justify-between border shadow">
                  <th className="border-t-0px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                    <span className={"ml-0 font-bold "}>{items.Name}</span>
                  </th>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 flex justify-between whitespace-nowrap p-4">
                    <button>
                     <Link to={`/managerDashboard/editFloor/${items._id}`}><RiEditFill className="text-red-400" /></Link>
                    </button>
                    <button>
                      <RiDeleteBin7Fill className="text-black" onClick={(()=> handleDelete(items._id))}/>
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllFloors;
