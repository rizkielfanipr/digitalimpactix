import { useState } from "react";
import { BsChatDots } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import impactixLogo from "../assets/impactix.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 py-4 bg-white font-poppins border-b border-gray-200">
        {/* Bagian Kiri: Logo dan Hamburger Icon */}
        <div className="flex items-center gap-4">
          <button
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <FaBars className="text-2xl text-gray-600" />
          </button>
          <img src={impactixLogo} alt="Impactix Logo" className="h-14" />
        </div>

        {/* Bagian Tengah: Menu */}
        <ul className="hidden lg:flex lg:items-center lg:gap-8">
          <li className="text-sm font-semibold text-gray-700 hover:text-primary">
            <a href="#">Home</a>
          </li>
          <li className="text-sm font-semibold text-gray-700 hover:text-primary">
            <a href="#">About</a>
          </li>
          <li className="text-sm font-semibold text-gray-700 hover:text-primary">
            <a href="#">Services</a>
          </li>
          <li className="text-sm font-semibold text-gray-700 hover:text-primary">
            <a href="#">Contact</a>
          </li>
        </ul>

        {/* Bagian Kanan: Button */}
        <div className="flex items-center">
          <button className="inline-flex items-center gap-2 py-2 px-4 bg-[#500073] rounded-xl text-white text-sm font-semibold">
            <BsChatDots className="text-md text-white" />
            Konsultasi
          </button>
        </div>
      </nav>

      {/* Sidebar */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={() => setIsMenuOpen(false)}></div>
      )}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-[#500073] z-50 transform transition-transform duration-300 ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex justify-end px-4 py-4">
          <button onClick={() => setIsMenuOpen(false)}>
            <FaTimes className="text-2xl text-white" />
          </button>
        </div>
        <ul className="mt-6 space-y-4 px-4">
          <li className="text-sm font-semibold text-white hover:text-gray-300">
            <a href="#">Home</a>
          </li>
          <li className="text-sm font-semibold text-white hover:text-gray-300">
            <a href="#">About</a>
          </li>
          <li className="text-sm font-semibold text-white hover:text-gray-300">
            <a href="#">Services</a>
          </li>
          <li className="text-sm font-semibold text-white hover:text-gray-300">
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
