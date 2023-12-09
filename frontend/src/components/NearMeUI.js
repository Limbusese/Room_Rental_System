import React, { Children, createContext, useState } from "react";
import NearMe from "./NearMe";
import NearMeHouseList from "./NearMeHouseList";

export const NearMeContext = createContext();
const NearMeUI = ({houseData, Children}) => {


  // const handleCheckboxChange = (event) => {
  //   if (event.target.checked) {
  //     setNearMeState(true);
  //   }
  // };

  return (
    <div>
      {/* <div className=" mt-1 z-0">
        <label>
          <input
            type="checkbox"
            className="text-[1em]"
            id="nearMeChecked"
            onClick={handleCheckboxChange}
          />
          <span className="text-white font-[500] text-[1em]">Near Me</span>
        </label>
      </div> */}
      <NearMeContext.Provider value={{houseData}} >
        {Children}
      </NearMeContext.Provider>
   {/* <NearMeHouseList nearMeData = {houseData}/> */}
    </div>
  );
};

export default NearMeUI;
