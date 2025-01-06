import React from 'react';
import { FaUser, FaEnvelope, FaCommentAlt } from 'react-icons/fa';

const ContactForm = () => {
  return (
    <section className="font-poppins py-12">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Form Section */}
        <div>
          <h2 className="text-2xl sm:text-4xl font-bold text-center text-[#500073] mb-8">
            Contact Us
          </h2>
          <form>
            {/* Container for all Fields */}
            <div className="bg-[#500073] p-8 rounded-lg shadow-lg">
              {/* Name Field */}
              <div className="form-control w-full max-w-xs mb-4">
                <div className="label">
                  <span className="label-text text-white">What is your name?</span>
                </div>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered w-full max-w-xs"
                />
              </div>

              {/* Email Field */}
              <div className="form-control w-full max-w-xs mb-4">
                <div className="label">
                  <span className="label-text text-white">What is your email?</span>
                </div>
                <input
                  type="email"
                  placeholder="Type here"
                  className="input input-bordered w-full max-w-xs"
                />
              </div>

              {/* Topic Field */}
              <div className="form-control w-full max-w-xs mb-4">
                <div className="label">
                  <span className="label-text text-white">Topic of your question</span>
                </div>
                <select className="select select-bordered w-full max-w-xs">
                  <option disabled selected>Choose a topic</option>
                  <option>General Inquiry</option>
                  <option>Support</option>
                  <option>Feedback</option>
                </select>
              </div>

              {/* Message Field */}
              <div className="form-control w-full max-w-xs mb-4">
                <div className="label">
                  <span className="label-text text-white">Your message</span>
                </div>
                <textarea
                  placeholder="Type your message here"
                  className="textarea textarea-bordered w-full max-w-xs"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="text-center mt-4">
                <button
                  type="submit"
                  className="px-4 py-2 bg-[#500073] text-white rounded-lg hover:bg-[#6a1f9c] transition-colors duration-300"
                >
                  Send Message
                </button>
              </div>
            </div>
          </form>
        </div>

        {/* Right Section with Text and Icon */}
        <div className="rounded-2xl bg-[#500073] bg-opacity-75 text-white p-8 shadow-lg">
          <div className="flex items-center mb-6">
            <FaUser className="text-3xl mr-4" />
            <h3 className="text-2xl font-semibold">Siap Jadi UMKM Naik Kelas!</h3>
          </div>
          <p className="text-sm">
            Kami hadir untuk membantu Anda berkembang. Jangan ragu untuk menghubungi kami
            jika Anda membutuhkan dukungan lebih lanjut.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
