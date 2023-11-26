import React from "react";

// components

import CaSettings from "../../components/Cards/CaSettings.jsx";

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
