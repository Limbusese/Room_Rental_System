import React, {useContext} from 'react';

// import banner;
import Hero from '../components/Hero'

import HouseList from '../components/HouseList';



const Home = () => {
  return (
    <div className='min-h-[1800px]'>
     <Hero />
     <HouseList />
   </div>
  );
};

export default Home;
