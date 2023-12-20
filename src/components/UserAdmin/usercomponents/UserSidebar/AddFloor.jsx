/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import axios from "axios";
import { useEffect, useState } from "react";
import { BiSolidBuildingHouse } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

export default function AddFloor() {
  const [floor, setFloor] = useState("");
  const [Price, setPrice] = useState("");
  const navigate = useNavigate()

  const formData = new FormData();
  formData.append("Name", floor);
  formData.append("Price", Price);

  let token = localStorage.getItem("token");
  console.log(token);

  const handleForm = (e) => {
    if (e) {
      e.preventDefault();
    }

    axios({
      method: "POST",
      url: "https://smart-parking-api-3g3e.onrender.com/parking/floor/addnewfloor",
      data: formData,
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        console.log(res.data, "response");
        alert("Floor added");
        navigate("/managerDashboard/addfloor")
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
      <div className="absolute top-24 left-0 flex justify-center bg-[#252525]bg-opacity-10 backdrop-blur-sm p-4 w-full h-screen">
        <div className="bg-white h-1/2 w-1/3 flex flex-col m-2 shadow-lg rounded-xl overflow-hidden mt-10">
          <h1 className="bg-slate-500 text-center py-5 text-white font-bold text-2xl">Add Floor</h1>
          <form className="flex flex-col px-2 text-black bg-white h-full ml-4 mr-16" onSubmit={handleForm}>
            <label className="mt-4">Floor Name</label>
            <input
              className="p-1 rounded border border-slate-400 mt-1"
              onChange={(e) => setFloor(e.target.value)}
              value={floor}
              type="text"
              placeholder="eg: Ground floor"
            />
            <label className="mt-4">Price</label>
            <input
              className="p-1 rounded border border-slate-400 mt-1"
              onChange={(e) => setPrice(e.target.value)}
              value={Price}
              type="number"
              placeholder="eg: 15"
            />
            <button type="submit" className="mt-4 bg-[#0C7489] rounded-xl text-xl font-bold text-white py-1">Add</button>
          </form>
        </div>
      </div>
    </>
  );
}
