import React, { useContext } from 'react';

//import housecontext
import { HouseContext } from './HouseContext';

//import house
import House from '../components/House'

//import link 
import { Link } from 'react-router-dom';

//import icons
import { ImSpinner9 } from 'react-icons/im';

const HouseList = () => {
  const {houses, loading} = useContext(HouseContext);

  //if loading is true
  if(loading) {
    return (<ImSpinner9 className='mx-auto  text-violet-700 text-4xl animate-spin mt-[24px]'/>)
  }

  if(houses.length < 1){
    return <div className='text-center text-lg'>Sorry! Nothing Found </div>
  }

  
  return <section className='mb-20'>
      <div className='container mx-auto
       '>
        <div className='text-center uppercase  text-[30px] my-8 text-black font-semibold border-b-2'>
          <h3>-Top Houeses To Explore-</h3>
        </div>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-14'>
          {houses.map((house, index) =>{
            return(
              <Link to={`/property/${house.id}`} key={index}>
                <House house = {house} />
              </Link>
            )
          })}
        </div>
       </div>

  </section>;
};

export default HouseList;