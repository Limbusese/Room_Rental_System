import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import HouseContextProvider from "./components/HouseContext";
import NearMe from "./components/NearMe";
import UserDetails from "./components/UserDetails";

const root = document.getElementById("root");

ReactDOM.render(
  <React.StrictMode>
    <HouseContextProvider>
     <NearMe>
        <UserDetails>
          <App />
        </UserDetails>
        </NearMe>
    </HouseContextProvider>
  </React.StrictMode>,
  root
);
