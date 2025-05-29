import React from "react";
import main from "../assets/TanviImages/main.png";
import "./Product";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faBook } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-scroll"; // Import from react-scroll

function Home() {
  //Opens youtube video linked below on another tab
  const handleClick = () => {
    window.location.assign("https://youtu.be/wb3g5QFJmk4", "_blank");
  };

  return (
    <>
      {/* Main Container of Home Component */}
      <div
        id="home"
        className="bg-[White] flex flex-col justify-evenly items-center rounded-[20px] 
        h-[800px] w-[100%] mb-4 mt-2 py-6 marker:overflow-hidden opacity-80 lg:flex-row lg:px-4 "
      >
        {/* Image Container for Tanvi Tech */}
        <div className=" bg-[White] w-[100%] h-fit flex justify-center items-center lg:order-last">
          {/* Div to center the image  */}
          <div className="bg-[White] w-[80%] h-fit lg:w-full">
            <a href="#" rel="noopener noreferrer">
              <img
                className="w-[full] h-[full] object-cover rounded-[30px] opacity-80  animate-wavy"
                src={main}
                alt="Tanvi Tech"
                link="home"
              />
            </a>
          </div>
        </div>
        {/* End of Image Container  */}
        {/* Container for Text And Button  */}
        <div
          className=" bg-[White] flex justify-center items-center py-3 lg:py-6
            w-[75%] text-[xs] min-h-fit rounded-[10px] flex-col lg:mr-3"
        >
          {/* Container for "BEST IT SOLUTION"  */}
          <div className="text-center justify-center font-mono mt-2 lg:mt-4">
            <div className="text-3xl text-[#4E6398] font-mono font-bold mb-2 lg:text-6xl lg:mb-10">
              <h1 className="mb-3"> BEST</h1>
              <h1 className="mb-3">IT</h1>
              <h1 className="mb-3">SOLUTION</h1>
            </div>
          </div>
          {/* End of Container for "BEST IT SOLUTION"  */}
          {/* Paragraph tag containing the detailed information  */}
          <p className="text-center ml-10 justify-center mr-10 lg:text-2xl">
            <a
              className=" text-2xl text-[#4E6398] font-semibold lg:text-3xl"
              href="#"
              rel="noopener noreferrer"
            >
              Tanvi Tech{" "}
            </a>
            (based in Nepal), offers services including custom software and web
            development, IT consulting, digital marketing, and software
            maintenance and support.
          </p>
          {/* End of paragraph tag  */}
          {/* Button Container  */}
          <div className="flex text-center justify-center mt:2 lg:mt-10 lg:text-2xl">
            {/* Get Started Button (Scrolls to Product Section) */}
            <Link
              to="product" // Link to the product section
              smooth={true} // Enable smooth scroll
              duration={500} // Duration for smooth scroll
              className="mr-10 cursor-pointer block bg-[#4E6398] text-white px-2 lg:px-4 py-2 rounded-[10px] transition transform hover:-translate-y-2 motion-reduce:transition-none motion-reduce:hover:transform-none 
              hover:bg-[#6082a0] hover:text-white"
            >
              <FontAwesomeIcon icon={faBook} /> Get Started
            </Link>
            {/* End of Get Started Button */}

            {/* Watch Video Button */}
            <button
              onClick={handleClick}
              className="mr-0 cursor-pointer block
                bg-[#4E6398] text-white px-4 lg:px-4 py-2 rounded-[10px] transition transform hover:-translate-y-2 motion-reduce:transition-none motion-reduce:hover:transform-none 
        hover:bg-[#6082a0] hover:text-white "
            >
              <FontAwesomeIcon icon={faPlay} /> Watch video
            </button>
            {/* End of Watch Video Button */}
          </div>
          {/* End of button container  */}
        </div>
        {/* End of Text and Button Container  */}
      </div>
      {/* End of Main Container */}
    </>
  );
}

export default Home;
