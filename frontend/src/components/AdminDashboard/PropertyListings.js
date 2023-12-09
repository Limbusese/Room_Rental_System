import React from "react";
import House from "../House";

return(
   <section className='mb-20'>
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

  </section>
);
export default PropertyListing;