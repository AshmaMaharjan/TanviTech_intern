import React from 'react';
import { Element } from 'react-scroll'; 

const packages = [
  {
    name: 'Small Package',
    price: '₹800+/year',
    features: [
      'Cloud Disk Space',
      'Bandwidth: Unlimited',
      'Email Accounts: Unlimited',
      'Per Email Quota: 10GB',
      'Databases: Unlimited',
      'Sub Domains: Unlimited',
      'Parked Domains: Unlimited',
      'Add-on Domains: Unlimited',
      'Support: Email and Phone',
      'cPanel: Full featured',
      'SSL Certificate: Free',
      'Data Migration: Free',
      'Backup: Self/ Manual',
    ],
    buttonText: 'Buy Now',
    buttonStyle: 'border border-blue-600 bg-transparent hover:bg-sky-600 hover:text-white transition-all',
  },
  {
    name: 'Medium Plan',
    price: '₹10000+/year',
    features: [
      'Cloud Disk Space',
      'Bandwidth: Unlimited',
      'Email Accounts: Unlimited',
      'Per Email Quota: 10GB',
      'Databases: Unlimited',
      'Sub Domains: Unlimited',
      'Parked Domains: Unlimited',
      'Add-on Domains: Unlimited',
      'Support: Email and Phone',
      'cPanel: Full featured',
      'SSL Certificate: Free',
      'Data Migration: Free',
      'Backup: Self/ Manual',
    ],
    buttonText: 'Buy Now',
    buttonStyle: 'border border-blue-600 bg-transparent hover:bg-sky-600 hover:text-white transition-all',
  },
  {
    name: 'Developer Plan',
    price: '₹20000+/year',
    features: [
      'Cloud Disk Space',
      'Bandwidth: Unlimited',
      'Email Accounts: Unlimited',
      'Per Email Quota: 10GB',
      'Databases: Unlimited',
      'Sub Domains: Unlimited',
      'Parked Domains: Unlimited',
      'Add-on Domains: Unlimited',
      'Support: Email and Phone',
      'cPanel: Full featured',
      'SSL Certificate: Free',
      'Data Migration: Free',
      'Backup: Self/ Manual',
    ],
    buttonText: 'Buy Now',
    buttonStyle: 'border border-blue-600 bg-transparent hover:bg-sky-600 hover:text-white transition-all',
  },
];

const HostingPackages = () => {
  return (
    <div className="font-[sans-serif] relative before:absolute before:w-full before:h-1/2 max-lg:before:h-1/4 before:bg-sky-500 before:z-10 py-10">
      <div className="max-w-6xl max-md:max-w-xl mx-auto py-10 px-4 relative z-20">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-2">Web Hosting Packages</h2>
          <p className="text-sm text-white">
            Your website is an important facet of your business. In this digital age, it is often the first port of call for a customer or prospect. And, it logically follows that your web hosting is also very important since it is the conveyor belt that delivers your website to the audience. A domain name adds credibility to your small business. Having your own domain name makes your company look professional.
          </p>

         
        </div>

        <Element name="hostingPackages" className="mt-12">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
            {packages.map((plan, index) => (
              <div
                key={index}
                className={`bg-white rounded shadow-[0_2px_10px_-2px_rgba(0,0,0,0.3)] p-6 ${
                  index === 1 ? 'lg:scale-105' : 'lg:scale-95'
                }`}
              >
                <div className="flex items-start">
                  <h3 className="text-lg text-gray-800 font-bold border-b-2 border-blue-600 pb-1">
                    {plan.name}
                  </h3>
                  <div className="ml-auto">
                    <h3 className="text-gray-800 text-lg font-bold">{plan.price}</h3>
                  </div>
                </div>

                <div className="mt-8">
                  <h4 className="text-base text-gray-800 font-bold mb-4">Plan Includes</h4>
                  <ul className="space-y-4 text-gray-600">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-4 mr-3 p-[3px] bg-blue-500 rounded-full fill-white"
                          viewBox="0 0 24 24"
                        >
                          <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button
                    type="button"
                    className={`w-full mt-8 px-2 py-2 text-sm text-gray-800 rounded ${plan.buttonStyle}`}
                  >
                    {plan.buttonText}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </Element>
      </div>
    </div>
  );
};

export default HostingPackages;
