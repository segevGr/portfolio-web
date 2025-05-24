import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative flex justify-center items-center py-6 text-sm text-textPrimary bg-background font-sans">
      <p className="text-center">
        © {new Date().getFullYear()} Segev Grotas. All Rights Reserved.
      </p>

      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-3 md:right-6 w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-md hover:bg-gray-100 transition"
          aria-label="Scroll to top"
        >
          <FontAwesomeIcon icon={faArrowUp} className="text-gray-800 text-lg" />
        </button>
      )}
    </footer>
  );
};

export default Footer;
