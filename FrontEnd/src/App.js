import React from "react";

// Importing components
import Header from "./components/Header";
import Footer from "./components/Footer";


// Importing pages
import Home from "./pages/Home";
import PropertyDetails from "./pages/PropertyDetails";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


const App = () => {
  return (
    <div className="max-w-[1440px] mx-auto bg-white">
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/property/:id" element={<PropertyDetails />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
};

export default App;
