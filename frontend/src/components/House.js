import React from "react";

//import icons
import { BiBed, BiBath, BiArea } from "react-icons/bi";

const House = ({ house }) => {
  const { image, type, country, address, bedrooms, bathrooms, surface, price } =
    house;

  return (
    <div>
      <div className="bg-white rounded-lg shadow-1 p-5 rounded-tl-[90px] w-full max-w-[352px] mx-auto cursor-pointer hover:shadow-2xl transition">
        <div className="  w-[18rem] rounded-tl-[90px] rounded-br-[70px] bg-transparent ">
          <div>
            <img
              className="w-full h-full object-fill mb-8 "
              src={image}
              alt=""
            />
          </div>
        </div>
        <div className="mb-4 flex gap-x-2 text-sm">
          <div
            className=" bg-green-500 rounded-full px-3 text-white
          "
          >
            {type}
          </div>
          <div
            className=" bg-violet-500 rounded-full px-3 text-white
        "
          >
            {country}
          </div>
        </div>
        <div className="text-lg font-semibold max-w-[260px]">{address}</div>
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
              <div>{surface}</div>
            </div>
          </div>
        </div>
        <div className="text-lg font-semibold text-violet-700 my-3">
          {price}
        </div>
      </div>
    </div>
  );
};

export default House;
