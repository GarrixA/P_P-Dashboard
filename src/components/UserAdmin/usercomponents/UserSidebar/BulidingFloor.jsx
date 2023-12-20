/* eslint-disable no-undef */
/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Link, useParams } from "react-router-dom";
import { BiSolidBuildingHouse } from "react-icons/bi";
import { useEffect, useState } from "react";
import axios from "axios";

export default function BulidingFloor() {
  const [floor, setFloor] = useState([]);

  // console.log(floor);
  const fetchFloors = () => {
    let token = localStorage.getItem("token");
    axios({
      url: `https://smart-parking-api-3g3e.onrender.com/parking/floor/getFloors/`,
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((response) => {
      setFloor(response.data.floors);
    });
  };
  useEffect(() => {
    fetchFloors();
  }, []);

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
            {floor.map((item, idx) => {
              return (
                  <SubMenu label={item.Name} key={idx}>
                    <Link to={`/managerDashboard/slots/${item._id}`}>
                      <MenuItem>Total Slots</MenuItem>
                    </Link>
                    <Link to={`/managerDashboard/booked/${item._id}`}>
                      {" "}
                      <MenuItem>Booked Slots</MenuItem>
                    </Link>
                    <Link to={`/managerDashboard/remaining/${item._id}`}>
                      {" "}
                      <MenuItem>Remaining Slots</MenuItem>
                    </Link>
                  </SubMenu>
                
              );
            })}

            <Link to={"/managerDashboard/addfloor"}>
              <SubMenu label="Add Floor"></SubMenu>
            </Link>
          </SubMenu>
        </Menu>
      </Sidebar>
    </>
  );
}
