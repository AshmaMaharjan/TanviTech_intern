import React, { useState } from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import axios from 'axios';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Footer = () => {
  const [form, setForm] = useState({ email: '' });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const submit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3000/api/newsletter', { email: form.email });
      toast.success('Form Submitted Successfully!', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
        transition: Bounce,
      });
    } catch (error) {
      toast.error('Error submitting Form', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
        transition: Bounce,
      });
      console.error('There was an error submitting the form!', error);
    }
  };

  return (
    <footer className="bg-gray-800 text-gray-100 py-6 sm:py-12 mt-10 relative overflow-hidden">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
      <div className="relative z-10 max-w-screen-xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          {/* Logo Section */}
          <div className="flex flex-col items-start space-y-4">
            <span className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-wide uppercase text-gray-100 bg-clip-text bg-gradient-to-r from-gray-300 via-gray-200 to-gray-100 shadow-lg animate-text">
              TanviTech
            </span>
            <p className="text-gray-300 text-sm sm:text-base">
              Innovating technology solutions for a brighter tomorrow. Discover our cutting-edge services and join the revolution.
            </p>
            <div className="flex space-x-4 rtl:space-x-reverse">
              <a href="#" className="text-gray-300 hover:text-gray-400 transition-transform duration-300 transform hover:scale-110">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-gray-400 transition-transform duration-300 transform hover:scale-110">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-gray-400 transition-transform duration-300 transform hover:scale-110">
                <FaLinkedin size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-gray-400 transition-transform duration-300 transform hover:scale-110">
                <FaInstagram size={20} />
              </a>
            </div>
          </div>
          {/* Quick Links Section */}
          <div>
            <h3 className="text-lg sm:text-xl font-semibold mb-4 border-b border-gray-600 pb-2">Quick Links</h3>
            <ul className="space-y-2 text-sm sm:text-base">
              <li>
                <a href="/" className="text-gray-300 hover:text-gray-400 transition-transform duration-300 transform hover:scale-105">
                  Home
                </a>
              </li>
              <li>
                <a href="#products" className="text-gray-300 hover:text-gray-400 transition-transform duration-300 transform hover:scale-105">
                  Products
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-gray-400 transition-transform duration-300 transform hover:scale-105">
                  Services
                </a>
              </li>
              <li>
                <a href="#certification" className="text-gray-300 hover:text-gray-400 transition-transform duration-300 transform hover:scale-105">
                  Certification
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-gray-400 transition-transform duration-300 transform hover:scale-105">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          {/* Services Section */}
          <div>
            <h3 className="text-lg sm:text-xl font-semibold mb-4 border-b border-gray-600 pb-2">Our Services</h3>
            <ul className="space-y-2 text-sm sm:text-base">
              <li>
                <a href="#" className="text-gray-300 hover:text-gray-400 transition-transform duration-300 transform hover:scale-105">
                  Custom Software Development
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-gray-400 transition-transform duration-300 transform hover:scale-105">
                  Mobile App Development
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-gray-400 transition-transform duration-300 transform hover:scale-105">
                  Web Application Development
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-gray-400 transition-transform duration-300 transform hover:scale-105">
                  UI/UX Design
                </a>
              </li>
            </ul>
          </div>
          {/* Contact Section */}
          <div>
            <h3 className="text-lg sm:text-xl font-semibold mb-4 border-b border-gray-600 pb-2">Contact Us</h3>
            <ul className="space-y-2 text-sm sm:text-base">
              <li>
                <p className="text-gray-300">Location:</p>
                <p className="text-gray-400">Narephat, Jadibuti<br />44600, Kathmandu, Nepal</p>
              </li>
              <li>
                <a href="mailto:contact@tanvitech.com.np" className="text-gray-300 hover:text-gray-400 transition-transform duration-300 transform hover:scale-105">
                  contact@tanvitech.com.np
                </a>
              </li>
              <li>
                <a href="tel:+9851312180" className="text-gray-300 hover:text-gray-400 transition-transform duration-300 transform hover:scale-105">
                  9851312180, 9818350053
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mt-8 sm:mt-12 border-t border-gray-600 pt-6 sm:pt-8">
          <h3 className="text-lg sm:text-xl font-semibold mb-4">Subscribe to Our Newsletter</h3>
          <form onSubmit={submit} className="flex flex-col items-center space-y-4 md:space-y-0 md:flex-row md:space-x-4">
            <input
              type="email"
              placeholder="Enter your email"
              name="email"
              onChange={handleChange}
              value={form.email}
              className="w-full md:w-1/2 px-4 py-2 text-white rounded-full outline-none border border-gray-600 bg-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-gray-500"
              required
            />
            <button
              type="submit"
              className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-full transition-colors duration-300 mt-4 md:mt-0"
            >
              Subscribe
            </button>
          </form>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-400 text-sm sm:text-base">
          <p>&copy; {new Date().getFullYear()} TanviTech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
