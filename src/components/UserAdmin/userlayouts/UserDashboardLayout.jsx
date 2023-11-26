import React from "react";
import { Outlet} from "react-router-dom";

// usercomponents

import UserAdminNavbar from "../usercomponents/usernavbars/UserAdminNavbar.jsx";
import UserSidebar from "../usercomponents/UserSidebar/UserSidebar.jsx";
import DashNav from "../usercomponents/userheaders/DashNav.jsx";
import UserFooterAdmin from "../usercomponents/userfooters/UserFooterAdmin.jsx";
export default function UserDashboardLayout() {
  return (
    <>
      <UserSidebar />
      <div className="relative md:ml-64 bg-blueGray-100">
        <UserAdminNavbar />
        {/* Header */}
        <DashNav />
        <div className="px-4 md:px-10 mx-auto w-full -m-24 bg-[#F3FBFF]">
           <Outlet/>
          <UserFooterAdmin />
        </div>
      </div>
    </>
  );
}
