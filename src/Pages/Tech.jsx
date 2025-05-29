// Sanskriti Dhakal's Part
import React from "react";
import tech from "../assets/TanviImages/tech.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faCheck } from "@fortawesome/free-solid-svg-icons";
function Tech() {
  const handleClick = () => {
    window.location.assign("https://youtu.be/wb3g5QFJmk4", "_blank");
  };
  return (
    <>
      {/* Main Container For Tech Component  */}
      <div id="tech" className="bg-[White] w-full py-6">
        {/* Tech Content Container  */}
        <div
          className="bg-[White] flex flex-col justify-evenly items-center gap-5 rounded-[30px] 
        min-h-fit w-[98%] mb-4 ml-[1%] marker:overflow-hidden opacity-80 shadow border-4 p-[10px] lg:flex-row"
        >
          {/* Image with Button Container  */}
          <div className="w-[95%] overflow-hidden content-center">
            {/* Play Video Button  */}
            <button
              onClick={handleClick}
              className="relative w-full h-[550px] mt-6 mb-6 rounded-[20px] overflow-hidden"
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center blur-[4px]"
                style={{ backgroundImage: `url(${tech})` }}
              ></div>
              {/* End of Background Image  */}
              {/* Icon Container  */}
              <div className="relative flex items-center justify-center w-full h-full">
                {/* Play Icon */}
                <span className="bg-transparent rounded-[90px] p-4">
                  <b>
                    <FontAwesomeIcon icon={faPlay} size="4x" color="red" />
                  </b>
                </span>
                {/* End of Play Icon  */}
              </div>
              {/* End of Icon Container  */}
            </button>
            {/* End of Play Video Button  */}
          </div>
          {/* End of Image With Button Container  */}
          {/* Text Container  */}
          <div className="bg-[White] items-center text-center w-[95%]">
            {/* P tag for Description  */}
            <p className="text-2xl font-semibold mb-2 text-[#4E6398]  lg:text-3xl lg:text-left">
              Truly Your Technology Partner.
            </p>
            <p className="text-2xl mb-2 lg:font-semibold text-[#4E6398] lg:text-left">
              The Corporate Office of Tanvi Tech Pvt.Ltd is situated at
              Narephat-32, Jadibuti Kathmandu Municipality.
            </p>
            <p className="mb-2 lg:text-2xl lg:text-left">
              TanviTech Pvt.Ltd. is a Leading IT company that provide various
              services and some real life problem solving solution, maintains
              uniqueness in its brand and service as a professional computer
              institute in Nepal since its establishment in 2020. It basically
              provides computer training in programming languages like C, C++,
              Java, ASP.NET, C#, PHP, Oracle, SQL Server, and Android
              Development.
            </p>
            {/* End of Description P Tag  */}
            {/* Unordered List for All Features  */}
            {/* Each List item contains a tick mark and the feature  */}
            <ul className="text-2xl mb-2 lg:font-semibold lg:text-left">
              <li>
                {" "}
                <FontAwesomeIcon
                  icon={faCheck}
                  size="1x"
                  color="#599faf"
                  item="center"
                />{" "}
                Web Design, Apps & Software Development.
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faCheck}
                  size="1x"
                  color="#599faf"
                  item="center"
                />{" "}
                TechnologySolution & IT Support.
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faCheck}
                  size="1x"
                  color="#599faf"
                  item="center"
                />{" "}
                IT Traning & Global Certification.
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faCheck}
                  size="1x"
                  color="#599faf"
                  item="center"
                />{" "}
                Domain Name & Web Hosting.
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faCheck}
                  size="1x"
                  color="#599faf"
                  item="center"
                />{" "}
                IT officer & Computer Operator Preparation.
              </li>
            </ul>
            {/* End of Unordered List of Features  */}
          </div>
          {/* End of Text Container  */}
        </div>
        {/* End of Content Container  */}
      </div>
      {/* End of Main Container  */}
    </>
  );
}

export default Tech;
