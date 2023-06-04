import React, { useState, useEffect, createContext } from "react";

//import data
import { housesData } from "../data";
import { useAsyncError } from "react-router-dom";

export const HouseContext = createContext();

const HouseContextProvider = ({ children }) => {
  const [houses, setHouses] = useState(housesData);

  const [country, setCountry] = useState("Location (Any)");

  const [countries, setCountries] = useState([]);

  const [property, setProperty] = useState("Property (Any)");

  const [properties, setProperties] = useState([]);

  const [price, setPrice] = useState("Price (Any)");
  // const [prices, setPrices] = useState([]);
  const [loading, setLoading] = useState(false);


  //return all  countries
  useEffect(() => {
    const allCountries = houses.map((house) => {
      return house.country;
    });

    //remove duplicates
    const uniqueCountries = ["Location (Any)", ...new Set(allCountries)];

    setCountries(uniqueCountries);
  }, []);

  //return all properties

  useEffect(() => {
    const allProperties = houses.map((house) => {
      return house.type;
    });

    // remove duplicates
    const uniqueProperties = ["Property (Any)", ...new Set(allProperties)];

    setProperties(uniqueProperties);
  }, []);

  const handleClick = () => {
     setLoading(true)
    //create a function that checks if the string contains '(any)'
    const isDefault = (str) => {
      return str.split(" ").includes("(Any)");
    };
    console.log(isDefault(country));

    //get first value of price and parse it to number
    const minPrice = Number(price.split(" ")[0]);

    //get second value of price and parse it to number
    const maxPrice = Number(price.split(" ")[2]);

    const newHouses = housesData.filter((house) => {
      const housePrice = Number(house.price);

      //if all values are selected
      if (
        house.country === country &&
        house.type === property &&
        housePrice >= minPrice &&
        housePrice <= maxPrice
      ) {
        return house;
      } else {
        console.log("not found");
      }

      //if all values are default
      if (isDefault(country) && isDefault(property) && isDefault(price)) {
        return house;
      }

      //if house is not default
      if (!isDefault(country) && isDefault(property) && isDefault(price)) {
        return house.country === country;
      }

      //if property is not default
      if (!isDefault(property) && isDefault(country) && isDefault(price)) {
        return house.type === property;
      }

      //if price is not default
      if (!isDefault(price) && isDefault(country) && isDefault(property)) {
        {
          if (housePrice >= minPrice && housePrice <= maxPrice) {
            return house;
          }
        }
      }

      //if house and property isn't default
      if(!isDefault(country) && !isDefault(property) && isDefault(price)){
        return house.country === country && house.type === property;
      }

      //if house and price isn't default
      if(!isDefault(country) && isDefault(property) && !isDefault(price)){
        if (housePrice >= minPrice && housePrice <= maxPrice){
          return house.country === country;
        }
      }

      //if property and price isn't default
      if(isDefault(country) && !isDefault(property) && !isDefault(price)){
        if (housePrice >= minPrice && housePrice <= maxPrice){
          return house.type === property;
        }
      }
      
    });

    setTimeout(() => {
       return newHouses.length < 1 ? setHouses([]) : setHouses(newHouses),
       setLoading(false) ;
    },600);
    console.log(newHouses);
  };

  return (
    <HouseContext.Provider
      value={{
        country,
        setCountry,
        countries,
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
    </HouseContext.Provider>
  );
};

export default HouseContextProvider;
