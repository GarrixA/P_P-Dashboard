import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import { BiSolidBuildingHouse } from "react-icons/bi";
import { useState } from "react";

export default function BulidingFloor() {
  const [floor, setFloor] = useState([]);

  const FetchFloors = () => {};
  return (
    <>
      <Sidebar>
        <BiSolidBuildingHouse className="absolute top-3 z-10 text-[1.4rem]" />
        <Menu>
          <SubMenu
            label="Floors"
            style={{
              paddingLeft: "30px",
            }}
          >
            <SubMenu label="Ground Floor">
              <Link to={"/managerDashboard/slots"}>
                <MenuItem>Total Slots</MenuItem>
              </Link>
              <Link to={"/managerDashboard/booked"}>
                {" "}
                <MenuItem>Booked Slots</MenuItem>
              </Link>
              <Link to={"/managerDashboard/remaining"}>
                {" "}
                <MenuItem>Remaining Slots</MenuItem>
              </Link>
            </SubMenu>
            <SubMenu label="First Floor">
              <Link to={"/managerDashboard/slots"}>
                <MenuItem>Total Slots</MenuItem>
              </Link>
              <Link to={"/managerDashboard/booked"}>
                {" "}
                <MenuItem>Booked Slots</MenuItem>
              </Link>
              <Link to={"/managerDashboard/remaining"}>
                {" "}
                <MenuItem>Remaining Slots</MenuItem>
              </Link>
            </SubMenu>
            <SubMenu label="Add Floor"></SubMenu>
          </SubMenu>
        </Menu>
      </Sidebar>
      ;
    </>
  );
}
