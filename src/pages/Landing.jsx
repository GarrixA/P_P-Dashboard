import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGooglePlay, faApple } from "@fortawesome/free-brands-svg-icons";
import { FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";
import { useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";


export default function Landing() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: "smooth" });
  };

  const [isloading, setIsloading] = useState (false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault()
    setIsloading(true)
    if (username === "klabadmin@gmail.com" && password === "password") {
      setTimeout(()=>{
        setIsloading(false);
        navigate("/dashboard");
      }, 5000)
      
    } else if (username === "mugisha@gmail.com" && password === "12345") {
      setTimeout(() => {
        setIsloading(false);
        navigate("/managerDashboard");
      }, 5000);
    }else{
      setTimeout(()=>{
      setIsloading(false);
      alert("user not registered");
      }, 5000)
    }
  };

  return (
    <>
      

      <div className="flex flex-col md:flex-row justify-between items-center p-4">
        <div className="landing-page-description text-center md:text-left md:pr-8 md:w-1/2 ml-10">
          <h1 className="text-4xl font-bold text-black-800 mb-6 md:mb-10">
            Welcome!
          </h1>
          <h3 className="text-2xl font-semibold text-black-600 mb-2">
            Smart parking dashboard
          </h3>
          <span className="text-teal-600 text-19 ">
            Le Lorem Ipsum est simplement du faux texte employé<br></br> dans la
            composition et la mise en page avant impression.
          </span>

          <div className="flex flex-col md:flex-row mt-4">
            <button className="flex items-center justify-center px-4 py-2 bg-teal-600 text-white rounded hover:bg-teal-700 mb-2 md:mb-0 md:mr-4">
              <FontAwesomeIcon icon={faApple} className="mr-2" />
              Download on App Store
            </button>

            <button className="flex items-center justify-center px-4 py-2 bg-teal-600 text-white rounded hover:bg-teal-700">
              <FontAwesomeIcon icon={faGooglePlay} className="mr-2" />
              Download on Play Store
            </button>
          </div>
        </div>

        <div className="landing-page-image md:w-1/2">
          <img
            src="https://hunterae.com/wp-content/uploads/images/distant-work-flat-concept-videohive-download-31441136-free-hunterae-com-9.jpg"
            className="w-full h-auto"
            alt="Dashboard Image"
          />
        </div>
      </div>

      <div class="flex flex-col md:flex-row items-center justify-center space-x-0 md:space-x-14 mr-0 md:mr-20 shadow-lg">
        <div class="flex-shrink-0 mb-4 md:mb-0 md:mr-10">
          <img
            src="https://img.freepik.com/premium-photo/modern-car-black-background-with-unusual-color-shimmering-black-goldfuturistic-innovative-car-generative-ai_76964-12088.jpg"
            alt="Smart Parking Car"
            class="max-w-full h-auto"
          />
        </div>

        <div id="about-us" class="text-center md:text-left">
          <h2 class="text-3xl font-bold mb-4 mt-2">About us</h2>
          <h4 class="text-lg md:max-w-2xl">
            Hi there, this smart parking car system aims to revolutionize the
            way national drivers secure parking spaces by providing a convenient
            and efficient booking platform. With our innovative technology,
            users can effortlessly reserve parking slots, ensuring a seamless
            and stress-free experience in busy urban areas. The system employs
            cutting-edge features such as real-time availability updates,
            user-friendly interfaces, and advanced security measures to
            guarantee a hassle-free parking solution for drivers nationwide.
          </h4>
          <button class="bg-teal-500 text-white py-3 px-6 mt-4 transition duration-300 ease-in-out">
            Know more
          </button>
        </div>
      </div>

      <div
        id="contact-us"
        className="text-3xl mb-4 mt-8 md:mt-24 ml-4 md:ml-24"
      >
        <h3 className="title">Let's get in touch</h3>

        <div className="flex flex-col md:flex-row mt-4">
          <div className="left-container-contact flex flex-col justify-center mb-4 md:mb-0 md:mr-4">
            <form className="parking-form">
              <div className="mb-4">
                <label className="text-sm">Name</label>
                <input
                  type="text"
                  name="name"
                  className="block w-full border border-gray-300 px-3 py-3 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm"
                />
              </div>

              <div className="mb-6">
                <label className="text-sm">Fullname</label>
                <input
                  type="text"
                  name="fullname"
                  className="block w-full border border-gray-300 px-3 py-3 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm"
                />
              </div>

              <div className="mb-6">
                <label className="text-sm">Email</label>
                <input
                  type="text"
                  name="email"
                  className="block w-full border border-gray-300 px-3 py-3 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm"
                />
              </div>

              <div className="mb-6">
                <label className="text-sm">Password</label>
                <input
                  type="password"
                  name="password"
                  className="block w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 "
                />
              </div>

              <button className="bg-teal-500 text-white py-2 px-4 rounded text-lg">
                Send message
              </button>
            </form>
          </div>

          <div className="right-container-contact flex justify-center items-center">
            <img
              src="https://img.lovepik.com/photo/45009/7677.jpg_wh860.jpg"
              alt="Smart Parking Car"
              className="max-w-full h-auto"
            />
          </div>
        </div>
      </div>

      <div className="some-text p-6 ml-4 md:ml-14">
        <span className="text-lg font-semibold text-gray-800">
          Smart Parking Car System
        </span>
        <p className="mt-4 text-gray-700">
          Aims to revolutionize the way national drivers secure parking spaces
          by providing a convenient and efficient booking platform.
          <br className="hidden md:inline" /> With our innovative technology,
          users can effortlessly reserve parking slots, ensuring a seamless and
          stress-free experience in busy
          <br className="hidden md:inline" /> urban areas. The system employs
          cutting-edge features such as real-time availability updates,
          user-friendly interfaces, and
          <br className="hidden md:inline" /> advanced security measures to
          guarantee a hassle-free parking solution for drivers nationwide.
        </p>
      </div>

      <div
        id="Login"
        className="text-3xl mb-4 mt-4 md:mt-10 ml-4 md:ml-24 shadow-lg "
      >
        <h3 className="title">Login here</h3>

        <div className="flex flex-col md:flex-row ">
          <div
            className="left-container-contact flex flex-col justify-center mb-4 md:mb-0 md:mr-4"
            style={{ marginTop: "-13rem" }}
          >
            <form className="parking-form">
              <div className="mb-6">
                <label className="text-sm">username</label>
                <input
                  type="text"
                  name="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="block w-full border border-gray-300 px-3 py-3 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm"
                />
              </div>

              <div className="mb-6">
                <label className="text-sm">Password</label>
                <input
                  type="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 "
                />
              </div>

              <button onClick={handleLogin} className="bg-teal-500 text-white py-2 px-4 rounded text-lg">
                {isloading? "logingin..." : "Login"}
              </button>
            </form>
          </div>

          <div
            className="right-container-contact flex justify-center items-center"
            style={{ marginTop: "-5rem" }}
          >
            <img
              src="https://img.lovepik.com/photo/45009/7677.jpg_wh860.jpg"
              alt="Smart Parking Car"
              className="max-w-full h-auto"
            />
          </div>
        </div>
      </div>

      <div id="footer" className="footer bg-teal-500 text-white py-8">
        <div className="container mx-auto flex flex-col md:flex-row md:items-center">
          {/* First Row */}
          <div className="flex-1 mb-4 md:mb-0">
            <span className="text-lg font-bold">smart car parking</span>
            <div className="hidden md:flex md:flex-col md:ml-auto mb-4">
              <span>find us on</span>
              <div className="social-media-icon flex flex-row mt-2">
                <a href="#" className="text-white mr-2">
                  <FaTwitter />
                </a>
                <a href="#" className="text-white mr-2">
                  <FaInstagram />
                </a>
                <a href="#" className="text-white">
                  <FaFacebook />
                </a>
              </div>
            </div>
          </div>

          {/* Second Row */}
          <div className="flex-1 mb-4 md:mb-0">
            <ul className="list-none flex flex-col md:flex-row">
              <li className="mb-2 md:mr-4">
                <a href="#" className="text-white text-lg">
                  Home
                </a>
              </li>

              <li className="mb-2 md:mr-4">
                <a href="#" className="text-white text-lg">
                  About us
                </a>
              </li>

              <li className="mb-2 md:mr-4">
                <a href="#" className="text-white text-lg">
                  Contact us
                </a>
              </li>
            </ul>
          </div>

          {/* Third Row */}
          <div className="flex-1">
            <ul className="list-none">
              <li className="mb-2 text-lg">Call us</li>
              <li className="mb-2">+250783515132</li>
              <li className="mb-2 text-lg">Email</li>
              <li className="mb-2">smartcarparking@gmail.com</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
