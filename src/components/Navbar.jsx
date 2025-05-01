import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center h-16 px-6 lg:px-16">
      <div>
        <img
          src="/Logo.png"
          alt="Logo"
          className="w-[120px] h-[120px] lg:h-[150px] lg:w-[150px] mt-2"
        />
      </div>
      <div className="flex space-x-8 text-lg ">
        <a href="#home" className="hover:text-blue-500">
          Home
        </a>
        <a href="#about" className="hover:text-blue-500">
          About
        </a>
        <a href="#projects" className="hover:text-blue-500">
          Projects
        </a>
        <a href="#contact" className="hover:text-blue-500">
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
