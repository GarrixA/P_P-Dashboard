import React, { useState } from "react";
import { FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { Navigate, useNavigate, Link } from "react-router-dom";

const Login = () => {
  const [passWord, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    // console.log(axios);
    axios({
      method: "POST",
      url: "https://smart-parking-api-3g3e.onrender.com/parking/users/login",
      data: {
        email: email,
        password: passWord,
      },
    })
      .then((response) => {
        console.log(response, "response");
        localStorage.setItem("token", response.data.access_token);
        alert("Login succesfull");
        // navigate("../dashboard");
        setTimeout(() => {
          if (response.data.user.role == "admin") {
            navigate("/dashboard/stats");
            setIsLoading(false);
          } else {
            navigate("/managerDashboard/stats");
            setIsLoading(false);
          }
        }, 5000);
      })
      .catch((error) => {
        console.log(error);
        alert("An error happened" + error.meessage);
      });
    setEmail("");
    setPassword("");
  };
  return (
    <>
      <div className="flex flex-col md:flex-row justify-between items-center p-4">
        <div className="landing-page-logo mb-4 md:mb-0 ml-10">
          <img
            src="https://img.freepik.com/premium-wektory/przypnij-szablon-logo-parkingu-wektor-premium_316488-5081.jpg?w=2000"
            className="w-32"
            alt="Logo"
          />
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
              onClick={() => scrollToSection("about-us")}
              className="mr-4"
            >
              Location
            </a>

            <Link to="login">
              <a
                href=""
                onClick={() => scrollToSection("Login")}
                className="mr-4"
              >
                Login
              </a>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <ToastContainer />
        <div className="bg-[#E2F4FF] rounded-2xl border shadow-md  pb-10 m-12 overflow-hidden md:w-1/3 w-full">
          <h1 className=" font-extrabold uppercase text-2xl w-full bg-[#0C7489] px-4 py-8 text-center text-white">
            Login
          </h1>
          <div className="mt-4 mb-2 text-xl font-semibold md:ml-8 ml-4">
            <label>Username</label>
          </div>
          <div className="w-full md:ml-8 ml-4">
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="rounded-lg  p-2 mb-2 md:w-4/6 w-5/6"
            />
          </div>
          <div className="mt-4 mb-2 text-xl font-semibold md:ml-8 ml-4">
            <label>Password</label>
          </div>
          <div className="w-full md:ml-8 ml-4">
            <input
              type="password"
              value={passWord}
              onChange={(e) => setPassword(e.target.value)}
              className="rounded-lg  p-2 mb-2 md:w-4/6 w-5/6"
            />
            <p className=" text-sm m-2 w-4/6 text-right">
              forgot password?{" "}
              <span className="text-blue-600 cursor-pointer">reset</span>
            </p>
          </div>
          {/* sm:motion-safe:hover:animate-spin */}
          <button
            onClick={handleLogin}
            className="bg-[#0C7489] rounded-full w-2/4 px-5 text-xl font-bold text-white text-center pb-2 mt-3 ml-8 py-1 "
          >
            {isLoading ? "Loging in... " : "Login"}
          </button>
        </div>
      </div>
      <div id="footer" className="footer  bg-[#0C7489] text-white py-8">
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
};
export default Login;