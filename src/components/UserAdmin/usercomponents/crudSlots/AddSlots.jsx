/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import axios from "axios";
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ToastContainer } from "react-toastify";

const AddSlots = () => {

  const [Slot, setSlot] = useState("");
  const [Price, setPrice] = useState("");
  const navigate = useNavigate()
  const {id} = useParams();

  const formData = new FormData();
  formData.append("Slot", Slot);
  formData.append("Price", Price);

  let token = localStorage.getItem("token");
  console.log(token);

  const handleForm = (e) => {
    if (e) {
      e.preventDefault();
    }

    axios({
      method: "POST",
      url: `https://smart-parking-api-3g3e.onrender.com/parking/slots/addNewSlot/${id}`,
      data: formData,
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        console.log(response, "response")
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    handleForm();
  }, []);

    return (
        <>
            <div className="absolute top-0 left-0 flex justify-center bg-[#252525]bg-opacity-10 backdrop-blur-sm p-4 w-full h-screen">
                <form className="flex flex-col w-1/2 h-2/5 bg-white shadow-2xl mt-40 ">
                    <h1 className="m-4 text-center font-extrabold text-3xl mx-2 py-2 text-black">
                        <span> Add New Slots</span>
                    </h1>
                    <div className="flex space-x-5 mx-4 items-center font-semibold text-black ml-10">
                        <label>Slot name:</label>
                        <input
                            type="text"
                            placeholder="Insert Id eg: M 012 East"
                            className="p-1 mt-2 rounded border w-3/5"
                            value={Slot}
                            onChange={(e) => setSlot(e.target.value)}
                        />
                    </div>
                    <div className="flex space-x-5 mx-4 items-center font-semibold text-black ml-10">
                        <label>Price/Hr</label>
                        <input
                            type="text"
                            placeholder="Insert price eg:1200"
                            className="p-1 mt-2 rounded border w-3/5"
                            value={Price}
                            onChange={(e) => setPrice(e.target.value)}
                        />
                    </div>

                    <button
                        className="bg-[#0C7489] w-2/6 mx-24 mt-4 p-1 rounded-md ml-36 font-extrabold text-2xl text-white"
                        >
                        Add
                    </button>
                    <ToastContainer />
                </form>
            </div>
        </>
    )
}

export default AddSlots