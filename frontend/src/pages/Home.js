import React from 'react';

// import banner;
import Hero from '../components/Hero'

import HouseList from '../components/HouseList';
import NearMeHouseList from '../components/NearMeHouseList';
import HomeList from './HomeList';


const Home = ({}) => {
  
  return (
    <div className='min-h-[1800px]'>
     <Hero />
     <HomeList />

   </div>
  );
};

export default Home;
