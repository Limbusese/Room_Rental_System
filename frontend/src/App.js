import React from "react";
import Footer from "./components/Footer";
import Home from "./pages/Home";


import PropertyDetails from "./pages/PropertyDetails";
import NearMePropertyDetails from "./pages/NearMePropertyDetails"
import AdminPanel from "../src/components/AdminDashboard/AdminPanel";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import PropertyUpdateForm from "./components/AdminDashboard/PropertyUpdateForm";
import NearMe from "./components/NearMe";
import NearMeHouse from "./components/NearMeHouse";


const App = () => {
  return (
    <div className="max-w-full mx-auto bg-slate-100 rounded-lg">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/updateProperty/:_id" element={ <PropertyUpdateForm /> } />
          <Route path="/dashboard" element={ <AdminPanel/ >} />
          <Route path="/property/:id" element={<PropertyDetails />} />
          <Route path="/nearmeproperty/:id" element={<NearMePropertyDetails />} />
          <Route path="/nearMe" element = {NearMeHouse}/>
        </Routes>
      </Router>
      <Footer />
    </div>
  );
};

export default App;
