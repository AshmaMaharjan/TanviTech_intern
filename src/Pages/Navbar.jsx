import React, { useState } from 'react';
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white w-full z-20 border-b border-gray-200 shadow-lg transition-all duration-300">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center space-x-3">
          <span className="text-xl md:text-2xl lg:text-3xl font-extrabold tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-teal-500 to-green-500 hover:scale-105 transform transition-transform duration-300 ease-in-out hover:animate-pulse">
            TanviTech
          </span>
        </a>
        <button
          onClick={toggleMobileMenu}
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-controls="navbar-default"
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
        <div className={`md:flex md:items-center ${isMobileMenuOpen ? 'block' : 'hidden'} md:block`}>
          <ul className="flex flex-col md:flex-row md:space-x-8 w-full md:w-auto items-center">
            {['Home', 'Products', 'Services', 'Certification', 'Domain & Web Hosting', 'Events', 'About'].map((item, index) => (
              <li
                key={index}
                className="relative group"
                onMouseEnter={() => handleDropdown(item)}
                onMouseLeave={() => handleDropdown(null)}
              >
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-900 hover:text-blue-700 transition-transform duration-300 transform hover:scale-105"
                >
                  {item}
                  <FaChevronDown className={`ml-1 ${item === 'Products' || item === 'Services' || item === 'Certification' || item === 'Domain & Web Hosting' ? 'inline' : 'hidden'}`} />
                  <span className="absolute left-0 bottom-0 w-full h-0.5 bg-gradient-to-r from-blue-500 via-teal-500 to-green-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out"></span>
                </a>
                {/* Dropdown Menu */}
                {(item === 'Products' || item === 'Services' || item === 'Certification' || item === 'Domain & Web Hosting') && (
                  <div
                    className={`absolute left-0 mt-2 w-64 bg-white text-gray-900 rounded-xl shadow-lg border border-gray-200 transition-transform duration-500 ${openDropdown === item ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
                    style={{ zIndex: 50 }}
                  >
                    <ul className="py-2 space-y-1">
                      {item === 'Products' && (
                        <>
                          <li>
                            <a href="#" className="block px-4 py-2 hover:bg-gray-100 rounded-lg hover:shadow-lg hover:scale-105 transform transition-transform duration-300">
                              Document Management System (DMS)
                            </a>
                          </li>
                          <li>
                            <a href="#" className="block px-4 py-2 hover:bg-gray-100 rounded-lg hover:shadow-lg hover:scale-105 transform transition-transform duration-300">
                              Short Message Service (SMS)
                            </a>
                          </li>
                          <li>
                            <a href="#" className="block px-4 py-2 hover:bg-gray-100 rounded-lg hover:shadow-lg hover:scale-105 transform transition-transform duration-300">
                              Health and Safety Management (HSM)
                            </a>
                          </li>
                          <li>
                            <a href="#" className="block px-4 py-2 hover:bg-gray-100 rounded-lg hover:shadow-lg hover:scale-105 transform transition-transform duration-300">
                              Incident Management System (IMS)
                            </a>
                          </li>
                        </>
                      )}
                      {item === 'Services' && (
                        <>
                          <li>
                            <a href="#" className="block px-4 py-2 hover:bg-gray-100 rounded-lg hover:shadow-lg hover:scale-105 transform transition-transform duration-300">
                              Custom Software Development
                            </a>
                          </li>
                          <li>
                            <a href="#" className="block px-4 py-2 hover:bg-gray-100 rounded-lg hover:shadow-lg hover:scale-105 transform transition-transform duration-300">
                              Mobile App Development
                            </a>
                          </li>
                          <li>
                            <a href="#" className="block px-4 py-2 hover:bg-gray-100 rounded-lg hover:shadow-lg hover:scale-105 transform transition-transform duration-300">
                              Web Application Development
                            </a>
                          </li>
                          <li>
                            <a href="#" className="block px-4 py-2 hover:bg-gray-100 rounded-lg hover:shadow-lg hover:scale-105 transform transition-transform duration-300">
                              UI/UX Design
                            </a>
                          </li>
                          <li>
                            <a href="#" className="block px-4 py-2 hover:bg-gray-100 rounded-lg hover:shadow-lg hover:scale-105 transform transition-transform duration-300">
                              Software Maintenance & Support
                            </a>
                          </li>
                        </>
                      )}
                      {item === 'Certification' && (
                        <>
                          <li>
                            <a href="#" className="block px-4 py-2 hover:bg-gray-100 rounded-lg hover:shadow-lg hover:scale-105 transform transition-transform duration-300">
                              Cisco Certifications
                            </a>
                          </li>
                          <li>
                            <a href="#" className="block px-4 py-2 hover:bg-gray-100 rounded-lg hover:shadow-lg hover:scale-105 transform transition-transform duration-300">
                              Microsoft Certifications
                            </a>
                          </li>
                          <li>
                            <a href="#" className="block px-4 py-2 hover:bg-gray-100 rounded-lg hover:shadow-lg hover:scale-105 transform transition-transform duration-300">
                              Oracle Certifications
                            </a>
                          </li>
                          <li>
                            <a href="#" className="block px-4 py-2 hover:bg-gray-100 rounded-lg hover:shadow-lg hover:scale-105 transform transition-transform duration-300">
                              EC-Council Certifications
                            </a>
                          </li>
                        </>
                      )}
                      {item === 'Domain & Web Hosting' && (
                        <>
                          <li>
                            <a href="#" className="block px-4 py-2 hover:bg-gray-100 rounded-lg hover:shadow-lg hover:scale-105 transform transition-transform duration-300">
                              Domain Name Search
                            </a>
                          </li>
                          <li>
                            <a href="#" className="block px-4 py-2 hover:bg-gray-100 rounded-lg hover:shadow-lg hover:scale-105 transform transition-transform duration-300">
                              FindMy NP Domain
                            </a>
                          </li>
                          <li>
                            <a href="#" className="block px-4 py-2 hover:bg-gray-100 rounded-lg hover:shadow-lg hover:scale-105 transform transition-transform duration-300">
                              Domain Registration
                            </a>
                          </li>
                          <li>
                            <a href="#" className="block px-4 py-2 hover:bg-gray-100 rounded-lg hover:shadow-lg hover:scale-105 transform transition-transform duration-300">
                              Web Hosting Solutions
                            </a>
                          </li>
                        </>
                      )}
                    </ul>
                  </div>
                )}
              </li>
            ))}
            <li className="md:ml-auto mt-4 md:mt-0">
              <a
                href="#contact"
                className="block py-2 px-4 text-white bg-red-600 rounded-lg hover:bg-red-700 transition-transform duration-300 transform hover:scale-105"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
