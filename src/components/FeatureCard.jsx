import { FaUserTie, FaDollarSign, FaClock, FaLaptopCode, FaShieldAlt, FaRocket } from "react-icons/fa";

// Data fitur
const features = [
  {
    id: 1,
    icon: <FaUserTie className="text-white text-2xl" />,
    bgColor: "bg-[#ff6b6b]",
    title: "Layanan Profesional",
    description: "Tim kami berpengalaman dalam desain website yang berkualitas.",
  },
  {
    id: 2,
    icon: <FaDollarSign className="text-white text-2xl" />,
    bgColor: "bg-[#feca57]",
    title: "Harga Terjangkau",
    description: "Kami menawarkan solusi hemat biaya untuk bisnis Anda.",
  },
  {
    id: 3,
    icon: <FaClock className="text-white text-2xl" />,
    bgColor: "bg-[#1dd1a1]",
    title: "Hasil Cepat",
    description: "Proses pengerjaan yang efisien untuk memenuhi deadline Anda.",
  },
  {
    id: 4,
    icon: <FaLaptopCode className="text-white text-2xl" />,
    bgColor: "bg-[#48dbfb]",
    title: "Teknologi Modern",
    description: "Menggunakan teknologi terkini untuk performa terbaik.",
  },
  {
    id: 5,
    icon: <FaShieldAlt className="text-white text-2xl" />,
    bgColor: "bg-[#ff9ff3]",
    title: "Keamanan Data",
    description: "Data Anda aman bersama kami dengan proteksi maksimal.",
  },
  {
    id: 6,
    icon: <FaRocket className="text-white text-2xl" />,
    bgColor: "bg-[#5f27cd]",
    title: "Skalabilitas",
    description: "Solusi yang dapat tumbuh bersama bisnis Anda.",
  },
];

// Komponen FeatureCard
const FeatureCard = ({ icon, bgColor, title, description }) => (
  <div className="flex flex-col items-center text-center border rounded-lg p-4 transition-shadow duration-300">
    <div className={`w-16 h-16 flex items-center justify-center ${bgColor} rounded-full mb-3`}>
      {icon}
    </div>
    <h3 className="font-bold text-[#500073]">{title}</h3>
    <p className="text-sm text-gray-600">{description}</p>
  </div>
);

// Komponen untuk menampilkan daftar fitur
export const FeatureList = () => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    {features.map((feature) => (
      <FeatureCard
        key={feature.id}
        icon={feature.icon}
        bgColor={feature.bgColor}
        title={feature.title}
        description={feature.description}
      />
    ))}
  </div>
);

export default FeatureCard;
