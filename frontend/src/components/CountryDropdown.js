import React, { useContext, useState } from "react";
import { RiMapPinLine } from "react-icons/ri";
import { Combobox } from "@headlessui/react";
import { HouseContext } from "./HouseContext";
import NearMe from "./NearMe";

const CountryDropdown = () => {
  const { address, setAddress, addresses } = useContext(HouseContext);
  const [query, setQuery] = useState("");

  const filteredLocations = () => {
    if (query === "") {
      return addresses;
    } else {
      return addresses.filter((location) =>
        location.toLowerCase().includes(query.toLowerCase())
      );
    }
  };

  return (
    <div>
      <Combobox
        as="div"
        className="dropdown flex items-center z-30 "
        onChange={setAddress}
      >
        <div className="flex items-center ">
          <RiMapPinLine className="absolute ml-6 dropdown-icon-primary text" />
          <Combobox.Input
            className="  text-center dropdown-btn text-white bg-transparent cursor-pointer relative "
            onChange={(event) => setQuery(event.target.value)}
            placeholder={address}
          />
        </div>

        <Combobox.Options className=" absolute top-[90px] w-[15rem] px-8  text-white rounded-b-lg bg-transparent shadow-1 z-50">
          {filteredLocations().map((location, index) => (
            <Combobox.Option
              className="hover:text-violet-400 ml-[52px]"
              key={index}
              value={location}
            >
              {location}
            </Combobox.Option>
          ))}
        </Combobox.Options>
      </Combobox> 

    </div>
  );
};

export default CountryDropdown;
