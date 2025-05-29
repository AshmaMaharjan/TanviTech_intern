import React from 'react';
import {  Element } from 'react-scroll'; 

const events = [
  {
    date: 'Friday, November 20, 2020',
    authors: 'Tikaraj Neupane, Anil Jung K.C.',
    title: 'Cisco Tracks By Anil & Tikaraj',
    description:
      'CISCO TRACKS online webinar recording by Tikaraj Neupane (CISCO Trainer) and Anil Jung K.C. (NSE1, NSE2) on Friday, November 20, 2020 at 6:00 - 7:00 pm. This webinar is for CCNA, CCNP, CCIE and all Cisco Learning program.',
    imageUrl: 'src/assets/images/ciscotrack.png',
    link: '#',
  },
  {
    date: '10-13 June 2021',
    authors: 'Tikaraj Neupane, Anil Jung K.C., Jagadish Dul',
    title: 'Virtual Workshop On Web & Software Development',
    description:
      'TanviTech’s upcoming Free 8 hours Virtual Workshop On Web & Software Development. In this pandemic situation, we will train and give some useful ideas and skills on Web and Software Development WITHOUT ANY CHARGE !!!! Yes! This is an 8-hour FREE Webinar. We are offering a 4-day session on Web & Software Development Session.',
    imageUrl: 'src/assets/images/freeweb.jpg',
    link: '#',
  },
  {
    date: '10-13 June 2021',
    authors: 'Anil Jung K.C., Dipendra Soud',
    title: 'Domain Name & Hosting',
    description:
      "TanviTech's upcoming FreeVirtual Workshop On Domain Name & Hosting. In the pandemic situation, We will train and give some useful ideas and Skilss on Domain & Hosting WITH OUT ANY CHARGE !!!! Yes ! This is 8 hour Free Webinar.",
    imageUrl: 'src/assets/images/freedomain.png',
    link: '#',
  },
];

const EventCards = () => {
  return (
    <div className="bg-white font-[sans-serif]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-5xl font-extrabold text-[#333] inline-block relative after:absolute after:w-4/6 after:h-1 after:left-0 after:right-0 after:-bottom-4 after:mx-auto after:bg-pink-400 after:rounded-full">
            Event
          </h2>
          
        </div>

        <Element name="eventSection" className="mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-md:max-w-lg mx-auto">
            {events.map((event, index) => (
              <div
                key={index}
                className="bg-white cursor-pointer rounded overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] relative group"
              >
                <img
                  src={event.imageUrl}
                  alt={event.title}
                  className="w-full h-96 object-cover"
                />
                <div className="p-6 absolute bottom-0 left-0 right-0 bg-white opacity-90">
                  <span className="text-sm block text-gray-600 mb-2">
                    {new Date(event.date).toLocaleDateString('en-GB', {
                      day: '2-digit',
                      month: 'short',
                      year: 'numeric',
                    }).toUpperCase()}{" "}
                    | BY {event.authors.toUpperCase()}
                  </span>
                  <h3 className="text-xl font-bold text-[#333]">
                    {event.title}
                  </h3>
                  <div className="h-0 overflow-hidden group-hover:h-32 group-hover:mt-4 transition-all duration-300">
                    <p className="text-gray-600 text-sm">{event.description}</p>
                  </div>
                  <a
                    href={event.link}
                    className="inline-block mt-4 bg-sky-500 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-sky-600"
                  >
                    Explore More →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </Element>
      </div>
    </div>
  );
};

export default EventCards;
