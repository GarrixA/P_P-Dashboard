/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
// eslint-disable-next-line no-unused-vars
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export const EditFloor = () => {
    const navigate = useNavigate("");
    const {id} = useParams();

    const [floorName, setFloorName] = useState("");
    const [price, setPrice] = useState("");

    const fetchFloors = ()=>{
        let token = localStorage.getItem("token")

        axios({
            method: "GET",
           url: `https://smart-parking-api-3g3e.onrender.com/parking/floor/getFloors/`,
           headers: {
            Authorization: `Bearer ${token}`
           } 
        })
        .then((response)=>{
            console.log(response)
        })
        .catch((error)=>{
            console.log(error)
        })
    }
    useEffect(()=>{
        fetchFloors();
    }, [])


    return (
        <div className="absolute top-24 left-0 flex justify-center bg-[#252525]bg-opacity-10 backdrop-blur-sm p-4 w-full h-screen">
        <div className="bg-white h-1/2 w-1/3 flex flex-col m-2 shadow-lg rounded-xl overflow-hidden mt-10">
          <h1 className="bg-slate-500 text-center py-5 text-white font-bold text-2xl">Add Floor</h1>
          <form className="flex flex-col px-2 text-black bg-white h-full ml-4 mr-16">
            <label className="mt-4">Floor Name</label>
            <input
              className="p-1 rounded border border-slate-400 mt-1"
              onChange={(e) => setFloorName(e.target.value)}
              value={floorName}
              type="text"
              placeholder="eg: Ground floor"
            />
            <label className="mt-4">Price</label>
            <input
              className="p-1 rounded border border-slate-400 mt-1"
              onChange={(e) => setPrice(e.target.value)}
              value={price}
              type="number"
              placeholder="eg: 15"
            />
            <button type="submit" className="mt-4 bg-[#0C7489] rounded-xl text-xl font-bold text-white py-1">Update</button>
          </form>
        </div>
      </div>
    )
}
