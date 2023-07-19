import React, { useState, useEffect, createContext } from "react";
import { housesData } from "../data";

export const HouseContext = createContext();

const HouseContextProvider = ({ children }) => {
  const [houses, setHouses] = useState(housesData);
  const [country, setCountry] = useState("Enter Location");
  const [countries, setCountries] = useState([]);
  const [property, setProperty] = useState("Property (Any)");
  const [properties, setProperties] = useState([]);
  const [price, setPrice] = useState("Price (Any)");
  const [loading, setLoading] = useState(false);

  // Return all countries
  useEffect(() => {
    const allCountries = housesData.map((house) => {
      return house.country;
    });
    // Remove duplicates
    const uniqueCountries = ["Location (Any)", ...new Set(allCountries)];
    setCountries(uniqueCountries);
  }, []);

  // Return all properties
  useEffect(() => {
    const allProperties = houses.map((house) => {
      return house.type;
    });
    // Remove duplicates
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

    const newHouses = housesData.filter((house) => {
      const housePrice = Number(house.price);

      if (
        house.country === country &&
        house.type === property &&
        housePrice >= minPrice &&
        housePrice <= maxPrice
      ) {
        return true;
      }

      if (
        isDefault(country) &&
        isDefault(property) &&
        isDefault(price)
      ) {
        return true;
      }

      if (!isDefault(country) && isDefault(property) && isDefault(price)) {
        return house.country === country;
      }

      if (!isDefault(property) && isDefault(country) && isDefault(price)) {
        return house.type === property;
      }

      if (!isDefault(price) && isDefault(country) && isDefault(property)) {
        return housePrice >= minPrice && housePrice <= maxPrice;
      }

      if (!isDefault(country) && !isDefault(property) && isDefault(price)) {
        return house.country === country && house.type === property;
      }

      if (!isDefault(country) && isDefault(property) && !isDefault(price)) {
        return housePrice >= minPrice && housePrice <= maxPrice;
      }

      if (isDefault(country) && !isDefault(property) && !isDefault(price)) {
        return house.type === property;
      }

      return false;
    });

    setTimeout(() => {
      setHouses(newHouses.length < 1 ? [] : newHouses);
      setLoading(false);
    }, 600);
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
