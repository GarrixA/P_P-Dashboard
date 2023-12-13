import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import { BiSolidBuildingHouse } from "react-icons/bi";

export default function BulidingFloor() {
  return (
    <>
    <div>
        <h1>Add Floor</h1>
        <form>
            <label>Floor Name</label>
            <input type="text" placeholder="eg: Ground floor"/>
            <label>Number of slots</label>
            <input type="number" placeholder="eg: 15"/>
        </form>
    </div>
    </>
  );
}
