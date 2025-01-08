import { useState } from "react";
import { FaCheckCircle, FaTimesCircle, FaArrowRight } from "react-icons/fa";
import Modal from "./Modal";

const packages = [
  {
    id: 1,
    name: "Paket Basic",
    price: "Rp 500.000",
    services: [
      { name: "Desain Responsive", available: true },
      { name: "SEO Dasar", available: true },
      { name: "Custom Domain", available: false },
      { name: "Support 24/7", available: false },
    ],
  },
  {
    id: 2,
    name: "Paket Standard",
    price: "Rp 1.000.000",
    services: [
      { name: "Desain Responsive", available: true },
      { name: "SEO Dasar", available: true },
      { name: "Custom Domain", available: true },
      { name: "Support 24/7", available: false },
    ],
  },
  {
    id: 3,
    name: "Paket Premium",
    price: "Rp 2.000.000",
    services: [
      { name: "Desain Responsive", available: true },
      { name: "SEO Dasar", available: true },
      { name: "Custom Domain", available: true },
      { name: "Support 24/7", available: true },
    ],
  },
  {
    id: 4,
    name: "Paket Enterprise",
    price: "Rp 5.000.000",
    services: [
      { name: "Desain Responsive", available: true },
      { name: "SEO Dasar", available: true },
      { name: "Custom Domain", available: true },
      { name: "Support 24/7", available: true },
    ],
  },
  {
    id: 5,
    name: "Undangan Digital",
    price: "Rp 750.000",
    services: [
      { name: "Desain Unik", available: true },
      { name: "Custom Domain", available: true },
      { name: "SEO Optimized", available: true },
      { name: "QR Code Generator", available: true },
    ],
  },
];

const PackageCard = ({ name, price, services, onSelect }) => (
  <div className="border rounded-lg p-4 hover:shadow-md transition-shadow duration-300">
    <h3 className="text-lg font-semibold text-[#500073]">{name}</h3>
    <p className="text-xl font-extrabold text-[#500073] mb-4">{price}</p>
    <ul className="space-y-2">
      {services.map((service, index) => (
        <li key={index} className="flex items-center space-x-2">
          {service.available ? (
            <FaCheckCircle className="text-green-500" />
          ) : (
            <FaTimesCircle className="text-red-500" />
          )}
          <span
            className={`text-sm ${
              service.available ? "text-gray-700" : "text-gray-400 line-through"
            }`}
          >
            {service.name}
          </span>
        </li>
      ))}
    </ul>
    <div className="mt-4 text-center">
      <button
        onClick={onSelect}
        className="flex items-center justify-center px-4 py-2 bg-[#500073] text-white rounded-lg hover:bg-[#6a1f9c] transition-colors duration-300"
      >
        <span>Pilih Paket</span>
        <FaArrowRight className="ml-2" />
      </button>
    </div>
  </div>
);

const PaketKami = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState(null);

  const handleSelect = (pkg) => {
    setSelectedPackage(pkg);
    setModalOpen(true);
  };

  return (
    <section className="font-poppins py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl sm:text-4xl font-bold text-center text-[#500073] mb-8">
          Paket Kami
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {packages.map((pkg) => (
            <PackageCard
              key={pkg.id}
              name={pkg.name}
              price={pkg.price}
              services={pkg.services}
              onSelect={() => handleSelect(pkg)}
            />
          ))}
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        selectedPackage={selectedPackage}
      />
    </section>
  );
};

export default PaketKami;
