import React from "react";

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
  return (
    <section className="font-poppins py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl sm:text-4xl font-bold text-center text-[#500073] mb-8">
          Banyak Pilihan Template!
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
          {templates.map((template, index) => (
            <TemplateCard
              key={template.id}
              title={template.title}
              description={template.description}
              image="https://source.unsplash.com/random/400x400?template"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Template;
