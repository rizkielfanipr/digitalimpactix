import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const FloatingWhatsApp = () => {
  return (
    <a
      href="https://wa.me/628123456789" // Ganti dengan nomor WhatsApp Anda
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-6 md:bottom-10 md:right-10 bg-green-500 text-white rounded-full p-4 shadow-xl hover:bg-green-600 transition-colors duration-300 z-50"
      aria-label="Hubungi kami di WhatsApp"
    >
      <FaWhatsapp className="text-2xl md:text-3xl" />
    </a>
  );
};

export default FloatingWhatsApp;
