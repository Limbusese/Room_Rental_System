import React, {  useEffect, useState} from "react";
import HouseContextProvider from "./HouseContext";

// export const HouseContexts = createContext();

const FetchedData = () => {
  const [fetchedData, setFetchedData] = useState();
  console.log(fetchedData);
  
    const fetchAllData = async () => {
      try {
        
        const response = await fetch("/mainProperties", {
          method: "GET",
        });

        const allDatas = await response.json();
        console.log(allDatas);

        if(allDatas){
          setFetchedData(allDatas);
          
        } else {
          console.log("Can't update datas.");
        }
        
        
      } catch (error) {
        alert("Error on fetching data:", error);
        console.log("Error on fetching data:", error);
      }
    };

    useEffect(() => {
      fetchAllData();
  }, []);

  useEffect(() => {
    console.log("Content After Updation:", fetchedData);
  }, [fetchedData]);

  return (
    <HouseContextProvider housesData = {fetchedData}/>
  );
};

export default FetchedData;

