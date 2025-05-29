import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Pages/Navbar";
import Footer from "./Pages/Footer";
import FeedbackForm from "./Pages/FeedbackForm";
import LoadingSpinner from "./Pages/LoadingSpinner";
import EventCards from "./Pages/EventsCards";
import HostingPackages from "./Pages/HostingPackages";
import ServicesSection from "./Pages/Services";
import React from "react";
import Home from "./Pages/Home";
import Certificates from "./Pages/Certificates";
import Team from "./Pages/Team";
import Aboutus from "./Pages/aboutus";
import Product from "./Pages/Product";
import Call from "./Pages/Call"; // Import Call component
import Tech from "./Pages/Tech"; // Import Tech component

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBox,
  faCalendar,
  faSignal,
  faWaveSquare,
} from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navbar />} />
        <Route path="/form" element={<FeedbackForm />} />
        <Route path="/a" element={<Footer />} />
      </Routes>
      {/* Sanskriti Dhakal's Part  */}
      {/* Calling Home Component */}
      <Home />
      {/* Product Section */}
      {/* Product Background/ Main Container */}

      <div
        id="product"
        className=" flex flex-col items-center rounded-[10px] 
      min-h-fit lg:w-[80%] lg:ml-[10%] mt-9 marker:overflow-hidden opacity-90 py-6 px-4 ml-5 mb-4"
      >
        {/* First Product Row */}
        <div className="flex w-full flex-col justify-center content-center mb-4 gap-4 lg:flex-row">
          {/* First Product */}
          {/* Calling Product Component and Passing its Title, Description and cardIcon  */}
          <Product
            title="Tanvi Tech"
            description="We offer IT and computer training at affordable costs. We help you to grow your business by promoting on the digital Market."
            cardIcon={
              <FontAwesomeIcon
                icon={faWaveSquare}
                size="3x"
                color="#4E6398"
                item="center"
              />
            }
          />
          {/* Second Product  */}
          {/* Calling Product Component and Passing its Title, Description and cardIcon  */}
          <Product
            title="Tanvi Tech"
            description="TanviTech is a leading IT company. TanviTech is the best
                  at providing all types of Software and Application Development."
            cardIcon={
              <FontAwesomeIcon
                icon={faBox}
                size="3x"
                color="#4E6398 "
                item="center"
              />
            }
          />
        </div>
        {/* End of First Row  */}
        {/* Second Product Row */}
        <div className="flex min-w-full flex-col justify-center content-center gap-4 lg:flex-row">
          {/* First Product */}
          {/* Calling Product Component and Passing its Title, Description and cardIcon  */}
          <Product
            title="Tech Vision"
            description="TanviTech is a leading IT company. We create cost-effective solutions based on
                  technical expertise to deliver the ultimate customer satisfaction."
            cardIcon={
              <FontAwesomeIcon
                icon={faCalendar}
                size="3x"
                color="#4E6398"
                item="center"
              />
            }
          />
          {/* Second Product  */}
          {/* Calling Product Component and Passing its Title, Description and cardIcon  */}
          <Product
            title="Tech"
            description="TanviTech is a leading IT company. We create cost-effective solutions based on
                  technical expertise to deliver the ultimate customer satisfaction."
            cardIcon={
              <FontAwesomeIcon
                icon={faSignal}
                size="3x"
                color="#4E6398"
                item="center"
              />
            }
          />
        </div>
      </div>
      {/* End of Second Product Row  */}

      {/* End of Product Section  */}
      {/* Calling Call Component  */}
      <Call />
      {/* Calling Tech Component  */}
      <Tech />
      {/* Sanskriti Dhakal's Part */}

      {/* COMPONENTS TO BE USED */}
      <ServicesSection />
      <Certificates />
      <HostingPackages />
      <Team />
      <EventCards />

      <Aboutus />

      <FeedbackForm />
      <Footer />
    </>
  );
}

export default App;
