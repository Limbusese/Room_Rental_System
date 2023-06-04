import React from "react";

// Import image
import Image from "../assets/img/house-banner.png";

const Banner = () => {
  return (
    <section className="h-full max-h-[640px] mb-8 xl:mb-24">
      <div className="flex flex-col lg:flex-row">
        <div className="lg:ml-8 xl:ml-[135px] flex flex-col items-center lg:items-start text-center lg:text-left justify-center flex-1 px-4 lg:px-0">
          <h1 className="text-5xl lg:text-[58px] font-semibold leading:none mb-6">
            <span className="text-violet-700">Rent</span> Your dream homes with us
          </h1>
          <p className="max-w-[480px] mb-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
        </div>
        {/* image */}
        <div className="hidden flex-1 lg:flex justify-end items-end">
          <img src={Image}/>
        </div>
      </div>
    </section>
  );
};

export default Banner;
