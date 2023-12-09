import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
import { BsFillBagHeartFill } from "react-icons/bs";
import Logo from "../assets/img/logo.svg";
import Login from "./Login";

const Header = () => {
  const logIn = useRef(null);

  const loggedIn = () => {
    const logInDiv = logIn.current.querySelector("div");
    console.log(logInDiv);
    logInDiv.classList.add("btnPush");
    logInDiv.classList.remove("btnPop");
  };

  return (
    <div>
      <header className="mb-30">
        <div className="container mx-auto flex items-center justify-between left-0 right-0">
          <Link to="/">
            <img src={Logo} alt="Logo" />
          </Link>

          <div className="flex items-center gap-5 text-black-400">
            <div className="text-xl hover:text-violet-300">
              <BsFillBagHeartFill />
            </div>
            <div className="backdrop-blur-lg navigation border p-2 py-3 rounded-lg flex gap-x-2 items-center bg-backdrop-blur-sm hover:text-violet-800 hover:underline">
              <FaPlus />
              <Link className="" to="/dashboard">
                Add Property
              </Link>
            </div>
            <div
              onClick={loggedIn}
              className="navigation hover:text-violet-800 hover:underline"
            >
              <Link to="">Log In</Link>
            </div>
          </div>
        </div>
      </header>
      <div ref={logIn}>
        <Login />
      </div>
    </div>
  );
};

export default Header;
