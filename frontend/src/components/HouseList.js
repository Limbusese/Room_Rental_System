import React, { useContext ,useEffect} from 'react';
import { HouseContext } from './HouseContext';
import House from '../components/House'
import { Link } from 'react-router-dom';

import { ImSpinner9 } from 'react-icons/im';

const HouseList = ({nearMeState}) => {
  const {houses, loading } = useContext(HouseContext);
  console.log({houses})
  
    console.log('HouseList effect triggered with new houses:', loading  ); 
   

  
  if(loading) {
    return (<ImSpinner9 className='mx-auto  text-violet-700 text-4xl animate-spin mt-[24px]'/>)
  }

  if(houses.length < 1){
    return <div className='text-center text-lg'>Sorry! Nothing Found </div>
  }

  
  return <section className='mb-20'>

        
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-14'>
          {houses.map(( house, index) =>{
            return(
              <Link to={`/property/${house._id}`} key={index}>
                <House house = {house} />
              </Link>
            )
          })}
        </div>
    

  </section>;
};

export default HouseList;