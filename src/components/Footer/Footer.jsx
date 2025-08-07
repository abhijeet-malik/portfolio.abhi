import React from "react";
import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="text-white bg-[#09081bf6] py-8 px-[12vw] md:px-[7vw] lg:px-[12vw]">
      <div className="container mx-auto text-center">
        {/* Social Media Icons - Responsive */}
        <div className="flex text-red-500 text-2xl flex-wrap justify-center space-x-4 mt-6">
          {[
            {
              icon: <FaFacebook />,
              link: "https://www.facebook.com/profile.php?id=100093021284441",
            },
            {
              icon: <FaLinkedin />,
              link: "https://www.linkedin.com/in/abhijeet-malik-ba7822205/",
            },
            {
              icon: <FaInstagram  />,
              link: "https://www.instagram.com/_a.b.h.i__9/?igsh=NHE4dWhoZ2lqODE%3D#",
            },
            {
              icon: <FaEnvelope className="text-red-500 text-2xl" />,
              link: "abhijeetmalik934@gmail.com",
            },
          ].map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-purple-500 transition-transform transform hover:scale-110"
            >
              {item.icon}
            </a>
          ))}
        </div>

        {/* Copyright Text */}
        <p className="text-sm text-gray-400 mt-6">
          © {new Date().getFullYear()} Abhijeet Malik. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
