import React from "react";

import { Link } from "react-router-dom";
import Logo from "../assets/img/logo.svg";
import { BrowserRouter } from "react-router-dom";

const Header = () => {
  return (
    <BrowserRouter>
      <header className="py-6 border-b">
        <div className="container mx-auto flex justify-between items-center   ">
          {/* logo */}
          <Link to="/">
            <img src={Logo} alt="Logo" />
          </Link>

          {/* links */}
          <div className="flex items-center gap-6">
            <Link className="hover:text-[20px] transition" to="/login" >Log In</Link>
            <Link className="bg-violet-700 hover:bg-violet-800 text-white px-4 py-3 rounded-lg transition" to="/signup">Sign Up</Link>
          </div>
        </div>
      </header>
    </BrowserRouter>
  );
};

export default Header;
