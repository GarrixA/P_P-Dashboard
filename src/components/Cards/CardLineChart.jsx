import React from "react";
import { FaRegMessage } from "react-icons/fa6" ;

export default function CardLineChart() {
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
              <p className="flex items-center text-black text-xl"><FaRegMessage className="mr-2 " /> new users</p>
              <p className="flex items-center text-black text-xl "><FaRegMessage className="mr-2"  />new slots</p>
              <p className="flex items-center text-black text-xl"><FaRegMessage className="mr-2" />new booked</p>
              <p className="flex items-center text-black text-xl"><FaRegMessage className="mr-2 " /> new users</p>
              <p className="flex items-center text-black text-xl "><FaRegMessage className="mr-2"  />new slots</p>
              <p className="flex items-center text-black text-xl"><FaRegMessage className="mr-2" />new booked</p>             
              <p className="flex items-center text-black text-xl"><FaRegMessage className="mr-2 " /> new users</p>
              <p className="flex items-center text-black text-xl "><FaRegMessage className="mr-2"  />new slots</p>
              <p className="flex items-center text-black text-xl"><FaRegMessage className="mr-2" />new booked</p>
<br /> <br />
            <button className="bg-[#0C7489] mr-8 text-white px-4 py-2 rounded-md hover:bg-indigo-600">View all</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
