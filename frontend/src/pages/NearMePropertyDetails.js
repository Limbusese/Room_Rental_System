import React, { useContext } from "react";

//import useParams
import { useParams } from "react-router-dom";

//import link
import { Link } from "react-router-dom";

// import icons
import { BiBed, BiBath, BiArea } from "react-icons/bi";
import { HouseContext } from "../components/HouseContext";

const PropertyDetails = () => {
  //get the house id
  const { id } = useParams();

  const { houses } = useContext(HouseContext);
  console.log(houses);

  //get the house based on id

  const house = houses.find((houses) => {
    return houses._id === String(id);
  });
  console.log(house);

  return (
    <section>
      <div className=" container mx-auto mb-[80px]">
        <div className=" flex flex-col lg:flex-row lg:items-center justify-between">
          <div className="">
            {/* <h2 className="text-2xl font-semibold">{house.name}</h2> */}
            <h3 className="text-lg mb-4 bg-violet-600 px-4  text-white rounded-full">{house.address}</h3>
          </div>
          <div className="mb-4 lg:mb-0 flex gap-x-2 text-sm ">
            <div className="bg-green-700 px-4 py-1 rounded-full text-white">
              {house.propertyType}
            </div>
            <div className="bg-violet-700 px-4 py-1 rounded-full text-white">
              {house.district}
            </div>
          </div>
          <div className="text-3xl font-semibold text-violet-700 ">
            Rs. {house.price}
          </div>
        </div>
        
        <div className=" flex flex-col items-start gap-8 lg:flex-row">
          <div className="mx-w-[768px] border-l-amber-500">
            <div className="mb-8 h-[30rem]">
              <img src={require(`../images/${house.images}`)} alt="house" className="h-full rounded-md"/>
            </div>
          </div>

          <div className="mb-8 flex-1 bg-white border border-gray-300 w-full rounded-lg py-8 px-8 ">
            <div className="flex gap-x-4 items-center mb-8">
              <div className="w-20 h-20 border borer-gray-700  p-1 rounded-full">
                <img src={house.images} alt="agent" />
              </div>
              <div className="">
                <div className="text-lg font-semibold">Sese Limbu</div>
                <Link to="" className="text-gray-500 text-sm hover:underline">
                  Visit Listing
                </Link>
              </div>
            </div>

            {/* form */}
            <form className="flex flex-col gap-y-4">
              <input
                className="border border-gray-700 focus:border-violet-500 outline-none rounded-sm lg:w-full px-4 h-10 tezt-sm "
                type="text"
                placeholder="Name"
              />
              <input
                className="border border-gray-700 focus:border-violet-500 outline-none rounded-sm lg:w-full px-4 h-10 tezt-sm "
                type="text"
                placeholder="Email"
              />
              <input
                className="border border-gray-700 focus:border-violet-500 outline-none rounded-sm lg:w-full px-4 h-10 tezt-sm "
                type="text"
                placeholder="Phone"
              />
              <textarea
                className="border border-gray-300 focus:border-violet-700 oultine-none resize-none rounded-sm text-gray-400 text-sm w-full p-4 h-36 "
                placeholder="Message"
                defaultValue="Hello I am Interested"
              ></textarea>
              <div className=" flex gap-x-2 lg:flex-col lg:gap-y-2">
                <button className="bg-violet-500 w-full hover:bg-violet-700  rounded p-4 text-white">
                  Send Messaage
                </button>
                <button className="border border-violet-700 tezxt-violet-700 hover:border-violet-500 hoverz;text-violet-500 rounded p-4 text-sm w-full transition">
                  Call Me
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="flex gap-x-6 text-violet-500 mb-6">
          <div className="flex gap-x-2 item-center">
            <BiBed className="text-2xl" />
            <div>{house.bedrooms}</div>
          </div>
          <div className="flex gap-x-2 item-center">
            <BiBath className="text-2xl" />
            <div>{house.bathrooms}</div>
          </div>
          <div className="flex gap-x-2 item-center">
            <BiArea className="text-2xl" />
            <div>{house.area}</div>
          </div>
        </div>
        <div>{house.descriptions}</div>
      </div>
    </section>
  );
};

export default PropertyDetails;
