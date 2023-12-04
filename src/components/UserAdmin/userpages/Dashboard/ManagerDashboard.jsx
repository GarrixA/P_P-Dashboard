import React from "react";

// usercomponents

import UserChart from "../../usercomponents/usercards/UserChart.jsx";
import UserCardVisit from "../../usercomponents/usercards/UserCardVisit.jsx";
import UserStats from "../../usercomponents/usercards/UserStats.jsx";

export default function ManagerDashboard() {
  return (
    <>
    <div className=" relative bottom-32">
            {/* Card stats */}
            <div className="flex relative bottom-16 flex-wrap md:justify-between ">
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <UserStats
                  statSubtitle="Total Slots"
                  statTitle="50"
                  statArrow="up"
                  statPercent="3.48"
                  statPercentColor="text-emerald-500"
                  statDescripiron="Since last month"
                  statIconName="far fa-chart-bar"
                  statIconColor="bg-gray-500"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <UserStats
                  statSubtitle="Total Booked"
                  statTitle="30"
                  statArrow="down"
                  statPercent="3.48"
                  statPercentColor="text-red-500"
                  statDescripiron="Since last week"
                  statIconName="fas fa-chart-pie"
                  statIconColor="bg-red-800"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <UserStats
                  statSubtitle="Remaining Slots"
                  statTitle="20"
                  statArrow="down"
                  statPercent="1.10"
                  statPercentColor="text-orange-500"
                  statDescripiron="Since yesterday"
                  statIconName="fas fa-users"
                  statIconColor="bg-green-500"
                />
              </div>
            </div>
          </div>
      <div className="flex flex-wrap">
        <div className="w-full xl:w-full px-4  h-[65vh]">
          <UserChart />
        </div>
      </div>
      <div className="flex flex-wrap mt-4">
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
          <UserCardVisit />
        </div>
      </div>
    </>
  );
}
