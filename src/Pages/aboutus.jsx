import React, { useState } from 'react';

export default function App() {
  const [activeTab, setActiveTab] = useState('TanviTech');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const renderContent = () => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {contentData[activeTab].map((section, index) => (
          <div
            key={index}
            className="flex flex-col p-8 rounded-lg bg-blue-50 shadow-lg hover:shadow-xl hover:-translate-y-1 transform transition"
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">{section.title}</h3>
            <p className="text-base text-gray-600 leading-relaxed">
              {section.description}
            </p>
          </div>
        ))}
      </div>
    );
  };

  const contentData = {
    TanviTech: [
      {
        title: 'Web Design & Development',
        description:
          'Web development is the process of creating a website, while web design refers to designing processes related to client-side design.',
      },
      {
        title: 'Software & Apps Development',
        description:
          'The process of building computer programs, writing and maintaining the source code. Software is developed to provide specific functionalities.',
      },
      {
        title: 'Graphics Solutions',
        description:
          'Professionals plan and create visual content for communicating ideas in a compelling way.',
      },
    ],
    TanviTechCenter: [
      {
        title: 'Tech Solution',
        description:
          'We create cost-effective IT solutions based on technical expertise to deliver ultimate customer satisfaction.',
      },
      {
        title: 'Hardware Solution',
        description:
          'Providing all types of hardware, network, and IT goods in Nepal with affordable IT solutions.',
      },
      {
        title: 'TTC Tech Solution',
        description:
          'TanviTech Center is a leading provider of cost-effective hardware and network solutions in Nepal.',
      },
    ],
    TanviServices: [
      {
        title: 'Dental Management System',
        description:
          'We develop cost-effective solutions for managing dental clinics efficiently.',
      },
      {
        title: 'School Management System',
        description:
          'We offer solutions to automate and simplify school operations with an easy-to-use management system.',
      },
      {
        title: 'Inventory Management System',
        description:
          'Efficient management of inventory systems with scalable solutions tailored for businesses.',
      },
    ],
    TechRaibar: [
      {
        title: 'Dental Management System',
        description:
          'We provide software solutions to help dental practices run more smoothly and efficiently.',
      },
      {
        title: 'School Management System',
        description:
          'We offer comprehensive solutions for school management, automating many administrative tasks.',
      },
      {
        title: 'Inventory Management System',
        description:
          'Our inventory management system is designed to help businesses manage their products and stock effectively.',
      },
    ],
  };

  return (
    <div
      className="min-h-screen p-8 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/img/background.jpg')",
      }}
    >
      <section className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-6 uppercase tracking-wide">
          About Us
        </h1>
        <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-5xl mx-auto mb-12 text-justify">
          TanviTech is a leading IT company, providing cost-effective solutions based on technical expertise. We offer software and application development, IT and computer training at affordable costs.
        </p>
      </section>

      <section className="flex flex-col items-center text-center gap-12">
        <div className="w-full md:w-4/5 lg:w-2/3 mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="flex flex-col items-center md:items-start text-center md:text-left mb-6 md:mb-0">
            <img
              src="/img/1tanvitech.png"
              alt="TanviTech"
              className="w-80 h-full md:w-80 md:h-full object-cover shadow-xl rounded-lg mb-4"
            />
            <h2 className="text-2xl md:text-3xl ml-5 font-bold text-gray-800 tracking-wide">TanviTech Pvt. Ltd.</h2>
          </div>
          <div className="text-lg text-gray-600 leading-relaxed max-w-lg ml-8 text-justify mb-20">
            <p>
              The Corporate Office of TanviTech Pvt. Ltd. is situated at Narephat-32, Jadibuti, Kathmandu. TanviTech Pvt. Ltd. is a leading IT company that provides various services and real-life problem-solving solutions. We maintain uniqueness in our brand and service as a professional computer institute in Nepal since our establishment in 2020.
            </p>
          </div>
        </div>

        <div className="flex gap-4 justify-center flex-wrap mb-4">
          {['TanviTech', 'TanviTechCenter', 'TanviServices', 'TechRaibar'].map((tab) => (
            <button
              key={tab}
              className={`py-2 px-4 sm:py-3 sm:px-6 text-sm sm:text-lg rounded-lg border ${
                activeTab === tab
                  ? 'bg-blue-700 text-white border-blue-700'
                  : 'bg-gray-100 hover:bg-blue-700 hover:text-white hover:border-blue-700 transition-colors duration-300'
              }`}
              onClick={() => handleTabClick(tab)}
            >
              {tab.replace(/([A-Z])/g, ' $1').trim()}
            </button>
          ))}
        </div>

        {renderContent()}
      </section>
    </div>
  );
}
