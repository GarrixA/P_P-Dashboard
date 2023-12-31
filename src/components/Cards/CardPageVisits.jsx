import React, { useState, useEffect } from "react";
import { MdOutlineAddCircleOutline } from "react-icons/md";
import CardPageArray from "./CardPageArra";
import { FaPen } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";
import { CirclesWithBar } from "react-loader-spinner";


import "react-toastify/dist/ReactToastify.css";

import axios from "axios";
import Editbuilding from "./Editbuilding";

const CardPageVisits = () => {
  const [buildings, setBuildings] = useState([]);
  const [loading, setLoading] = useState (false)

  const [id, setBuildingId] = useState("");
  const [buildingName, setBuildingName] = useState("");
  const [District, setDistrict] = useState("");
  const [Sector, setSector] = useState("");
  const [Street, setStreet] = useState("");
  const [Longitude, setLongitude] = useState("");
  const [Latitude, setLatitude] = useState("");

  const [profiPicture, setProfilePictue] = useState();

  const [Description, setDescription] = useState("");
  const [managerEmail, setManagerEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

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
    setIsLoading(true)
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
      setIsLoading(false)

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
  
    formData.append("profilePicture", profiPicture);
 
    formData.append("Description", Description);
    formData.append("managerEmail", managerEmail);

    try {
      setLoading(true)
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
       setLoading (false);
      console.error(error);

      if (error.response) {
        toast.error(`Error: ${error.response.data.message}`);
        setLoading(false)
      } else if (error.request) {
        toast.error("No response received from the server");
        setLoading(false);
      } else {
        toast.error("Something went wrong");
        setLoading(false);
      }
    } finally {
       setLoading(false)
    }
  };

  //fetch addnew building is ended from here//

  // update building //

    
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

  const [pageNumber, setPageNumber] = useState(0);
  const buildingsPerPage = 8;
  const pageCount = Math.ceil(buildings.length / buildingsPerPage);
  const pagesVisited = pageNumber * buildingsPerPage;
  const displaybuildings = buildings
    .slice(pagesVisited, pagesVisited + buildingsPerPage)
    .map((items, idx) => {
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
                          <Link to={`/dashboard/Editbuilding/${items._id}`}>
                            <FaPen />
                          </Link>
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
                        })
                        const changePage=({ selected })=>{
                          setPageNumber(selected)
                        };

  return (
    <>
       {isLoading ? (
      <CirclesWithBar
  height="300"
  width="1000"
  radius="9"
  color="#0C7489 "
  ariaLabel="loading"
  className="mx-auto absolute top-0 right-0 mb-100"
/>

      ) : (
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
                    <label>profilePicture</label>
                    <input
                      type="file"
                      onChange={(e) => setProfilePictue(e.target.files[0])}
                      className="p-1 mt-2 rounded border w-3/5"
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
                     {loading?"adding..":"add"}
                    </button >

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
             {displaybuildings}
            </tbody>
           
          </table>
        </div>
        
      </div>
      <div className=" relative bottom-32">
      <ReactPaginate
  previousLabel="Previous"
  nextLabel="Next"
  pageCount={pageCount}
  onPageChange={changePage}
  containerClassName="flex items-center justify-center my-4"
  previousLinkClassName="px-4 py-2 bg-blue-500 text-white-700 rounded-md mr-2"
  nextLinkClassName="px-4 py-2 bg-blue-500 text-white-700 rounded-md ml-2"
  pageClassName="flex items-center justify-center mx-2"
  activeClassName="bg-blue-500 w-4 text-white rounded-full"
/>
      </div>

      </>
      )}
      </>
  );
};
export default CardPageVisits;