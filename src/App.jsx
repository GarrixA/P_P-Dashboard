import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import HomeLayout from "./layouts/HomeLayout.jsx";
import LandingPage from "./pages/Landing.jsx";
import Login from "./pages/Login.jsx"
import DashboardLayout from "./layouts/Dashboard.jsx";
import Dashboard from "./pages/dashboard/Dashboard.jsx";
import Maps from "./pages/dashboard/Maps.jsx";
import Settings from "./pages/dashboard/Settings.jsx";
import Tables from "./pages/dashboard/Tables.jsx";
import Signup from "./pages/Signup.jsx";
import UserDashboardLayout from './components/UserAdmin/userlayouts/UserDashboardLayout.jsx';
import ManagerDashboard from './components/UserAdmin//userpages/Dashboard/ManagerDashboard.jsx';
import UserSettings from './components/UserAdmin/userpages/Dashboard/UserSettings.jsx';
import UserTables from './components/UserAdmin/userpages/Dashboard/UserTables.jsx';
import BookedSlots from "./components/UserAdmin/usercomponents/usercards/BookedSlots.jsx";
import RemainingSlots from "./components/UserAdmin/usercomponents/usercards/RemainingSlots.jsx";
import TotalSlots from "./components/UserAdmin/usercomponents/usercards/TotalSlots.jsx";
import CaSettings from "./components/UserAdmin/usercomponents/usercards/CaSettings.jsx";

import Editbuilding from "./components/Cards/Editbuilding.jsx";

import Floors from "./components/UserAdmin/usercomponents/usercards/Floors.jsx";


export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeLayout />}>
            <Route path="" element={<LandingPage />} />
            <Route path="login" element={<Login />} />
            <Route path="sign" element={<Signup />} />
          </Route>
          <Route path="dashboard" element={<DashboardLayout />}>
            <Route path="" element={<Navigate to={"/dashboard/stats"} />} />
            <Route path="/dashboard/stats" index element={<Dashboard />} />
            <Route path="/dashboard/maps" element={<Maps />} />
            <Route path="/dashboard/settings" element={<Settings />} />
            <Route path="/dashboard/tables" element={<Tables />} />
            <Route
              path="Editbuilding/:id"
              element={<Editbuilding />}
            />
          </Route>
          <Route path="managerDashboard" element={<UserDashboardLayout />}>
            <Route path="" element={<Navigate to={"/managerDashboard/stats"} />} />
            <Route path="/managerDashboard/stats" index element={<ManagerDashboard />} />
            <Route path="/managerDashboard/slots" index element={<TotalSlots />} />
            <Route path="/managerDashboard/UserSettings" element={<UserSettings />} />
            <Route path="/managerDashboard/tables" element={<UserTables />} />
            <Route path="/managerDashboard/booked" element={<BookedSlots/>}/>
            <Route path="/managerDashboard/remaining" element={<RemainingSlots/>}/>
            <Route path="/managerDashboard/settings" element={<CaSettings/>}/>
            <Route path="/managerDashboard/floors" element={<Floors/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
