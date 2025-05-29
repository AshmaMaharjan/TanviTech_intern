import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Certificates = () => {
  const slides = [
    {
      image: "./images/1.png",
      title: "CISCO",
      description: `Cisco Certified Network Associate (CCNA): It confirms that you have the skills required to manage today's most advanced networks. It prepares you for IT networking roles like network engineers, network administrators, and so on. The CCNA exam covers networking fundamentals, IP services, automation, and so on.`,
    },
    {
      image: "./images/2.png",
      title: "Microsoft",
      description: `It is a certification program in which a person completes professional IT training for Microsoft products.`,
    },
    {
      image: "./images/3.png",
      title: "Oracle",
      description: `This certification qualifies you to become a database developer. It indicates your skill as a database professional, for both on-premises and cloud-based databases.`,
    },
    {
      image: "./images/4.png",
      title: "Ec-Council",
      description: `The International Council of Electronic Commerce Consultants is an American organization that offers cybersecurity certification, education, training, and services in various cybers.`,
    },
    {
      image: "./images/5.png",
      title: "Vmware",
      description: `VMware's desktop software runs on Microsoft Windows, Linux, and macOS, while its enterprise software hypervisor for servers, VMware ESXi, is a bare-metal hypervisor that runs directly on server hardware without requiring an additional underlying operating system.`,
    },
    {
      image: "./images/6.png",
      title: "Comptia",
      description: `The Computing Technology Industry Association is an American non-profit trade association, issuing professional certifications for the information technology industry. It is considered one of the IT industry's top trade associations.`,
    },
  ];

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1.5,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px",
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="text-center p-6 max-w-6xl mx-auto">
      <h2 className="text-3xl text-gray-600 font-bold mb-4 font-serif">CERTIFICATION</h2>
      <p className="text-lg text-gray-500 mb-8">All Global Certification</p>
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="p-4">
            <div className="bg-white shadow-lg rounded-lg h-200 w-200 mx-auto">
              {/* Flexbox with media query (responsive) */}
              <div className="flex flex-col md:flex-row justify-center items-center h-100 bg-blue-100 rounded-t-lg">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="h-80 object-contain"
                />
              </div>
              <div className="p-4 text-left h-48 overflow-hidden">
                <h3 className="text-xl font-semibold mb-2 text-sky-400">
                  {slide.title}
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed line-clamp-4">
                  {slide.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Certificates;
