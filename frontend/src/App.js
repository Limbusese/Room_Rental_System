import React from "react";

// Import components
import Footer from "./components/Footer";

// Import pages
import Home from "./pages/Home";

import PropertyDetails from "./pages/PropertyDetails";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";


const App = () => {
  return (
    <div className="max-w-full mx-auto bg-slate-100 rounded-lg">
      <Router>
        <Routes>
          <Route path="/register" element={<Login/>} />
          <Route path="/" element={<Home />} />
          
          <Route path="/property/:id" element={<PropertyDetails />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
};

export default App;
