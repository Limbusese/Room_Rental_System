import React, { useEffect, useState, createContext } from "react";
import NearMeHouseList from "./NearMeHouseList";
import HouseContextProvider from "./HouseContext";
import HomeList from "../pages/HomeList";
import NearMeUI from "./NearMeUI";

export const NearMeHouseData = createContext({ houseData: [] });
export const NearMeContext = createContext();

const NearMe = ({ children, nearMeState }) => {
  console.log(nearMeState)
  const [location, setLocation] = useState({
    latitude: "",
    longitude: "",
  });
  console.log(location);

  const [houseData, setHouseData] = useState([]);
  console.log(houseData);

  useEffect(() => {
    console.log("houses Data:", houseData);
  }, []);

 
  const handleCheckboxChange = (event) => {
    if (event.target.checked) {
     searchProperty()
    }
  };
  
  const searchProperty = () => {
    if (navigator.geolocation) {
      try {
        navigator.geolocation.getCurrentPosition(async (position) => {
          const longitude = position.coords.longitude;
          const latitude = position.coords.latitude;

          console.log(`latitude: ${latitude}, longitude: ${longitude}`);

          setLocation({
            longitude: longitude,
            latitude: latitude,
          });
        });
      } catch (error) {
        console.log("error message:", error);
      }
    } else {
      alert("Browser doesn't support geolocation!");
    }
  }; 

  useEffect(() => {
    const queryLocation = async () => {
      console.log("clicked");
      const longitude = location.longitude;
      const latitude = location.latitude;

      console.log(latitude, longitude);

      try {
        const response = await fetch("/nearestProperties", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ longitude, latitude }),
        });

        const property = await response.json();
        if (property || property.status === 200) {
          setHouseData(property);
          console.log("successful!!");
          console.log(property);
        } else {
          console.log("unsuccessful!");
        }
      } catch (error) {
        console.log("Error", error);
      }
    };
    if (location.longitude !== "" && location.latitude !== "") {
      queryLocation();
    }
  }, [location]);



  return (
    <>
      <div>
      <div className=" mt-1 z-0">
        <label>
          <input
            type="checkbox"
            className="text-[1em]"
            id="nearMeChecked"
            onClick={handleCheckboxChange}
          />
          <span className="text-white font-[500] text-[1em]">Near Me</span>
        </label>
      </div>
  
    </div>
    <NearMeContext.Provider value={{houseData}} >
        {children}
      </NearMeContext.Provider>
    </>
  );
};

export default NearMe;
