import React from "react";
import { FaRegEnvelope } from "react-icons/fa";
import MessageNotification from './MessageNotification';

const CardLineChart = () => {
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words w-full h-full mb-6 shadow-lg rounded bg-white">
        <div className="rounded-t mb-0 px-4 py-3 bg-transparent">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full max-w-full flex-grow flex-1">
              <h2 className="uppercase text-black-100 mb-1 text-xs font-semibold">
                Messages
              </h2>
              <br />
              <div>
                <MessageNotification
                  sender="Leon"
                  message="Hello, how it works?"
                  timestamp="2 hours ago"
                />
              </div>
              <div>
                <MessageNotification
                  sender="Bolingo"
                  message="Hello, how you made it?"
                  timestamp="2 hours ago"
                />
              </div>
              <div>
                <MessageNotification
                  sender="Garix"
                  message="Hello, how you are gonna help me ?"
                  timestamp="2 hours ago"
                />
              </div>
              <br /> <br />
              <button className="bg-[#0C7489] mr-8 text-white px-4 py-2 rounded-md hover:bg-indigo-600">View all</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardLineChart;
