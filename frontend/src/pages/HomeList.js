import React, { useContext } from "react";
import HouseList from "../components/HouseList";
import NearMeHouseList from "../components/NearMeHouseList";
import { NearMeContext } from "../components/NearMe";


const HomeList = () => {
  const {houseData} = useContext(NearMeContext)

  return (
    <section className="mb-20">
      <div className="container mx-auto">
        <div>
          {houseData && houseData.length > 0 ? (
            <NearMeHouseList />
          
            ) : (
              <HouseList/>
          )}
        </div>
      </div>
    </section>
  );
};

export default HomeList;
