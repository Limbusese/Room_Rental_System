import React, { useContext } from "react";
import { BiBed, BiBath, BiArea } from "react-icons/bi";
import { RiPinDistanceFill } from "react-icons/ri";
import { HouseContext } from "./HouseContext";

const NearMeHouse = ({ nearMeHouseDatas }) => {
  const {
    images,
    address,
    bedrooms,
    bathrooms,
    price,
    area,
    propertyType,
    district,
    dist
  } = nearMeHouseDatas;
  console.log({calculated: dist.calculated});

  return (
    <div className="bg-white rounded-lg shadow-1 p-5 rounded-tl-[90px] w-full max-w-[352px] mx-auto cursor-pointer hover:shadow-2xl transition">
      <div className="w-[18rem] rounded-tl-[90px] rounded-br-[70px] bg-transparent ">
        <img
          className="w-[18rem] h-[18rem] object-fill mb-8 rounded-tl-[90px] rounded-br-[70px] bg-transparent"
          src={require(`../images/${images}`)}
          alt="property images"
        />
      </div>
      <div className="flex gap-x-7 mt-6 items-center ">
        <div className=" bg-green-500 rounded-full px-7  py-2 text-white text-[17px] text-center">
          {propertyType}
        </div>
        <div className="bg-violet-500 rounded-full px-7 py-2 text-white text-[17px] ">
          {district}
        </div>
      </div>
      <div className="text-lg mt-3 font-semibold max-w-[260px]">{address}</div>
      <div className="flex gap-x-4 my-4">
        <div>
          <div className="flex items-center text-gray-600  gap-1">
            <div className="text-[20px]">
              <BiBed />
            </div>
            <div>{bedrooms}</div>
          </div>
        </div>
        <div>
          <div className="flex items-center text-gray-600  gap-1">
            <div className="text-[20px]">
              <BiBath />
            </div>
            <div>{bathrooms}</div>
          </div>
        </div>
        <div>
          <div className="flex items-center text-gray-600  gap-1">
            <div className="text-[20px]">
              <BiArea />
            </div>
            <div>{area}</div>
          </div>
        </div>
        <div>
          <div className="flex items-center text-gray-600  gap-1">
            <div className="text-[20px]">
            <RiPinDistanceFill />
            </div>
            <div>{(dist.calculated / 1000).toFixed(2)}<span>Km </span></div>

          </div>
        </div>
      </div>
      <div className="text-lg font-semibold text-violet-700 my-3"><span>Rs:</span>{price}</div>
    </div>
  );
};

export default NearMeHouse;
