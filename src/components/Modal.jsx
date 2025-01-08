import { useState } from "react";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

const Modal = ({ isOpen, onClose, selectedPackage }) => {
  if (!isOpen) return null;

  // State for form input values
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [businessType, setBusinessType] = useState("");
  const [note, setNote] = useState("");

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Format the message for WhatsApp
    const message = `
      Nama: ${name}
      Nomor Handphone: ${phone}
      Nama Usaha: ${businessName}
      Jenis Usaha: ${businessType}
      Catatan: ${note}
    `.trim();

    // WhatsApp phone number (replace with the desired phone number)
    const phoneNumber = "+628995449805";

    // Create the WhatsApp URL
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    // Redirect to WhatsApp
    window.location.href = whatsappUrl;
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 py-4">
      <div className="bg-white rounded-lg p-6 sm:p-6 w-full max-w-sm sm:max-w-3xl relative mx-4 sm:max-w-3xl sm:h-auto h-full overflow-y-auto">
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          &times;
        </button>
        <div className="flex flex-col space-y-6 sm:space-y-0 sm:flex-row sm:space-x-6">
          {/* Preview */}
          <div className="sm:w-1/2">
            <h3 className="text-lg font-semibold text-[#500073] mb-4">
              {selectedPackage?.name}
            </h3>
            <p className="text-xl font-bold text-[#500073]">
              {selectedPackage?.price}
            </p>
            <ul className="mt-4 space-y-2">
              {selectedPackage?.services.map((service, index) => (
                <li key={index} className="flex items-center space-x-2">
                  {service.available ? (
                    <FaCheckCircle className="text-green-500" />
                  ) : (
                    <FaTimesCircle className="text-red-500" />
                  )}
                  <span
                    className={`text-sm ${
                      service.available
                        ? "text-gray-700"
                        : "text-gray-400 line-through"
                    }`}
                  >
                    {service.name}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Form */}
          <form className="sm:w-1/2 space-y-4 flex flex-col w-full" onSubmit={handleSubmit}>
            <label className="form-control w-full">
              <span className="label-text">Nama</span>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Masukkan nama Anda"
                className="input input-bordered border-gray-300 text-sm w-full"
              />
            </label>
            <label className="form-control w-full">
              <span className="label-text">Nomor Handphone</span>
              <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Masukkan nomor handphone"
                className="input input-bordered border-gray-300 text-sm w-full"
              />
            </label>
            <label className="form-control w-full">
              <span className="label-text">Nama Usaha</span>
              <input
                type="text"
                value={businessName}
                onChange={(e) => setBusinessName(e.target.value)}
                placeholder="Masukkan nama usaha"
                className="input input-bordered border-gray-300 text-sm w-full"
              />
            </label>
            <label className="form-control w-full">
              <span className="label-text">Jenis Usaha</span>
              <input
                type="text"
                value={businessType}
                onChange={(e) => setBusinessType(e.target.value)}
                placeholder="Masukkan jenis usaha"
                className="input input-bordered border-gray-300 text-sm w-full"
              />
            </label>
            <label className="form-control w-full">
              <span className="label-text">Catatan Opsional</span>
              <textarea
                rows="4"
                value={note}
                onChange={(e) => setNote(e.target.value)}
                placeholder="Tulis catatan di sini"
                className="textarea textarea-bordered border-gray-300 text-sm w-full"
              ></textarea>
            </label>
            <button
              type="submit"
              className="px-6 py-2 bg-[#500073] text-white font-semibold rounded-lg hover:bg-[#6a1f9c] transition-colors duration-300"
            >
              Kirim Pesan
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
