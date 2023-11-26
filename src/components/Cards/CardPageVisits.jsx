import React, { useState } from 'react';
import { MdOutlineAddCircleOutline } from "react-icons/md"

const CardPageVisits = () => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
              <h3 className="font-semibold text-base text-blueGray-700">
                Total Buildings
              </h3>
            </div>
            <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
              <button
                onClick={toggleModal}
                className="bg-[#0C7489] items-center gap flex float-right text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
              >
               <MdOutlineAddCircleOutline /> Add Building
              </button>
              { modal &&(
              
              
  <div className="fixed inset-20 z-120 overflow-auto bg-black bg-opacity-40 flex items-center justify-center">
    <div className="bg-white p-8 rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Add Building Form</h2>
      <button className="bg-[#0C7489]text-sm text-gray-500" onClick={toggleModal}>
        Close
      </button>
        <form className="mt-4">
    <div className="mb-4">
      <label htmlFor="buildingId" className="block text-sm font-medium text-gray-600">
        BuildingID
      </label>
      <input
        type="text"
        id="buildingId"
        className="mt-1 p-2 border rounded-md w-full"
        placeholder="BuildingID"
      />
    </div>
    <div className="mb-4">
      <label htmlFor="buildingName" className="block text-sm font-medium text-gray-600">
        BuildingName
      </label>
      <input
        type="text"
        id="buildingName"
        className="mt-1 p-2 border rounded-md w-full"
        placeholder="BuildingName"
      />
    </div>
    <div className="mb-4">
      <label htmlFor="location" className="block text-sm font-medium text-gray-600">
        Location
      </label>
      <input
        type="text"
        id="location"
        className="mt-1 p-2 border rounded-md w-full"
        placeholder="Location"
      />
    </div>
    <div className="mb-4">
      <label htmlFor="buildingManager" className="block text-sm font-medium text-gray-600">
        BuildingManager
      </label>
      <input
        type="text"
        id="buildingManager"
        className="mt-1 p-2 border rounded-md w-full"
        placeholder="BuildingManager"
      />
    </div>
    <button
      type="submit"
      className="bg-[#0C7489] mr-8 text-white px-4 py-2 rounded-md hover:bg-indigo-600"
    >
      ADD
    </button>
  </form>
    </div>
  </div>
              )}
</div>
              

          </div>
        </div>
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
                  Location
                </th>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  BuildingManager
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                  buildNo.1
                </th>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  Makuza
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  kigali-kacyiru
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <i className="fas fa-arrow-up text-emerald-500 mr-4"></i>
                  manager001
                </td>
              </tr>
              <tr>
                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                buildNo.1
                </th>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                chic
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                kigali-kacyiru
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <i className="fas fa-arrow-down text-orange-500 mr-4"></i>
                  manager001
                </td>
              </tr>
              <tr>
                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                buildNo.1
                </th>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  Civicom
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                kigali-kacyiru
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <i className="fas fa-arrow-down text-orange-500 mr-4"></i>
                  manager001
                </td>
              </tr>
              <tr>
                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                buildNo.1
                </th>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  City tower
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                kigali-kacyiru
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <i className="fas fa-arrow-up text-emerald-500 mr-4"></i>
                  manager001
                </td>
              </tr>
              <tr>
                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                buildNo.1
                </th>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  Raddison
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                kigali-kacyiru
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <i className="fas fa-arrow-down text-red-500 mr-4"></i>
                  manager001
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
export default CardPageVisits