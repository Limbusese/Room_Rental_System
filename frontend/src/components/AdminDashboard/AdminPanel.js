import React, {  useRef, useState } from "react";
import Agent from "../../assets/img/agents/agent1.png";
import Video from "../../../src/assets/img/mainvideos.mp4";
import Logo from "../../../src/assets/img/logo.svg";
import PropertyForm from "./PropertyForm";
import MyListing from "./MyLisiting";

//import icons
import {
  BsFillBarChartFill,
  BsFillCartPlusFill,
  BsFillCartCheckFill,
} from "react-icons/bs";
import { BiSolidLogOut } from "react-icons/bi";
import { MdRealEstateAgent } from "react-icons/md";
import { FcComments } from "react-icons/fc";


const AdminPanel = () => {
  const container = useRef();
  const propertyPop = useRef();
  const [isActive, setIsActive] = useState(false);
  console.log(isActive)

  const dashBoardClicked = () => {
 
    const dashboard = container.current.querySelector('.dashboard');
    dashboard.classList.add('activated');

    const addProperty = container.current.querySelector('.addProperty');
    addProperty.classList.remove('activated');
   

  };

  const addPropertyClicked = () => {

    const dashboard = container.current.querySelector('.dashboard');
    dashboard.classList.remove('activated');
 
    const addProperty = container.current.querySelector('.addProperty');
    addProperty.classList.add('activated');

    const property = propertyPop.current.querySelector(".form");
    property.classList.add("btnPush");
    property.classList.remove("btnPop");
    
  };

  return (
    <div className="h-auto w-[85rem] rounded-lg ml-[80px] mb-6 bg-[#dde1e1]">
      <div className="flex flex-row">
        <div className=" h-[59rem] w-[280px] border-r-[1px] border-[#eceef0] bg-[#d1efe0] p-3 rounded-md">
          <div>
            <a href="/">
              <img src={Logo} />
            </a>
          </div>

          <div className="h-[70px] w-[250px] mr-2 mt-8 rounded-md bg-[#eceef0] ">
            <div className="flex gap-x-7 items-center">
              <div className="w-[60px] h-[60px] border-2 mt-1 borer-gray-700  p-1 rounded-full">
                <img src={Agent} alt="agent" />
              </div>
              <div className="">
                <div className="text-lg font-semibold">Sese Limbu</div>
              </div>
            </div>
          </div>

          <div className="mt-[80px] ">
            <div ref={container}>
              <div
                className={` dashboard flex gap-x-3 items-center mb-8 pl-3 activated `}
                onClick={dashBoardClicked}
              >
                <span className="text-[rgb(153,159,165)] text-lg">
                  <BsFillBarChartFill />
                </span>
                <p className=" cursor-pointer">Dashboard</p>
              </div>

              <div
                className={` addProperty flex gap-x-3 items-center mb-8 pl-3 `}
                onClick={addPropertyClicked}
                
              >
                <span className="text-[rgb(153,159,165)] text-lg">
                  <BsFillCartPlusFill />
                </span>
                <p className=" cursor-pointer">Add Property</p>
              </div>

              <div className="flex gap-x-3 items-center mb-8 pl-3 ">
                <span className="text-[rgb(153,159,165)] text-lg">
                  <BiSolidLogOut />
                </span>
                <p className="cursor-pointer">Log Out</p>
              </div>
            </div>
          </div>
        </div>

        {/* Dashboard */}
        <div>
          <div>
            <div className="font-semibold text-lg mt-8 ml-[4.5rem]">
              <h1>Hi Sese Limbu, Welcomeback</h1>
            </div>
            <div className="h-[20rem] w-[57rem] ml-[70px] mt-9 rounded-md border-2 overflow-hidden  relative ">
              <video
                src={Video}
                autoPlay
                loop
                muted
                playsInline
                className="absolute "
              />
              <div className="absolute top-[3.5rem] left-[3rem] flex flex-row gap-x-9 ">
                <div className="h-[13rem] w-[15rem] rounded-md gap-y-5 backdrop-blur-[30px]  border-2 border-transparent flex flex-col items-center justify-center">
                  <div className="text-white text-[34px]">
                    <MdRealEstateAgent />
                  </div>
                  <div className=" flex flex-col items-center">
                    <p className="text-[30px] text-[rgb(249,217,205)]">0</p>
                    <h3 className="text-[rgb(235,221,174)]">Total Listings</h3>
                  </div>
                </div>

                <div className="h-[13rem] w-[15rem] rounded-md gap-y-5 backdrop-blur-[30px]  border-2 border-transparent flex flex-col items-center justify-center">
                  <div className="text-white text-[34px]">
                    <FcComments />
                  </div>
                  <div className=" flex flex-col items-center">
                    <p className="text-[30px] text-[rgb(249,217,205)]">0</p>
                    <h3 className="text-[rgb(235,221,174)]">Messages</h3>
                  </div>
                </div>

                <div className="h-[13rem] w-[15rem] rounded-md gap-y-5 backdrop-blur-[30px]  border-2 border-transparent flex flex-col items-center justify-center">
                  <div className="text-white text-[34px]">
                    <BsFillCartCheckFill />
                  </div>
                  <div className=" flex flex-col items-center">
                    <p className="text-[30px] text-[rgb(249,217,205)]">0</p>
                    <h3 className="text-[rgb(235,221,174)]">Wishlisted</h3>
                  </div>
                </div>
              </div>
            </div>

            {/* My Listings */}
            <div className="mt-12 pl-[4.5rem]">
              <div className="text-[20px] font-[500] border-b-2">
                <h1>My Listings</h1>
              </div>
              <div className="mt-6">
                < MyListing />
              </div>
            </div>
          </div>
        </div>

        <div className="absolute right-[7rem] top-8" ref={propertyPop}>
          <PropertyForm />
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
