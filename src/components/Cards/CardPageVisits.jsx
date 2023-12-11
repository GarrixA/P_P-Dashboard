import React, { useState, useEffect } from "react";
import { MdOutlineAddCircleOutline } from "react-icons/md";
import CardPageArray from "./CardPageArra";
import { FaPen } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import axios from "axios";

const CardPageVisits = () => {
  const [buildings, setBuildings] = useState([]);

  const [id, setBuildingId] = useState("");
  const [buildingName, setBuildingName] = useState("");
  const [District, setDistrict] = useState("");
  const [Sector, setSector] = useState("");
  const [Street, setStreet] = useState("");
  const [Longitude, setLongitude] = useState("");
  const [Latitude, setLatitude] = useState("");
  const [Price, setPrice] = useState("");
  const [profiPicture, setProfilePictue] = useState();
  const [Floors, setFloors] = useState();
  const [Description, setDescription] = useState("");

  const [managerEmail, setManagerEmail] = useState("");

  // properties of inputs building//

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

  //fetch building//

  const fetchBuildings = () => {
    let token = localStorage.getItem("token");
    // console.log("Token:", token);
    console.log(token);

    axios({
      url: "https://smart-parking-api-3g3e.onrender.com/parking/buildings/getAllBuildingData",
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((response) => {
      console.log(response.data.allBuildings);

      if (response.data) {
        toast.success(response.data.message);
        setBuildings(response.data.allBuildings);
      } else {
        console.error("Unexpected response format:", response);
      }
    });
  };
  useEffect(() => {
    fetchBuildings();
  }, []);

  // fetch building is ended from here//

  // Addbuilding //

  const Addnewbuilging = async () => {
    let token = localStorage.getItem("token");
  
    // Create a FormData object to handle file upload
    const formData = new FormData();
    formData.append("buildingName", buildingName);
    formData.append("Address", location);
    formData.append("District", District);
    formData.append("Sector", Sector);
    formData.append("Street", Street);
    formData.append("Longitude", Longitude);
    formData.append("Latitude", Latitude);
    formData.append("Price", Price);
    formData.append("profilePicture", profiPicture);
    formData.append("Floors", Floors);
    formData.append("Description", Description);
    formData.append("managerEmail", managerEmail);

    try {
      const response = await axios.post(
        "https://smart-parking-api-3g3e.onrender.com/parking/buildings/addNewBuilding",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

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

  //fetch addnew building is ended from here//

  // Editing building //

    const EditBuildings = async (id,allBuildings
) => {
      try {
        let token = localStorage.getItem("token");
         
          if (!buildingData) {
      throw new Error("Building data is missing");
    }



        const formData = new FormData();

           formData.append("buildingName", buildingName);
           formData.append("Address", location);
           formData.append("District", District);
           formData.append("Sector", Sector);
           formData.append("Street", Street);
           formData.append("Longitude", Longitude);
           formData.append("Latitude", Latitude);
           formData.append("Price", Price);
           formData.append("profilePicture", profiPicture);
           formData.append("Floors", Floors);
           formData.append("Description", Description);
           formData.append("managerEmail", managerEmail);


        const response = await axios.post(
          `https:/smart-parking-api-3g3e.onrender.com/parking/buildings/updateBuilding/${id}`,
          formData,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "multipart/form-data", // Set content type for FormData
            },
          }
        );

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


  //deleting building

  const handleDeleteBuildings = async (id) => {
    if (window.confirm("Are you sure you want to delete this building?")) {
      let token = localStorage.getItem("token");
      axios({
        url: `https://smart-parking-api-3g3e.onrender.com/parking/buildings/deleteBuilding/${id}`,
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => {
          toast.success("Building deleted successfully");
          console.log(response, "Response");
        })
        .catch((error) => {
          toast.error(error.response.data.message);
          console.log(error, "Error");
        });
    }
  };

  return (
    <>
      <div className="relative bottom-36 flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="flex items-cemter flex-row justify-between w-full">
              <h3 className="font-semibold text-base text-blueGray-700">
                Total Buildings
              </h3>
              <div className="flex flex-row items-center text-white bg-[#0C7489] rounded px-4 py-1">
                <MdOutlineAddCircleOutline className="text-4xl" />
                <button
                  onClick={toggleModal}
                  className="text-lg font-bold py-2 px-1"
                  type="button"
                >
                  Add Building
                </button>
              </div>
            </div>
            {openModal && (
              <div className="absolute top-0 left-0 flex justify-center bg-[#252525]bg-opacity-10 backdrop-blur-sm p-4 w-full h-screen">
                <form className="flex flex-col w-3/5 h-3/15 bg-white shadow-2xl mt-42 text-[.9rem]">
                  <h1 className="m-4 text-center font-extrabold text-[1rem] mx-2 py-2">
                    Add New Building
                  </h1>

                  <div className="flex space-x-5  mx-4 items-center font-semibold ml-10 justify-between mr-10 mt-">
                    <label>Building Name</label>
                    <input
                      type="text"
                      placeholder="Makuza Peace Plaza"
                      className="p-1 mt-2 rounded border w-3/5"
                      value={buildingName}
                      onChange={(e) => setBuildingName(e.target.value)}
                    />
                  </div>

                  <div className="flex space-x-5  mx-4 items-center font-semibold ml-10 justify-between mr-10 mt-">
                    <label>District</label>
                    <input
                      type="text"
                      name="required"
                      placeholder="district"
                      className="p-1 mt-2 rounded border w-3/5"
                      value={District}
                      onChange={(e) => setDistrict(e.target.value)}
                    />
                  </div>

                  <div className="flex space-x-5  mx-4 items-center font-semibold ml-10 justify-between mr-10 mt-">
                    <label>Sector</label>
                    <input
                      type="text"
                      name="required"
                      placeholder="sector"
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
                      onChange={(e) => setProfilePictue(e.target.files[0])}
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
                  <div className="flex justify-center">
                    <button
                      className="bg-[#0C7489] w-2/6 mt-4 p-1 rounded-md font-extrabold text-2xl text-white"
                      onClick={async (e) => {
                        e.preventDefault();
                        await Addnewbuilging();
                      }}
                    >
                      Add
                    </button>
                    <ToastContainer />
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
        {open && (
          <div className="p-6 bg-slate-200 rounded-md shadow-xl absolute bottom-40 right-80">
            <p className="mb-4 text-lg font-bold">Makuza Building</p>
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
                  Street
                </th>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  managerEmail
                </th>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="cursor-pointer shadow-lg">
              {buildings &&
                buildings.map((items, idx) => {
                  return (
                    <tr
                      key={idx + 1}
                      className="hover:bg-slate-400 hover:bg-opacity-50 text-xl font-semibold"
                    >
                      {/*
                      
                          
                       */}

                      <td
                        className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
                        onClick={toggleOpen}
                      >
                        {idx}
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
                        {items.Street}
                      </td>
                      <td
                        className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
                        onClick={toggleOpen}
                      >
                        <i className="fas fa-arrow-up text-emerald-500 mr-4"></i>
                        {items.managerEmail}
                      </td>
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4 flex space-x-3">
                        <i className="fas fa-arrow-up text-emerald-500 mr-4"></i>
                        <span>
                        <FaPen onClick={toggleEdit} id={items._id} />
                        </span>
                        <span className=" text-red-600">
                          <FaTrash
                            onClick={() => handleDeleteBuildings(items._id)}
                          />
                          <ToastContainer />
                        </span>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
            {edit && (
              <div className="absolute top-0 left-0 flex justify-center bg-[#252525]bg-opacity-10 backdrop-blur-sm p-4 w-full h-screen">
                <form className="flex flex-col w-3/5 h-3/15 bg-white shadow-2xl mt-42 text-[.9rem]">
                  <h1 className="m-4 text-center font-extrabold text-[1rem] mx-2 py-2">
                    let's Update some
                  </h1>
                  {/* <div className="flex space-x-6 mx-2 items-center font-semibold ml-10 justify-between mr-10 mt-">
                    <label>Building Id:</label>
                    <input
                      type="text"
                      placeholder="Insert Id eg: M 012 East"
                      className="p-1 mt-2 rounded border w-3/5"
                      value={id}
                      onChange={(e) => setBuildingId(e.target.value)}
                    />
                  </div> */}
                  <div className="flex space-x-5  mx-4 items-center font-semibold ml-10 justify-between mr-10 mt-">
                    <label>Building Name</label>
                    <input
                      type="text"
                      placeholder="Makuza Peace Plaza"
                      className="p-1 mt-2 rounded border w-3/5"
                      value={buildingName}
                      onChange={(e) => setBuildingName(e.target.value)}
                    />
                  </div>

                  <div className="flex space-x-5  mx-4 items-center font-semibold ml-10 justify-between mr-10 mt-">
                    <label>District</label>
                    <input
                      type="text"
                      name="required"
                      placeholder="district"
                      className="p-1 mt-2 rounded border w-3/5"
                      value={District}
                      onChange={(e) => setDistrict(e.target.value)}
                    />
                  </div>

                  <div className="flex space-x-5  mx-4 items-center font-semibold ml-10 justify-between mr-10 mt-">
                    <label>Sector</label>
                    <input
                      type="text"
                      name="required"
                      placeholder="sector"
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
                      onChange={(e) => setProfilePictue(e.target.files[0])}
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
                    <label>managerEmail</label>
                    <input
                      type="text"
                      placeholder="Mugisha"
                      className="p-1 mt-2 rounded border w-3/5"
                      value={managerEmail}
                      onChange={(e) => setManagerEmail(e.target.value)}
                    />
                  </div>
                  <div className="flex justify-center">
                    <button
                      className="bg-[#0C7489] w-2/6 mt-4 p-1 rounded-md font-extrabold text-2xl text-white"
                      onClick={async (e) => {
                        e.preventDefault();
                        await EditBuildings();
                      }}
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
