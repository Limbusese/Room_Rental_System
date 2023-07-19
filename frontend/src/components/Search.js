import React, { useContext } from 'react';

//import components
import CountryDropdown from './CountryDropdown'
import PropertyDropDown from './PropertyDropdown'
import PriceRangeDropDown from './PriceRangeDropdown'


//Import icons
import {RiSearch2Line} from 'react-icons/ri'

//Import context
import {HouseContext} from './HouseContext';

const Search = () => {
//  const {houses} = useContext(HouseContext);

 const {handleClick} = useContext(HouseContext)

  return (
  <div className='px-[30px] py-6 text-white lg:w-[1200px] mx-auto flex flex-col lg:flex-row justify-between gap-4 lg:gap-x-3 relative lg:-top-[6rem] lg:shadow-1 lg:backdrop-blur-lg border-[2px] border-gray-300 rounded-lg -mb-[10rem] z-0'>
    <CountryDropdown/>
    <PropertyDropDown/>
    <PriceRangeDropDown/> 
    <button onClick={() => handleClick()} className='bg-violet-700 hover:bg-violet-800 transition w-full lg:max-w-[162px] h-16 rounded-lg flex justify-center items-center text-white'>
      <RiSearch2Line/>
    </button>
  </div>
  );  
};

export default Search;
