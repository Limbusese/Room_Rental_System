import React, { useContext,  useState } from "react";

//Import icons
import {
  RiArrowDownSLine,
  RiArrowUpSLine,
  RiWallet3Line,
} from "react-icons/ri";

//Import headless ui
import { Menu } from "@headlessui/react";
 
//Import house context
import { HouseContext } from "./HouseContext";

const PriceRangeDropdown = () => {
  const { price, setPrice } = useContext(HouseContext);


  const [isOpen, setIsOpen] = useState(false);

  const prices = [
    {
      value : "Price (Any)",
    },
    {
      value: '100000 - 200000',
    },
    {
      value: '210000 - 300000',
    },
    {
      value: '310000 - 400000'
    }
  ];

  return (
    <Menu as="div" className="dropdown relative">
      <Menu.Button
        onClick={() => setIsOpen(!isOpen)}
        className="dropdown-btn w-full text-left"
      >
        <RiWallet3Line className="dropdown-icon-primary" />
        <div>
          <div className="text-[15px] font-medium leading-tight">{price}</div>
          <div className="text-[13px]"> Choose price range </div>
        </div>
        {isOpen ? (
          <RiArrowUpSLine className="dropdown-icon-secondary" />
        ) : (
          <RiArrowDownSLine className="dropdown-icon-secondary" />
        )}
      </Menu.Button>

      <Menu.Items className= 'dropdown-menu  bg-transparent   backdrop-blur-lg'>
        {prices.map((price, index) => {
          return (
            <Menu.Item
            onClick ={() => setPrice(price.value)}
              className={"cursor-pointer hover:text-violet-700 transition"}
              as="li"
              key={index}
            >
              {price.value}
              
            </Menu.Item>
          );
        })}
        
      </Menu.Items>
    </Menu>
  );
};

export default PriceRangeDropdown;
