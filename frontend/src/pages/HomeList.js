import React, { useContext } from "react";
import HouseList from "../components/HouseList";
import NearMeHouseList from "../components/NearMeHouseList";
import { HouseContext, NearMeHouseData } from "../components/HouseContext";

const HomeList = ({nearMeState}) => {
 console.log(nearMeState)
  return (
    <section className="mb-20">
      <div className="container mx-auto">
        <div className="text-center uppercase  text-[30px] my-8 text-black font-semibold border-b-2">
          <h3>-Top Houses To Explore-</h3>
        </div>
        <div>
          {/* {nearMeState && nearMeState.length > 0 ? (
            <HouseList />
            ) : (
              <HouseList />
              
          )} */}
          <HouseList/>
          <NearMeHouseList/>

        </div>
      </div>
    </section>
  );
};

export default HomeList;
