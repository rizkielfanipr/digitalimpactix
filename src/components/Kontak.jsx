import React, { useState } from 'react';
import { FaPaperPlane } from 'react-icons/fa';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    topic: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process form data here, like sending it to an API
    console.log('Form Submitted:', formData);
  };

  return (
    <section className="font-poppins py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl sm:text-4xl font-bold text-center text-[#500073] mb-8">
          Contact Us
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left side: Contact form */}
          <div>
            <h3 className="text-xl font-semibold text-[#500073] mb-4">Get in Touch</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#500073] focus:border-[#500073]"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#500073] focus:border-[#500073]"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label htmlFor="topic" className="block text-sm font-medium text-gray-700">Topic</label>
                <select
                  id="topic"
                  name="topic"
                  value={formData.topic}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#500073] focus:border-[#500073]"
                >
                  <option value="">Choose a topic</option>
                  <option value="Billing">Billing</option>
                  <option value="Technical Support">Technical Support</option>
                  <option value="General Inquiry">General Inquiry</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#500073] focus:border-[#500073]"
                  placeholder="Write your message"
                />
              </div>

              <button type="submit" className="w-full py-2 px-4 bg-[#500073] text-white font-semibold rounded-lg hover:bg-[#6a1f9c] transition-colors duration-300">
                Send <FaPaperPlane className="inline-block ml-2" />
              </button>
            </form>
          </div>

          {/* Right side: FAQ section */}
          <div>
            <h3 className="text-xl font-semibold text-[#500073] mb-4">FAQ</h3>
            <div className="space-y-4">
              <details className="group border-b border-gray-200 pb-4">
                <summary className="cursor-pointer text-lg font-medium text-gray-900 group-open:text-[#500073]">
                  What is the return policy?
                </summary>
                <p className="mt-2 text-gray-600">Our return policy allows returns within 30 days of purchase.</p>
              </details>

              <details className="group border-b border-gray-200 pb-4">
                <summary className="cursor-pointer text-lg font-medium text-gray-900 group-open:text-[#500073]">
                  How can I track my order?
                </summary>
                <p className="mt-2 text-gray-600">You can track your order through the tracking number sent to your email.</p>
              </details>

              <details className="group border-b border-gray-200 pb-4">
                <summary className="cursor-pointer text-lg font-medium text-gray-900 group-open:text-[#500073]">
                  Do you offer international shipping?
                </summary>
                <p className="mt-2 text-gray-600">Yes, we offer international shipping to many countries.</p>
              </details>

              <details className="group border-b border-gray-200 pb-4">
                <summary className="cursor-pointer text-lg font-medium text-gray-900 group-open:text-[#500073]">
                  How do I cancel my order?
                </summary>
                <p className="mt-2 text-gray-600">Order cancellation is possible within 24 hours of purchase.</p>
              </details>

              <details className="group border-b border-gray-200 pb-4">
                <summary className="cursor-pointer text-lg font-medium text-gray-900 group-open:text-[#500073]">
                  How can I change my password?
                </summary>
                <p className="mt-2 text-gray-600">You can reset your password by clicking on 'Forgot Password' on the login page.</p>
              </details>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
