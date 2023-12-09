import React from "react"; 
import Video from "../assets/img/video.mp4";
import Search from "./Search";
import Header from "../components/Header";


const Hero = () => {
  return (
    <section className="relative h-[780px] rounded-lg ">
      <div>
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute h-[750px] w-full object-cover rounded-lg  "
        >
          <source src={Video} />
        </video>
        <div className="absolute top-3 -left-3 right-0">
          <Header />
        </div>  
        <div className="absolute  md:mt-[100px]   lg:mt-[230px] lg:ml-[23rem] text-gray-300">
          <h1 className="text-5xl lg:text-[48px] font-semibold leading:none uppercase ">
            <span className="text-yellow-600 text-center ">Rent</span> 
            <h3 className="mt-3">Your Dream Home With Us</h3>
          </h1>
        </div>
        <div className="absolute lg:inset-x-0 bottom-6  md:left-[30%] -translate-y-10 mb-[15rem]">
          <Search />
        </div>
      </div>
    </section>
  );
};

export default Hero;
