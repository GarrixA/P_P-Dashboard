import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useParams } from "react-router-dom";


const EditBuilding = () => {

    const param = useParams();
    const BuildingId = param.id;
    
//   const [id, setBuildingid] = useState("");
  const [buildingName, setBuildingName] = useState("");
  const [District, setDistrict] = useState("");
  const [Sector, setSector] = useState("");
  const [Street, setStreet] = useState("");
  const [Longitude, setLongitude] = useState("");
  const [Latitude, setLatitude] = useState("");
  const [Price, setPrice] = useState("");
  const [profilePicture, setProfilePicture] = useState(null);
  const [Floors, setFloors] = useState("");
  const [Description, setDescription] = useState("");
  const [managerEmail, setManagerEmail] = useState("");

  
  const updateBuilding = async () => {
    const token = localStorage.getItem("token");
    console.log(buildingName);
    const formData = new FormData();
    formData.append("buildingName", buildingName);
    formData.append("Address", location); // Check if location is defined somewhere
    formData.append("District", District);
    formData.append("Sector", Sector);
    formData.append("Street", Street);
    formData.append("Longitude", Longitude);
    formData.append("Latitude", Latitude);
    formData.append("Price", Price);
    formData.append("profilePicture", profilePicture);
    formData.append("Floors", Floors);
    formData.append("Description", Description);
    formData.append("managerEmail", managerEmail);

    try {
     
          const response = await axios({
            method: "PUT",
            url: `https://smart-parking-api-3g3e.onrender.com/parking/buildings/updateBuilding/${BuildingId}`,
            data: formData,
            headers: {
              "Content-Type": "multipart/form-data",
              Authorization: `Bearer ${token}`,
            },
          });

      toast.success(response.data.message);
    } catch (error) {
      console.error(error);

      if (error.response) {
        toast.error(`Error: ${error.response.data.message}`);
      } else if (error.request) {
        toast.error("No response received from the server");
      } else {
        toast.error("Something went wrong");
      }
    }

  };

  return (
    <div className="absolute top-0 left-0 flex justify-center bg-[#252525]bg-opacity-10 backdrop-blur-sm p-10 w-full h-screen" style={{marginTop: '7rem'}}>
      <form className="flex flex-col w-3/5 h-3/15 bg-white shadow-2xl mt-42 text-[.9rem]">
        <h1 className="m-4 text-center font-extrabold text-[1rem] mx-2 py-2">
          Let's Update some
        </h1>

        <div className="flex space-x-5 mx-4 items-center font-semibold ml-10 justify-between mr-10 mt-">
          <label>Building Name</label>
          <input
            type="text"
            placeholder="Makuza Peace Plaza"
            className="p-1 mt-2 rounded border w-3/5"
            value={buildingName}
            onChange={(e) => setBuildingName(e.target.value)}
          />
        </div>

        <div className="flex space-x-5 mx-4 items-center font-semibold ml-10 justify-between mr-10 mt-">
          <label>District</label>
          <input
            type="text"
            name="required"
            placeholder="District"
            className="p-1 mt-2 rounded border w-3/5"
            value={District}
            onChange={(e) => setDistrict(e.target.value)}
          />
        </div>

        <div className="flex space-x-5 mx-4 items-center font-semibold ml-10 justify-between mr-10 mt-">
          <label>Sector</label>
          <input
            type="text"
            name="required"
            placeholder="Sector"
            className="p-1 mt-2 rounded border w-3/5"
            value={Sector}
            onChange={(e) => setSector(e.target.value)}
          />
        </div>

        <div className="flex space-x-5  mx-4 items-center font-semibold ml-10 justify-between mr-10 mt-">
          <label>Street</label>
          <input
            type="text"
            name="required"
            placeholder="street"
            className="p-1 mt-2 rounded border w-3/5"
            value={Street}
            onChange={(e) => setStreet(e.target.value)}
          />
        </div>

        <div className="flex space-x-5  mx-4 items-center font-semibold ml-10 justify-between mr-10 mt-">
          <label>Longitude</label>
          <input
            type="text"
            placeholder="longitude"
            className="p-1 mt-2 rounded border w-3/5"
            value={Longitude}
            onChange={(e) => setLongitude(e.target.value)}
          />
        </div>

        <div className="flex space-x-5  mx-4 items-center font-semibold ml-10 justify-between mr-10 mt-">
          <label>Latitude</label>
          <input
            type="text"
            placeholder="latitude"
            className="p-1 mt-2 rounded border w-3/5"
            value={Latitude}
            onChange={(e) => setLatitude(e.target.value)}
          />
        </div>

        <div className="flex space-x-5  mx-4 items-center font-semibold ml-10 justify-between mr-10 mt-">
          <label>Price</label>
          <input
            type="number"
            placeholder="price"
            className="p-1 mt-2 rounded border w-3/5"
            value={Price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>

        <div className="flex space-x-5  mx-4 items-center font-semibold ml-10 justify-between mr-10 mt-">
          <label>profilePicture</label>
          <input
            type="file"
            onChange={(e) => setProfilePicture(e.target.files[0])}
            className="p-1 mt-2 rounded border w-3/5"
          />
        </div>

        <div className="flex space-x-5  mx-4 items-center font-semibold ml-10 justify-between mr-10 mt-">
          <label>Floors</label>
          <input
            type="text"
            placeholder="floors"
            className="p-1 mt-2 rounded border w-3/5"
            value={Floors}
            onChange={(e) => setFloors(e.target.value)}
          />
        </div>

        <div className="flex space-x-5  mx-4 items-center font-semibold ml-10 justify-between mr-10 mt-">
          <label>Description</label>
          <input
            type="text"
            placeholder="description"
            className="p-1 mt-2 rounded border w-3/5"
            value={Description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div className="flex space-x-5  mx-4 items-center font-semibold ml-10 justify-between mr-10 mt-">
          <label>Building Manager</label>
          <input
            type="text"
            placeholder="Mugisha"
            className="p-1 mt-2 rounded border w-3/5"
            value={managerEmail}
            onChange={(e) => setManagerEmail(e.target.value)}
          />
        </div>

        {/* Add more form inputs based on your requirements */}

        <div className="flex justify-center">
          <button
            className="bg-[#0C7489] w-2/6 mt-4 p-1 rounded-md font-extrabold text-2xl text-white"
            onClick={async (e) => {
              e.preventDefault();
              await updateBuilding();
            }}
          >
            Update
          </button>
          <ToastContainer />
        </div>
      </form>
    </div>
  );
};

export default EditBuilding;
