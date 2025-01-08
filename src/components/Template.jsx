import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const templates = [
  { id: 1, title: "Template Bisnis", description: "Desain template bisnis profesional" },
  { id: 2, title: "Template Kreatif", description: "Template untuk proyek kreatif dan seni" },
  { id: 3, title: "Template Pribadi", description: "Template sederhana untuk penggunaan pribadi" },
  { id: 4, title: "Template Portofolio", description: "Template untuk portofolio profesional" },
  { id: 5, title: "Template Toko Online", description: "Desain untuk website toko online" },
  { id: 6, title: "Template Restoran", description: "Template untuk website restoran" },
  { id: 7, title: "Template Event", description: "Template untuk acara dan event" },
  { id: 8, title: "Template Edukasi", description: "Desain untuk website edukasi dan kursus" },
  { id: 9, title: "Template Travel", description: "Template untuk website perjalanan" },
];

const TemplateCard = ({ title, description, image }) => (
  <div className="border rounded-lg p-4 hover:shadow-md transition-shadow duration-300">
    <div
      className="w-full h-56 bg-cover bg-center rounded-lg"
      style={{ backgroundImage: `url(${image})` }}
    ></div>
    <h3 className="text-lg font-bold text-center text-[#500073] mt-4">{title}</h3>
    <p className="text-sm text-center text-gray-600">{description}</p>
  </div>
);

const Template = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % templates.length); // Loop ke awal
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + templates.length) % templates.length); // Loop ke akhir
  };

  return (
    <section className="font-poppins py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl sm:text-4xl font-bold text-center text-[#500073] mb-8">
          Banyak Pilihan Template!
        </h2>
        {/* Desktop View */}
        <div className="hidden lg:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
          {templates.map((template) => (
            <TemplateCard
              key={template.id}
              title={template.title}
              description={template.description}
              image="https://source.unsplash.com/random/400x400?template"
            />
          ))}
        </div>
        {/* Mobile Swipeable View */}
        <div className="lg:hidden relative flex items-center">
          {/* Left Arrow */}
          <button
            className="absolute left-0 bg-white p-2 rounded-full shadow-lg z-10  border border-gray-200"
            onClick={handlePrev}
          >
            <FaArrowLeft className="text-[#500073] text-lg" />
          </button>

          <div className="overflow-hidden w-full">
            <div
              className="flex transition-transform duration-300"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {templates.map((template) => (
                <div key={template.id} className="w-full flex-shrink-0 px-4">
                  <TemplateCard
                    title={template.title}
                    description={template.description}
                    image="https://source.unsplash.com/random/400x400?template"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right Arrow */}
          <button
            className="absolute right-0 bg-white p-2 rounded-full shadow-lg z-10 border border-gray-200"
            onClick={handleNext}
          >
            <FaArrowRight className="text-[#500073] text-lg" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Template;
