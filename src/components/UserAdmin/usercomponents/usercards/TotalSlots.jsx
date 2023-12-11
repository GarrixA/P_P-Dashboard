import React, { useEffect, useState } from "react";
import { FaCirclePlus } from "react-icons/fa6";
import axios from "axios";
import { RiDeleteBin7Fill } from "react-icons/ri";
import { RiEditFill } from "react-icons/ri";
import { toast, ToastContainer } from "react-toastify";
import { Navigate } from "react-router-dom";

const TotalSlots = ({ color }) => {
  const [totalSlots, setTotalSlots] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [openModal, setOpenModal] = useState();
  const [parkingName,setParkingName]= useState();
  const [Amount,setAmount]= useState();
  const fetchtotalSlots = () => {
    setIsLoading(true);
    let token = localStorage.getItem("token");
    console.log(token);

    axios({
      method: "GET",
      url: "https://smart-parking-api-3g3e.onrender.com/parking/parkings/getTotalParking",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        setIsLoading(false);
        setTotalSlots(response.data.data);
        console.log(response);
      })
      .catch((error) => {
        setIsLoading(false);
        console.error("Error fetching total slots:", error);
      });
  };

  useEffect(() => {
    fetchtotalSlots();
  }, []);

  const toggleModal = () => {
    setOpenModal(!openModal);
  };
  // add
  const handleSubmit = async (e) => {
    e.preventDefault();
   

    try {
      let token=localStorage.getItem("token")
      console.log(token)
      const response = await axios({
        method: "POST",
        url: 'https://smart-parking-api-3g3e.onrender.com/parking/parkings/addNewParking',
        data: {
          parkingName :parkingName ,
          Amount:Amount,


        },
        headers: {
          Authorization: `Bearer ${token}`,
        }  
    });
    console.log(response.data.data);
    setIsLoading(true);
    toast.success("slot-added-successfuly");
    Navigate(`/managerDashboard/slots`);
  } catch (error) {
    console.log(error);
    toast.error(error.message);
  }
}
// delete
  const handleDelete = async (id) => {
    console.log(handleDelete)
    if (window.confirm("Are you sure you want to delete?")) {
      let token = localStorage.getItem("token");
      axios({
      url: `https://smart-parking-api-3g3e.onrender.com/parking/parkings/deleteParkingSpot/${id}`,
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => {
          toast.success("Booking deleted successfully");
          console.log(response, "response");
          // Refresh bookings after deletion
          fetchBookings();
        })
        .catch((error) => {
          toast.error(error.response.data.message);
          console.log(error, "error");
        });
    }
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
                <button className="text-lg font-semibold" onClick={toggleModal}>
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
                  <div className="flex space-x-5 mx-4 items-center font-semibold text-black ml-10">
                    <label>Park Id:</label>
                    <input
                      type="text"
                      placeholder="Insert Id eg: M 012 East"
                      className="p-1 mt-2 rounded border w-3/5"
                      value={parkingName}
                      onChange={(e) => setParkingName(e.target.value)}
                    />
                  </div>
                  <div className="flex space-x-5 mx-4 items-center font-semibold text-black ml-10">
                    <label>Price/Hr</label>
                    <input
                      type="text"
                      placeholder="Insert price eg:1200"
                      className="p-1 mt-2 rounded border w-3/5"
                      value={Amount}
                      onChange={(e) => setAmount(e.target.value)}
                    />
                  </div>

                  <button
                    className="bg-[#0C7489] w-2/6 mx-24 mt-4 p-1 rounded-md ml-36 font-extrabold text-2xl text-white"
                    onClick={handleSubmit}
                  >
                    Add
                  </button>
                  <ToastContainer/>
                </form>
              </div>
            )}
  </div>
        </div>
        <div className="bg-white text-black block w-full overflow-x-auto">
          <table 
          className="items-center w-full bg-transparent border-collapse"
          >
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
              {totalSlots.map((item, index) => {
                return (
                  <tr key={index + 1}>
                    <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                      <span
                        className={
                          "ml-0 font-bold " +
                          +(color === "light"
                            ? "text-blueGray-600"
                            : "text-white")
                        }
                      >
                        {item.parkingName}
                      </span>
                    </th>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      {`${item.Amount} Rwf`}
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      <div className="flex items-center">
                        <span className="mr-2">{item.booked}</span>
                      </div>
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      <button>{item.status}</button>
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    <button><RiEditFill className="text-4xl w-12 h-12" /></button>
                    <button onClick={() => handleDelete(item._id)}><RiDeleteBin7Fill className="text-4xl w-12 h-12" /></button>
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
            };
export default TotalSlots;