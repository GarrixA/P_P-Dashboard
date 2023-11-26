import React, { useState } from 'react'
import park from "../assets/park.png";
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";
import '../index.css'

function Topbar() {
  const [openModal, setOpenModal] = useState(false);

  const toogleModal = ()=>{
    setOpenModal(!openModal);
  }
  return (
    <div className='z-30'>
         <div className="flex items-center justify-between border">
         <Link to={'/'}>
          <div className='flex items-center '>
            <img src={park} className='w-12 h-10 object-fill md:h-20 md:w-24 bg-[#0C7489] m-6 rounded-md'/>
            <div className='text-xl md:text-4xl flex flex-col uppercase font-extrabold '>
              <h1>Smart</h1>
              <h1>Parking</h1>
            </div>            
        </div></Link>
        <div className=" hidden md:flex justify-end mr-10 items-center text-lg ">
         <button className="p-3 font-bold text-xl uppercase">Contact us</button>
         <button className="p-3 font-bold text-xl uppercase">About us</button>
         <Link to={"login"}>
         <button className="p-3 font-bold text-xl uppercase">Login</button>
         </Link>
         <button className="p-3 font-bold text-xl uppercase">FAQ</button>
         
       </div>
       <GiHamburgerMenu className='md:hidden font-extrabold text-4xl cursor-pointer float-right mr-4'onClick={toogleModal}/>
       
      </div>
      
      {openModal && (
      <div className='bg-white h-full absolute w-full flex justify-center' id='loginAnim' onClick={toogleModal}>
        <div className='w-4/5 h-1/2 rounded-xl border border-black mt-20 text-black' id='cont'>
     
        
          <div className="flex flex-col mt-10 space-y-5" id='logDit'>
          <span className="text-2xl font-bold opacity-75 ml-6">Contact us</span>
          <span className="text-2xl font-bold opacity-75 ml-6">About us</span>
          <Link to={"login"}>
          <span className="text-2xl font-bold opacity-75 ml-6">Login</span>
          </Link>
          <span className="text-2xl font-bold opacity-75 ml-6">FAQ</span>
        </div>
       
       
        </div>
      </div>
       )}
    </div>
  )
}

export default Topbar;