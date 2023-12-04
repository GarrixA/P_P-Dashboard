import React from "react";
import playstore from "../assets/playstore.png";
import appstore from "../assets/appstore.png";
import { FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Landing() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="">
      <div className="flex flex-col md:flex-row justify-between items-center p-4">
        <div class="flex justify-between items-center">
          <div class="landing-page-logo mb-4 md:mb-0 flex items-center">
            <img
              src="https://img.freepik.com/premium-wektory/przypnij-szablon-logo-parkingu-wektor-premium_316488-5081.jpg?w=2000"
              class="w-32"
              alt="Logo"
            />

            <span class="ml-2 font-bold">smartcarparking</span>
          </div>
        </div>

        <div className="flex items-center mr-10">
          <div className="text-black">
            <a
              href="#"
              onClick={() => scrollToSection("about-us")}
              className="mr-4"
            >
              About us
            </a>
            <a
              href="#"
              onClick={() => scrollToSection("contact-us")}
              className="mr-4"
            >
              Contact us
            </a>

            <a
              href="#"
              onClick={() => scrollToSection("location")}
              className="mr-4"
            >
              Location
            </a>

            <Link to={"login"}>
              <a href="#" className="mr-4">
                Login
              </a>
            </Link>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center p-4">
        <div className="landing-page-description text-center md:text-left md:pr-8 md:w-1/2 ml-10">
          <h1 className="text-4xl font-bold text-black-800 mb-6 md:mb-10">
            Welcome!
          </h1>
          <h3 className="text-2xl font-semibold text-black-600 mb-2">
            We lead the way in car park management
          </h3>
          <span className="text-black " style={{ fontSize: "19px" }}>
            Le Lorem Ipsum est simplement du faux texte employé<br></br> dans la
            composition et la mise en page avant impression.
          </span>

          <div className="mt-10 flex space-x-4 mb-8">
            <button>
              <img src={appstore} width={150} alt="App Store" />
            </button>
            <button>
              <img src={playstore} width={150} alt="Play Store" />
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

      <div class="flex flex-col md:flex-row justify-between items-center p-4" />
      <div class="flex-shrink-0 mb-4 md:mb-0 w-full md:w-1/2" />

      <div class="flex flex-col md:flex-row items-center self-center justify-center space-x-0 md:space-x-14 mr-0 md:mr-20 shadow-lg" />
      <div class="flex-shrink-0 mb-4 md:mb-0 md:mr-10" />

      <div class="flex flex-col md:flex-row justify-between items-center p-4">
        <div class="ml-5 flex-shrink-0 mb-4 md:mb-0 w-full md:w-1/2">
          <img
            src="https://img.freepik.com/premium-photo/modern-car-black-background-with-unusual-color-shimmering-black-goldfuturistic-innovative-car-generative-ai_76964-12088.jpg"
            alt="Smart Parking Car"
            class="max-w-full h-auto"
          />
        </div>

        <div id="about-us" class="text-center md:text-left md:ml-8">
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
          <button class="bg-[#0C7489] text-white py-3 px-6 mt-4 transition duration-300 ease-in-out">
            Know more
          </button>
        </div>
      </div>

      <div id="contact-us" className="text-3xl mb-4 mt-8 md:mt-24 ml-4 md:">
        <div className=" justify-between items-center p-4">
          <span className="items-center p-4 text-lg font-semibold text-gray-800">
            our patners location
          </span>
          <div className="items-center p-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d30607.79514638295!2d30.066595630129367!3d-1.9550632439832505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1ssp rwanda!5e0!3m2!1sen!2srw!4v1663256798141!5m2!1sen!2srw"
              width="1500px"
              height="600px"
            />
          </div>
        </div>

        <div id="contact-us" className="text-3xl mb-4 mt-8 md:mt-24 ml-4 md:">
          <h3 className="title">Let's get in touch</h3>

          <div className="flex flex-col md:flex-row justify-between items-center p-4">
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

                <button className="bg-[#0C7489] text-white py-2 px-4 rounded text-lg">
                  Send message
                </button>
              </form>
            </div>

            <div className="right-container-contact flex justify-center items-center ">
              <img
                src="https://img.lovepik.com/photo/45009/7677.jpg_wh860.jpg"
                alt="Smart Parking Car"
                className="max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>

      <div id="footer" className="bg-[#0C7489] text-white py-8 ">
        <div className="container mx-auto flex flex-col md:flex-row md:items-start">
          {/* First Row */}
          <div className="flex-1 mb-4 md:mb-0">
            <span className="text-3xl font-bold mb-4">Smart Car Parking</span>
            <div className="hidden md:flex flex-col md:ml-auto">
              <span className="mb-2 text-lg">Find us on</span>
              <div className="social-media-icon flex flex-row mt-2">
                <a
                  href="#"
                  className="text-white mr-4"
                  style={{ fontSize: "1.5rem" }}
                >
                  <FaTwitter />
                </a>
                <a
                  href="#"
                  className="text-white mr-4"
                  style={{ fontSize: "1.5rem" }}
                >
                  <FaInstagram />
                </a>
                <a
                  href="#"
                  className="text-white"
                  style={{ fontSize: "1.5rem" }}
                >
                  <FaFacebook />
                </a>
              </div>
            </div>
          </div>

          {/* Second Row */}
          <div className="flex-1 mb-4 md:mb-0">
            <ul className="list-none flex flex-col md:flex-column">
              <li className="mb-2 md:mr-8">
                <a href="#" className="text-white text-lg">
                  Home
                </a>
              </li>

              <li className="mb-2 md:mr-8">
                <a href="#" className="text-white text-lg">
                  About us
                </a>
              </li>

              <li className="mb-2 md:mr-8">
                <a href="#" className="text-white text-lg">
                  Contact us
                </a>
              </li>
            </ul>
          </div>

          {/* Third Row */}

          <div className="flex-col md:ml-8">
            <div className="flex-col">
              <ul className="list-none">
                <li className="mb-2 text-lg">Call us</li>
                <li className="mb-2">+250 783 515 132</li>
                <li className="mb-2 text-lg">Email</li>
                <li className="mb-2">smartcarparking@gmail.com</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
