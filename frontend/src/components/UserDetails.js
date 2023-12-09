// UserDetails.js
import React, { createContext, useState, useEffect } from "react";

export const UserDatasContext = createContext({ matchedDatas: null, updateMatchedData: () => {} });

const UserDetails = ({ children, matchedDatas }) => {
console.log(matchedDatas)


  return (
    <UserDatasContext.Provider value={{ matchedDatas }}>
      {children}
    </UserDatasContext.Provider>
    
  );
};

export default UserDetails;
