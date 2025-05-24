import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Profession", href: "#profession" },
    { label: "Stack", href: "#stack" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="flex justify-between items-center h-20 px-6 lg:px-16 relative">
      <div>
        <img
          src={`${process.env.PUBLIC_URL}/Logo.png`}
          alt="Logo"
          className="w-[120px] h-[120px] lg:h-[150px] lg:w-[150px] -ml-6"
        />
      </div>

      <div className="lg:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="focus:outline-none"
        >
          <FontAwesomeIcon
            icon={isOpen ? faTimes : faBars}
            className="text-3xl"
          />
        </button>
      </div>

      <div className="hidden lg:flex space-x-8 text-lg">
        {navLinks.map((link) => (
          <a key={link.href} href={link.href} className="hover:text-secondary">
            {link.label}
          </a>
        ))}
      </div>

      {isOpen && (
        <div
          className="absolute top-20 left-4 right-4 z-50 
         bg-softWhite shadow-xl rounded-xl flex flex-col items-center 
          py-4 gap-2 border border-gray-200 animate-fade-in"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="w-full text-center text-lg font-medium 
              py-3 px-6 rounded-md text-primary"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
