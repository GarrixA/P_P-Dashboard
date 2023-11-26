import React from "react";

// usercomponents

import CaSettings from "../../usercomponents/usercards/CaSettings.jsx";

export default function UserSettings() {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-8/12 px-4">
          <CaSettings />
        </div>
      </div>
    </>
  );
}
