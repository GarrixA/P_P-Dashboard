import React from 'react';
import park from '../assets/park.png'
import login from '../assets/login.png';

function Signup() {
  return (
    <>
<div className="flex flex-col md:flex-row items-center">
  <img src={park} height={40} width={100} className="mb-4 md:mb-0" />
  <div className="md:ml-40 md:mt-10 space-x-4 md:space-x-10 text-center md:text-left">
    <button className="mb-2 md:mb-0">About us</button>
    <button className="mb-2 md:mb-0">Contact us</button>
    <button>FAQ</button>
  </div>
</div>

<div className="flex flex-col md:flex-row ml-0 md:ml-40">
  <div className="flex-col bg-blue-200 p-4">
    <p className="mb-4"><b>Sign Up</b></p>
    <div className="space-y-4">
      <label htmlFor="email" className="font-semibold block">
        Enter your email
      </label>
      <input
        type="text"
        id="email"
        className="border-2 border-black rounded-lg p-2 md:p-4 text-black block w-full"
        placeholder="Enter your email"
      />
      <label htmlFor="firstName" className="font-semibold block">
        Enter your First Name
      </label>
      <input
        type="text"
        id="firstName"
        className="border-2 border-black rounded-lg p-2 md:p-4 text-black block w-full"
        placeholder="Enter your first name"
      />
      <label htmlFor="lastName" className="font-semibold block">
        Enter your Last Name
      </label>
      <input
        type="text"
        id="lastName"
        className="border-2 border-black rounded-lg p-2 md:p-4 text-black block w-full"
        placeholder="Enter your last name"
      />
      <label htmlFor="password" className="font-semibold block">
        Enter your Password
      </label>
      <input
        type="password"
        id="password"
        className="border-2 border-black rounded-lg p-2 md:p-4 text-black block w-full"
        placeholder="Enter your password"
      />
    </div>

    <button type="submit" className="mt-4">Sign Up</button>
  </div>

  <div className="md:ml-4 mt-4 md:mt-0 hidden md:block">
    <img src={login} width={750} alt="Login" />
  </div>
</div>


    </>
  )
}

export default Signup;
