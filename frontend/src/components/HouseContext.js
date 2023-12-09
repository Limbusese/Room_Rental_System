import React, { useState, useEffect, createContext, useContext } from "react";
import HouseList from "./HouseList";
import NearMeHouseList from "./NearMeHouse";

export const HouseContext = createContext();
export const NearMeHouseData = createContext({ houseData: [] });

const HouseContextProvider = ({ children, houseData, nearMeState }) => {
  const [houses, setHouses] = useState([]);
  console.log(houses);

  const [address, setAddress] = useState("Enter Location");
  const [addresses, setAddresses] = useState([]);
  const [property, setProperty] = useState("Property (Any)");
  const [properties, setProperties] = useState([]);
  const [price, setPrice] = useState("Price (Any)");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const allDatas = houseData ? houseData : await fetchDefaultData();
        console.log(allDatas);
        console.log("Before setHouses:", allDatas);
        setHouses([...allDatas] || "can't update data");

        console.log("After setHouses:", allDatas);
      } catch (error) {
        alert("Error on fetching data:", error);
        console.log("Error on fetching data:", error);
      }
    };

    const fetchDefaultData = async () => {
      const response = await fetch("/mainProperties", {
        method: "GET",
      });
      return response.json();
    };

    fetchData();
  }, [houseData]);

  useEffect(() => {
    console.log("Updated houses:", houses);
  }, [houses]);

  useEffect(() => {
    const allAddress = houses.map((house) => {
      return houses.address;
    });

    const uniqueCountries = ["Location (Any)", ...new Set(allAddress)];
    setAddresses(uniqueCountries);
  }, []);

  useEffect(() => {
    const allProperties = houses.map((house) => {
      return houses.propertyType;
    });
    const uniqueProperties = ["Property (Any)", ...new Set(allProperties)];
    setProperties(uniqueProperties);
  }, []);

  const handleClick = () => {
    setLoading(true);

    const isDefault = (str) => {
      return str.split(" ").includes("(Any)");
    };

    const minPrice = Number(price.split(" ")[0]);
    const maxPrice = Number(price.split(" ")[2]);

    const newHouses = houses.filter((house) => {
      const housePrice = Number(house.price);
      console.log(housePrice)

      if (
        house.address === address &&
        house.propertyType === property &&
        housePrice >= minPrice &&
        housePrice <= maxPrice
      ) {
        return true;
      }

      if (isDefault(address) && isDefault(property) && isDefault(price)) {
        return true;
      }

      if (!isDefault(address) && isDefault(property) && isDefault(price)) {
        return house.address === address;
      }

      if (!isDefault(property) && isDefault(address) && isDefault(price)) {
        return house.propertyType === property;
      }

      if (!isDefault(price) && isDefault(address) && isDefault(property)) {
        return housePrice >= minPrice && housePrice <= maxPrice;
      }

      if (!isDefault(address) && !isDefault(property) && isDefault(price)) {
        return house.address === address && house.propertyType === property;
      }

      if (!isDefault(address) && isDefault(property) && !isDefault(price)) {
        return housePrice >= minPrice && housePrice <= maxPrice;
      }

      if (isDefault(address) && !isDefault(property) && !isDefault(price)) {
        return house.propertyType === property;
      }

      return false;
    });
    console.log("Filtered Houses:", newHouses);

    setTimeout(() => {
      setHouses(newHouses.length < 1 ? [] : newHouses);
      setLoading(false);
    }, 600);
    
  };

  return (
    <>
      <HouseContext.Provider
        value={{
          address,
          setAddress,
          addresses,
          property,
          setProperty,
          properties,
          price,
          setPrice,
          houses,
          loading,
          handleClick,
        }}
      >
      {children}
{/*        
       <NearMeHouseData.Provider value={{ houseData }}>
         {children}
       </NearMeHouseData.Provider> */}
       
      </HouseContext.Provider>

    </>

    
  );
};

export default HouseContextProvider;
