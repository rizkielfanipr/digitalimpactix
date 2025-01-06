import React from 'react';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

const faqData = [
  {
    id: 1,
    question: "Apa itu Paket Basic?",
    answer:
      "Paket Basic mencakup desain responsive dan SEO dasar, namun tidak termasuk custom domain dan support 24/7.",
  },
  {
    id: 2,
    question: "Apakah saya bisa mengganti paket setelah membeli?",
    answer:
      "Ya, Anda dapat menghubungi tim kami untuk melakukan upgrade atau downgrade paket sesuai kebutuhan.",
  },
  {
    id: 3,
    question: "Apakah ada biaya tambahan untuk Custom Domain?",
    answer:
      "Ya, biaya tambahan berlaku jika Anda memilih untuk menambahkan custom domain pada paket Anda.",
  },
  {
    id: 4,
    question: "Apa keuntungan menggunakan Paket Premium?",
    answer:
      "Paket Premium mencakup semua fitur dari Paket Basic dan Standard, ditambah dengan dukungan 24/7 dan layanan custom domain.",
  },
  {
    id: 5,
    question: "Bagaimana cara menghubungi customer support?",
    answer:
      "Anda bisa menghubungi customer support kami melalui email atau nomor telepon yang tercantum pada website kami.",
  },
];

const Faq = () => {
  return (
    <section className="font-poppins py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="space-y-4">
          {faqData.map((faq) => (
            <div
              key={faq.id}
              className="collapse collapse-arrow bg-base-200 border rounded-lg"
            >
              <input type="radio" name="faq-accordion" id={`faq-${faq.id}`} />
              <div className="collapse-title text-md sm:text-lg font-medium text-[#500073]">
                {faq.question}
              </div>
              <div className="collapse-content">
                <p className="text-sm sm:text-base text-gray-700">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
