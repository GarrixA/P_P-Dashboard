import React from "react";

import UserDropdown from "../../usercomponents/userdropdowns/UserDropdown.jsx";

export default function Navbar() {
  return (
    <>
      {/* Navbar */}
      <nav className="absolute top-0 left-0 w-full z-10 bg-transparent md:flex-row md:flex-nowrap md:justify-start flex items-center px-4">
        <div className="w-full mx-auto items-center flex justify-between md:flex-nowrap flex-wrap md:px-10 px-4">
         <div className="font-extrabold">
          <h1 className="text-2xl text-white">Dashboard</h1>
          <form className="py-1">
            <input type="text" placeholder="Search..." className="pl-6 py-2 rounded-md mb-4"/>
          </form>
         </div>
         
         <div className="flex items-center w-full justify-end">
          
           {/* User */}
           <ul className="flex-col mb-4 md:flex-row list-none items-center hidden md:flex w-1/4">
            <UserDropdown />
          </ul>
         </div>         
        </div>
      </nav>
      {/* End Navbar */}
    </>
  );
}
