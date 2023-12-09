import React from "react";
import House from "../../assets/img/houses/mountainhouse.png";
import { BiBed, BiBath, BiArea } from "react-icons/bi";
import { GrDocumentUpdate } from "react-icons/gr";
import { RiDeleteBin3Line } from "react-icons/ri";
const MyLisiting = () => {
  return (
    <div className=" h-[28.5rem] w-[19rem] bg-[#a6ebc8] hover:shadow-1 cursor-pointer rounded-md rounded-tl-[70px] pt-[1px]">
        <div>
          <img src={House} className="h-[16rem] w-[17rem] border-2 border-white relative rounded rounded-br-[70px] rounded-tl-[70px] m-3" />
        </div>

      <div className="ml-4 ">
        <div className="flex gap-x-4 mt-6">
          <div className=" bg-green-500 rounded-full px-3 text-white text-[14px] text-center">
            Apartment
          </div>
          <div className="bg-violet-500 rounded-full px-3 text-white text-[14px] ">
            Nepal
          </div>
          <div className=" text-violet-700 font-semibold text-md">2000</div>
        </div>

        <div className="text-md font-semibold max-w-[260px] mt-3">
          Krishna Mandir
        </div>

        <div className="flex gap-x-6 mt-2">
          <div className="flex  text-gray-600 font-semibold gap-2">
            <div className="text-[20px]">
              <BiBed />
            </div>
            <div>1</div>
          </div>

          <div className="flex  text-gray-600 font-semibold gap-2">
            <div className="text-[20px]">
              <BiBath />
            </div>
            <div>2</div>
          </div>

          <div className="flex items-center text-gray-600 font-semibold gap-2">
            <div className="text-[20px]">
              <BiArea />
            </div>
            <div>
              400 <span>Sqft</span>
            </div>
          </div>
        </div>

        <div className="flex gap-x-4 mt-3">
          <div className="flex items-center gap-3 bg-green-500 h-[2rem] w-[7rem] hover:bg-green-600 rounded-sm p-2 text-white">
            <div className="text-[20px] ml-3">
              <GrDocumentUpdate />
            </div>
            <div>Edit</div>
          </div>

          <div className="flex items-center gap-3 bg-green-500 h-[2rem] w-[8rem] hover:bg-green-600 rounded-sm p-2 text-white">
            <div className="text-[20px] ml-3">
              <RiDeleteBin3Line />
            </div>
            <div>Delete</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyLisiting;
