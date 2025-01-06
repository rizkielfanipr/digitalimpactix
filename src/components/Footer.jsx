import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa'; // Import ikon media sosial
import logo from '../assets/impactix.png'; // Pastikan path logo sesuai

const Footer = () => {
  return (
    <footer className="bg-grey-200 text-white font-poppins py-6 mt-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row justify-between items-center border-t border-gray-300 pt-6">
        {/* Bagian Kiri: Logo */}
        <div className="flex items-center mb-4 lg:mb-0">
          <img src={logo} alt="Impactix Logo" className="w-32 h-auto" />
        </div>

        {/* Bagian Tengah: Jam Layanan & Info */}
        <div className="text-center mb-4 lg:mb-0 text-[#500073]">
          <h3 className="text-md font-semibold">Jam Layanan</h3>
          <div className='text-sm'>
          <p>Senin - Jumat: 09:00 - 17:00</p>
          <p>Sabtu: 10:00 - 14:00</p>
          <p>Minggu: Tutup</p>
          </div>
        </div>

        {/* Bagian Kanan: Info Lain (misalnya alamat atau sosial media) */}
        <div className="text-center text-[#500073]">
          <p className="text-sm">© 2025 Impactix. Semua Hak Dilindungi.</p>
          <div className="flex justify-center space-x-4 mt-2">
            <a href="#" className="hover:text-[#6a1f9c]">
              <FaFacebook size={24} />
            </a>
            <a href="#" className="hover:text-[#6a1f9c]">
              <FaInstagram size={24} />
            </a>
            <a href="#" className="hover:text-[#6a1f9c]">
              <FaLinkedin size={24} />
            </a>
            <a href="#" className="hover:text-[#6a1f9c]">
              <FaYoutube size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
