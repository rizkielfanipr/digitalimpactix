import { useState, useEffect } from "react";
import { BsChatDots } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import impactixLogo from "../assets/impactix.png";
import impactixWhiteLogo from "../assets/impactix-white.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 flex justify-between items-center px-4 sm:px-6 py-3 sm:py-4 font-poppins border-b transition-all duration-300 ${
          isScrolled
            ? "bg-white border-gray-200"
            : "bg-transparent backdrop-blur-md border-transparent"
        }`}
      >
        {/* Bagian Kiri: Logo dan Hamburger Icon */}
        <div className="flex items-center gap-3 sm:gap-4">
          <button
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <FaBars
              className={`text-xl sm:text-2xl transition-all duration-300 ${
                isScrolled ? "text-gray-600" : "text-white"
              }`}
            />
          </button>
          <img
            src={isScrolled ? impactixLogo : impactixWhiteLogo}
            alt="Impactix Logo"
            className="h-10 sm:h-14 transition-all duration-300"
          />
        </div>

        {/* Bagian Tengah: Menu */}
        <ul className="hidden lg:flex lg:items-center lg:gap-8">
          <li
            className={`text-xs sm:text-sm font-semibold transition-all duration-300 ${
              isScrolled ? "text-gray-700 hover:text-primary" : "text-white"
            }`}
          >
            <a href="#">Home</a>
          </li>
          <li
            className={`text-xs sm:text-sm font-semibold transition-all duration-300 ${
              isScrolled ? "text-gray-700 hover:text-primary" : "text-white"
            }`}
          >
            <a href="#">About</a>
          </li>
          <li
            className={`text-xs sm:text-sm font-semibold transition-all duration-300 ${
              isScrolled ? "text-gray-700 hover:text-primary" : "text-white"
            }`}
          >
            <a href="#">Services</a>
          </li>
          <li
            className={`text-xs sm:text-sm font-semibold transition-all duration-300 ${
              isScrolled ? "text-gray-700 hover:text-primary" : "text-white"
            }`}
          >
            <a href="#">Contact</a>
          </li>
        </ul>

        {/* Bagian Kanan: Button */}
        <div className="flex items-center">
          <button className="inline-flex items-center gap-2 py-1.5 px-3 sm:py-2 sm:px-4 bg-[#500073] rounded-lg text-white text-xs sm:text-sm font-semibold">
            <BsChatDots className="text-sm sm:text-md text-white" />
            Konsultasi
          </button>
        </div>
      </nav>

      {/* Sidebar */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}
      <div
        className={`fixed top-0 left-0 h-full w-56 sm:w-64 bg-[#500073] z-50 transform transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-end px-4 py-3 sm:py-4">
          <button onClick={() => setIsMenuOpen(false)}>
            <FaTimes className="text-xl sm:text-2xl text-white" />
          </button>
        </div>
        <ul className="mt-4 sm:mt-6 space-y-3 sm:space-y-4 px-4">
          <li className="text-xs sm:text-sm font-semibold text-white hover:text-gray-300">
            <a href="#">Home</a>
          </li>
          <li className="text-xs sm:text-sm font-semibold text-white hover:text-gray-300">
            <a href="#">About</a>
          </li>
          <li className="text-xs sm:text-sm font-semibold text-white hover:text-gray-300">
            <a href="#">Services</a>
          </li>
          <li className="text-xs sm:text-sm font-semibold text-white hover:text-gray-300">
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
