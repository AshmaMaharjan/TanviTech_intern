// Sanskriti Dhakal's Part
import React from "react";
import Home from "./Home";

function Product({ title, description, cardIcon }) {
  return (
    <>
      {/* Container for Individual Products  */}
      <div
        className="bg-[White] flex justify-evenly items-center rounded-[40px]
       min-h-[100px] lg:min-w-[50%] w-[90%] p-12 marker:overflow-hidden opacity-90 
       transition transform hover:-translate-y-4 motion-reduce:transition-none motion-reduce:hover:transform-none 
        hover:bg-[#6082a0] hover:opacity-90 hover:text-white shadow border-4 lg:w-[45%]
        "
      >
        {/* Container for Text  */}
        <div>
          {/* Anchor Tag Containing Title  */}
          <a
            className="text-2xl bg-[#4E6398] p-1 inline-block rounded-[10px] mb-[20px] text-white lg:text-3xl"
            href="/Home"
            rel="noopener noreferrer"
          >
            {title}
          </a>
          {/* End of Title Anchor Tag  */}

          {/* Container for Description  */}
          <div className="justify-self-start mr-5 lg:text-2xl">
            {description}
          </div>
          {/* End of Description Container  */}
        </div>
        {/* End of Text Container  */}
        {/* Container for Icon  */}
        <div className="min-w-[50%]]">{cardIcon}</div>
        {/* End of Icon Container  */}
      </div>
      {/* End of Main Container  */}
    </>
  );
}

export default Product;
