import React, {useContext} from 'react';

// import banner;
import Banner from '../components/Banner'
import Search from '../components/Search';
import HouseList from '../components/HouseList';



const Home = () => {
  return (
    <div className='min-h-[1800px]'>
    <Banner />
    <Search />
    <HouseList />
   </div>
  );
};

export default Home;
