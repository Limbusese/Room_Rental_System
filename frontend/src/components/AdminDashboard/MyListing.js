import React, { useState, useEffect } from "react";
import { BiBed, BiBath, BiArea } from "react-icons/bi";

import UpdateProperty from "./UpdateProperty";
import DeleteProperty from "./DeleteProperty";



const MyLisiting = () => {
  const [listingProperty, setListingProperty] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/allProperties", {
          method: "GET",
        });

        if (res.ok) {
          const data = await res.json();
          console.log(data);
          setListingProperty(data);
        } else {
          console.log("Error while fetching data!");
        }
      } catch (error) {
        console.error(`${error}`);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-8'>
      {listingProperty.map((property, index) => (
        <div key={index} className=" h-[28.5rem] w-[19rem]  bg-[#a6ebc8] hover:shadow-1 cursor-pointer rounded-md rounded-tl-[70px] pt-[1px]">
          <div>
          <img
            src={require(`../../images/${property.images}`)}
            alt = {`Property ${index}`}
            className="h-[16rem] w-[17rem] border-2 border-white relative rounded rounded-br-[70px] rounded-tl-[70px] m-3"
          />
          </div>

          <div className="ml-4 ">
            <div className="flex gap-x-4 mt-6 items-center">
              <div className=" bg-green-500 rounded-full px-3 text-white text-[14px] text-center">
               { property.propertyType }
              </div>
              <div className="bg-violet-500 rounded-full px-3 text-white text-[14px] ">
               { property.district }
              </div>
              <div className=" text-violet-700 font-semibold text-md">
                { property.price }
              </div>
            </div>

            <div className="text-md font-semibold max-w-[260px] mt-3">
            { property.address }
            </div>

            <div className="flex gap-x-6 mt-2">
              <div className="flex  text-gray-600 font-semibold gap-2">
                <div className="text-[20px]">
                  <BiBed />
                </div>
                <div> { property.bedrooms } </div>
              </div>

              <div className="flex  text-gray-600 font-semibold gap-2">
                <div className="text-[20px]">
                  <BiBath />
                </div>
                <div>{ property.bathrooms } </div>
              </div>

              <div className="flex items-center text-gray-600 font-semibold gap-2">
                <div className="text-[20px]">
                  <BiArea />
                </div>
                <div>
                  { property.area } <span>Sqft</span>
                </div>
              </div>
            </div>

            <div className="flex gap-x-4 mt-3">
             < UpdateProperty property = { property } />
             < DeleteProperty propertyId = { property._id } />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyLisiting;
