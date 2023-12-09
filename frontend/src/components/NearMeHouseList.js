import React, { useContext } from "react";
import { Link } from "react-router-dom"; // Correct import statement for Link
import { NearMeContext } from "./NearMe";
import NearMeHouse from "./NearMeHouse";

const NearMeHouseList = () => {
  const { houseData } = useContext(NearMeContext);

  console.log("houseData in NearMeHouseList:", houseData);

  return (
    <>
      <div className="text-center uppercase  text-[30px] my-8 text-black font-semibold border-b-2">
        <h3>-Near Me Houses To Explore-</h3>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-14">
        {houseData && houseData.length > 0
          ? houseData.map((house, index) => (
              <Link to={`/nearmeproperty/${house._id}`} key={index}>
                <NearMeHouse key={index} nearMeHouseDatas={house} />
              </Link>
            ))
          : "Please Click on Near Me "}
      </div>
    </>
  );
};

export default NearMeHouseList;
