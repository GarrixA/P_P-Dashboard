import React from "react";

// usercomponents

import TotalSlots from "../../usercomponents/usercards/TotalSlots";

export default function UserTables() {
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
