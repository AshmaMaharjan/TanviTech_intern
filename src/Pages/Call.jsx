// Sanskriti Dhakal's Part
import React from "react";
import call from "../assets/TanviImages/call.png";
import Home from "./Home";
import { Link } from "react-scroll";

import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { Link } from "react-scroll";
// import { scrollTo } from "react-scroll/modules/mixins/scroller";

function Call() {
  // const goToHome = () => {
  //   scrollTo(Home);
  // <Link </Link>;
  // };
  return (
    // Main Container For Call Component
    <div id="call" className="[w-50%] bg-[#eceeee]">
      <div
        className="bg-white flex flex-col justify-evenly items-center rounded-[20px] 
        min-h-[50px] lg:w-[80%] lg:ml-40  lg:mb-4 marker:overflow-hidden opacity-80 shadow border-4 p-[10px]  lg:flex-row"
      >
        {/* Container For Heading, Description and Call Button  */}
        <div
          className="bg-[White] flex flex-col order-last text-center justify-center 
        items-center min-w-[30%] lg:order-first lg:mr-4 lg:gap-3"
        >
          {/* Heading Container  */}
          <div className="mb-2 flex text-3xl text-[#4E6398] font-mono flex-col font-bold justify-center lg:text-4xl">
            <h1 className="mr-2">CALL </h1>
            <h1 className="mr-2">FOR </h1>
            <h1>ANY DEMO</h1>
          </div>
          {/* End of Heading Container  */}
          {/* P tag for Description  */}
          <div className="mb-4 lg:text-2xl">
            Call For Any Demo of Our Product Dental Management System , School
            Management System as well As Any Demo Class for Any type of Traning.
          </div>
          {/* End of P Tag  */}

          {/* Button Container  */}
          <div className="flex hover:bg-[rgb(85, 139, 158] content-center w-auto rounded-[red]">
            <Link
              to="home" // Link to the product section
              smooth={true} // Enable smooth scroll
              duration={500} // Duration for smooth scroll
              className="mr-10 cursor-pointer block bg-[#4E6398] text-white px-2 lg:px-4 py-2 rounded-[10px] transition transform hover:-translate-y-2 motion-reduce:transition-none motion-reduce:hover:transform-none 
              hover:bg-[#4E6398] hover:text-white"
            >
              <button
                className="cursor-pointer block bg-[#4E6398] text-white px-4 py-2 rounded-[10px]  content-cente w-40 transition transform hover:-translate-y-2 motion-reduce:transition-none motion-reduce:hover:transform-none 
        hover:bg-[#4E6398] hover:text-white  lg:w-50"
                // onClick={goToHome}
              >
                <FontAwesomeIcon icon={faPhone} /> Call
              </button>
            </Link>
            {/* Testing Smooth Scroll  */}
            {/* <span>
              {" "}
              <Link
                to="home"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              ></Link>
            </span> */}
          </div>
          {/* End of Button Container  */}
        </div>
        {/* End of Heading, Description and Button Container  */}
        {/* Image Container  */}
        <div className=" min-w-[60%] h-full mb-4 overflow-hidden content-center">
          <a href="/home" rel="noopener noreferrer">
            <img
              className="min-w-[600px] h-[100%] object-cover rounded-[10px] opacity-80
               transition transform hover:-translate-y-2 motion-reduce:transition-none motion-reduce:hover:transform-none 
        hover:bg-[#6082a0]"
              src={call}
              alt="Tanvi Tech"
              link="home"
            />
          </a>
        </div>

        {/* End of Image Container  */}
      </div>
    </div>

    // End of Main Call Container
  );
}

export default Call;
