import React from "react";
import appstore from "../assets/appstore.png";
import playstore from "../assets/playstore.png";
import landing from "../assets/landing.png";
import Topbar from "../components/Topbar";
export default function Landing() {
  return (
    <>
    <div className="flex flex-col-reverse md:flex-row justify-between mt-[5%]">
        <div className="mx-4 md:m-14 lg:mx flex-1">
          <p className="font-bold text-4xl uppercase">Welcome!</p>
          <p className="text-3xl font-semibold italic mt-3">We lead the way in car park management </p>
          <p className="text-xl mt-10 mb-5 ">
            Le Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
            Alias saepe voluptatibus odio accusantium asperiores doloremque 
            culpa accusamus cum, 
            unde eveniet voluptatem consequatur perferendis, illum corrupti facere
            cupiditate fugit id assumenda!
          </p>
          <div className="flex space-x-4 mb-8">
            <button><img src={appstore} width={150} alt="App Store" /></button>
            <button><img src={playstore} width={150} alt="Play Store" /></button>
          </div>
        </div>

      <div className="mx-4 md:mx-10 lg:mx-20 mt-10 md:mb-15 lg:mt flex-2 md:w-[35%] ">
        <img src={landing}  className=" md:float-right object-fill md:h-full md:mb-0 mb-5"/>
      </div>
    </div>
    </>
  );
}
