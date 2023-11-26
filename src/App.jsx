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
import UserDashboard from './components/UserAdmin//userpages/Dashboard/UserDashboard.jsx';
import UserSettings from './components/UserAdmin/userpages/Dashboard/UserSettings.jsx';
import UserTables from './components/UserAdmin/userpages/Dashboard/UserTables.jsx';
import BookedSlots from "./components/UserAdmin/usercomponents/usercards/BookedSlots.jsx";
import RemainingSlots from "./components/UserAdmin/usercomponents/usercards/RemainingSlots.jsx";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeLayout />}>
            <Route path="" element={<LandingPage />} />
            <Route path="login" element={<Login/>} />
            <Route path="sign" element={<Signup/>} />
          </Route>
          <Route path="dashboard" element={<DashboardLayout />}>
            <Route path="" element={<Navigate to={"/dashboard/stats"} />} />
            <Route path="/dashboard/stats" index element={<Dashboard />} />
            <Route path="/dashboard/maps" element={<Maps />} />
            <Route path="/dashboard/settings" element={<Settings />} />
            <Route path="/dashboard/tables" element={<Tables />} />
          </Route>
          <Route path="userdashboard" element={<UserDashboardLayout />}>
            <Route path="" element={<Navigate to={"/userdashboard/stats"} />} />
            <Route path="/userdashboard/stats" index element={<UserDashboard />} />
            <Route path="/userdashboard/stats" index element={<UserDashboard />} />
            <Route path="/userdashboard/UserSettings" element={<UserSettings />} />
            <Route path="/userdashboard/tables" element={<UserTables />} />
            <Route path="/userdashboard/booked" element={<BookedSlots/>}/>
            <Route path="/userdashboard/remaining" element={<RemainingSlots/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
