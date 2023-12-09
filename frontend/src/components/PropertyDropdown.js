import React, { useContext,  useState } from "react";

//Import icons
import {
  RiArrowDownSLine,
  RiArrowUpSLine,
  RiHome5Line,
} from "react-icons/ri";

//Import headless ui
import { Menu } from "@headlessui/react";
 
//Import house context
import { HouseContext } from "./HouseContext";

const PropertyDropdown = () => {
  const { property, setProperty, properties } = useContext(HouseContext);

  const [isOpen, setIsOpen] = useState(false);


  return (
    <Menu as="div" className="dropdown relative">
      <Menu.Button
        onClick={() => setIsOpen(!isOpen)}
        className="dropdown-btn w-full text-left border-2"
      >
        <RiHome5Line className="dropdown-icon-primary" />
        <div>
          <div className="text-[15px] font-medium leading-tight">{property}</div>
          <div className="text-[13px]">Price Range (any)</div>
        </div>
        {isOpen ? (
          <RiArrowUpSLine className="dropdown-icon-secondary" />
        ) : (
          <RiArrowDownSLine className="dropdown-icon-secondary" />
        )}
      </Menu.Button>

      <Menu.Items className= 'dropdown-menu bg-transparent backdrop-blur-lg '>
        {properties.map((property, index) => {
          return (
            <Menu.Item
            onClick={() => setProperty(property)}
              className={"cursor-pointer hover:text-violet-700 transition"}
              as="li"
              key={index}
            >
              {property}
              
            </Menu.Item>
          );
        })}
        
      </Menu.Items>
    </Menu>
  );
};

export default PropertyDropdown;
