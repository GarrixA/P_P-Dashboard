import React, { useState } from "react";
import park from "../../assets/park.png"
import CardStats from "../../components/Cards/CardStats.jsx";
import { Link } from "react-router-dom";
import NotificationDropdown from "../Dropdowns/NotificationDropdown.jsx";
import UserDropdown from "../Dropdowns/UserDropdown.jsx";

export default function HeaderStats() {
  const [collapseShow, setCollapseShow] = useState(false);
  const [Modal, setModal] = useState(false);

  const toggleCollapse = () => {
    setCollapseShow(!collapseShow);
  };

  const toggleModal = () => {
    setModal(!showModal);
  };


  return (
    <>
      {/* Header */}
      <div className="relative bg-[#0C7489] md:pt-32 pb-32 pt-12">
       <div className="px-4 md:px-10 mx-auto w-full">

          
        </div>
      </div>
    </>
  );
}
