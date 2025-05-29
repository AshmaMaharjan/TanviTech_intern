import React, { useState } from "react";

// ServiceCard Component
const ServiceCard = ({ title, icon, isActive, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`flex flex-col items-center justify-center cursor-pointer border-2 ${
        isActive ? "bg-sky-400 text-white" : "border-sky-400 text-gray-600"
      } rounded-lg p-4 transition-colors duration-300 w-full flex-grow hover:bg-sky-400 hover:text-white`}
      style={{ minWidth: 220 }} // ensure min width matches grid minmax
    >
      <div className="mb-2 text-3xl">{icon}</div>
      <h3 className="text-sm sm:text-lg font-bold text-center flex-grow">{title}</h3>
    </div>
  );
};

// ServicesSection Component
const ServicesSection = () => {
  const [activeService, setActiveService] = useState("Web Design & Development");

  const services = [
    { title: "Web Design & Development", icon: "🖥️" },
    { title: "Software & Apps Development", icon: "💻" },
    { title: "Web Hosting & Domain Name Services", icon: "🌐" },
    { title: "Digital Marketing & SEO", icon: "📊" },
    { title: "IT Training", icon: "🧑‍🏫" },
    { title: "Global Certification", icon: "📜" },
  ];

  const serviceDetails = {
    "Web Design & Development": {
      description: (
        <div className="px-4 sm:px-8 lg:px-16">
          <p className="text-base sm:text-lg text-gray-600 mb-4 italic">
            Web development is the process of creating a website while web
            design refers to the designing process related to the client-side
            design of the website. Web development focuses on the functionality
            of the website and web design focuses on the layout of the website.
            We develop user-friendly websites.
          </p>
          <ul className="list-disc list-inside text-left text-sky-400 font-semibold text-base sm:text-xl mb-4">
            <li>Static Websites</li>
            <li>Responsive Websites</li>
            <li>Complete CMS</li>
          </ul>
          <p className="text-base sm:text-lg text-gray-600">
            Web-based application development focuses on the functionality of
            the website and web design focuses on the layout of the website. We
            develop user-friendly websites.
          </p>
        </div>
      ),
      imagePath: "./images/features-1.svg",
    },
    "Software & Apps Development": {
      description: (
        <div className="px-4 sm:px-8 lg:px-16">
          <p className="text-base sm:text-lg text-gray-600 mb-4">
            It is the process of building computer programs. It includes writing
            and maintaining the source code. Software is developed providing the
            functionality to address particular business needs. We develop
            application software, system software, and embedded software.
          </p>
          <p className="text-base sm:text-lg text-gray-600 mb-4 italic">
            It is the process of designing, structuring, and executing software
            applications. It is similar to software development. We develop
            applications for both Android and iOS (iPhone OS).
          </p>
          <ul className="list-disc list-inside text-left text-sky-400 font-semibold text-base sm:text-xl mb-4">
            <li>Desktop Application</li>
            <li>Android Apps</li>
            <li>iOS Apps</li>
          </ul>
          <p className="text-base sm:text-lg text-gray-600">
            We ensure that our software applications meet the highest standards
            of quality and performance across all platforms.
          </p>
        </div>
      ),
      imagePath: "./images/features2.svg",
    },
    "Web Hosting & Domain Name Services": {
      description: (
        <div className="px-4 sm:px-8 lg:px-16">
          <p className="text-base sm:text-lg text-gray-600 mb-4">
            DNS refers to Domain Name System. It is the naming system that is
            used to identify computers, services, and other resources. It serves
            the internet as a phonebook by translating hostnames into IP
            addresses. Web hosting is an online service that allows you to
            publish a website or web application on the internet. All websites
            on the internet need web hosting services. We provide reliable
            website solutions that handle every aspect of your website. We
            specialize in storing and serving websites and offer the facilities
            required to create and maintain sites accessible on the WWW.
          </p>
          <ul className="list-disc list-inside text-left text-sky-400 font-semibold text-base sm:text-xl mb-4">
            <li>Web Hosting Packages</li>
            <li>Domain Name Services</li>
          </ul>
          <p className="text-base sm:text-lg text-gray-600 italic">
            Our services ensure that your website remains accessible, secure,
            and efficient at all times.
          </p>
        </div>
      ),
      imagePath: "./images/features3.svg",
    },
    "Digital Marketing & SEO": {
      description: (
        <div className="px-4 sm:px-8 lg:px-16">
          <p className="text-base sm:text-lg text-gray-600 mb-4">
            Digital marketing, also called online marketing, is the promotion of
            brands to connect with potential customers using the internet and
            other forms of digital communication. This includes not only email,
            social media, and web-based advertising but also text and multimedia
            messages as marketing channels.
          </p>
          <p className="text-base sm:text-lg text-gray-600 mb-4 italic">
            The 4 Ps of marketing are place, price, product, and promotion. By
            carefully integrating all of these marketing strategies into a
            marketing mix, companies can ensure they have a visible, in-demand
            product or service that is competitively priced and promoted to
            their customers.
          </p>
          <ul className="list-disc list-inside text-left text-sky-400 font-semibold text-base sm:text-xl mb-4">
            <li>Digital Marketing</li>
            <li>Social Media Marketing</li>
            <li>SEO</li>
          </ul>
          <p className="text-base sm:text-lg text-gray-600">
            Our comprehensive digital marketing strategies help businesses reach
            their target audience effectively and efficiently across various
            digital platforms.
          </p>
        </div>
      ),
      imagePath: "./images/features4.svg",
    },
    "IT Training": {
      description: (
        <div className="px-4 sm:px-8 lg:px-16">
          <p className="text-base sm:text-lg text-gray-600 mb-4 italic">
            We offer a 2-month course designed to enhance your computer literacy
            skills. Throughout this period, you'll learn typing, creating
            presentations, managing files, and more to become proficient with
            computer usage.
          </p>
          <p className="text-base sm:text-lg text-gray-600 mb-4">
            Additionally, we provide a 3-month course covering operating
            systems, data management, networking, hardware maintenance, and
            other essential IT skills.
          </p>
          <ul className="list-disc list-inside text-left text-sky-400 font-semibold text-base sm:text-xl mb-4">
            <li>Computer Literacy</li>
            <li>IT Fundamentals</li>
          </ul>
          <p className="text-base sm:text-lg text-gray-600">
            Whether you're a beginner or looking to brush up on essential IT
            skills, our courses cater to a variety of experience levels.
          </p>
        </div>
      ),
      imagePath: "./images/features5.svg",
    },
    "Global Certification": {
      description: (
        <div className="px-4 sm:px-8 lg:px-16">
          <p className="text-base sm:text-lg text-gray-600 mb-4">
            We offer certifications recognized worldwide that demonstrate your
            skills and knowledge in a specific area of IT. These certifications
            validate your technical abilities and enhance your career
            opportunities.
          </p>
          <p className="text-base sm:text-lg text-gray-600 italic">
            Whether you're seeking a foundational certification or an advanced
            credential, we provide training and exam preparation for a variety
            of globally recognized certifications.
          </p>
          <ul className="list-disc list-inside text-left text-sky-400 font-semibold text-base sm:text-xl mb-4">
            <li>Certification Preparation</li>
            <li>Practice Exams</li>
          </ul>
          <p className="text-base sm:text-lg text-gray-600">
            Stay competitive in the ever-evolving IT industry by earning a
            global certification with our expert training and preparation
            resources.
          </p>
        </div>
      ),
      imagePath: "./images/features6.svg",
    },
  };

  return (
    <section className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        {/* Services cards grid */}
        <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-4 justify-center">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              icon={service.icon}
              isActive={activeService === service.title}
              onClick={() => setActiveService(service.title)}
            />
          ))}
        </div>

        {/* Detail section grid */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <img
              src={serviceDetails[activeService].imagePath}
              alt={activeService}
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
          <div>{serviceDetails[activeService].description}</div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
