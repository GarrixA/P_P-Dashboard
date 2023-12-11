import React from "react";
import { TiSocialFacebook } from "react-icons/ti";
import { CiLinkedin } from "react-icons/ci";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
export default function FooterAdmin() {
  const handleLogout = () => {
    localStorage.removeItem('token'); 
    navigate('/login'); 
  };
  return (
    <>
      <footer className="block py-4">
        <div className="container mx-auto px-4">
          <hr className="mb-4 border-b-1 border-blueGray-200" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4">
              <div className="text-sm text-blueGray-500 font-semibold py-1 text-center md:text-left">
                Copyright © {new Date().getFullYear()}{" "}
                <a
                  href="https://www.creative-tim.com?ref=nr-footer-admin"
                  className="text-blueGray-500 hover:text-blueGray-700 text-sm font-semibold py-1"
                >
                  <b>Klab Rwanda</b>
                </a>
              </div>
            </div>
            <div className="w-full md:w-8/12 px-4">
              <ul className="flex flex-wrap list-none md:justify-end  justify-center">
                <li>
                  <a
                    href="https://www.creative-tim.com?ref=nr-footer-admin"
                    className="text-blueGray-600 hover:text-blueGray-800 text-sm font-semibold block py-1 px-3"
                  >
                    <TiSocialFacebook />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.creative-tim.com/presentation?ref=nr-footer-admin"
                    className="text-blueGray-600 hover:text-blueGray-800 text-sm font-semibold block py-1 px-3"
                  >
                    <FaTwitter />
                  </a>
                </li>
                <li>
                  <a
                    href="http://blog.creative-tim.com?ref=nr-footer-admin"
                    className="text-blueGray-600 hover:text-blueGray-800 text-sm font-semibold block py-1 px-3"
                  >
                    <FaInstagram />
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/creativetimofficial/notus-react/blob/main/LICENSE.md?ref=nr-footer-admin"
                    className="text-blueGray-600 hover:text-blueGray-800 text-sm font-semibold block py-1 px-3"
                  >
                     <CiLinkedin />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
