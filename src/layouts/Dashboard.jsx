import React from "react";
import { Outlet} from "react-router-dom";

// components

import AdminNavbar from "../components/Navbars/AdminNavbar.jsx";
import Sidebar from "../components/Sidebar/Sidebar.jsx";
import HeaderStats from "../components/Headers/HeaderStats.jsx";
import FooterAdmin from "../components/Footers/FooterAdmin.jsx";

// views

import Dashboard from "../pages/dashboard/Dashboard.jsx";
import Maps from "../pages/dashboard/Maps.jsx";
import Settings from "../pages/dashboard/Settings.jsx";
import Tables from "../pages/dashboard/Tables.jsx";

export default function DashboardLayout() {
  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-blueGray-100">
        <AdminNavbar />
        {/* Header */}
        <HeaderStats />
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
           <Outlet/>
          <FooterAdmin />
        </div>
      </div>
    </>
  );
}
