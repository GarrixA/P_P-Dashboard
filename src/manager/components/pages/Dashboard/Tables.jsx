import React from "react";

// components

import TotalSlots from "../../components/Cards/TotalSlots";

export default function Tables() {
  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <TotalSlots/>
        </div>
      </div>
    </>
  );
}
