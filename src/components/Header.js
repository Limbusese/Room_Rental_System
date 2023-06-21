import { React, useRef } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
import { BsFillBagHeartFill } from "react-icons/bs";
import Logo from "../assets/img/logo.svg";
import Login from "./Login";


const Header = () => {
  const logIn = useRef(null);

  const loggedIn = () => {
    const logInDiv = logIn.current.querySelector('div');
    console.log(logInDiv)
    logInDiv.classList.add('btnPush')
    logInDiv.classList.remove('btnPop')
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
            <div className="backdrop-blur-lg hover:underline border p-2 py-3 rounded-lg flex gap-x-2 items-center bg-backdrop-blur-sm">
              <FaPlus />
              <Link className="" to="/addproperty">
                Add Property
              </Link>
            </div>
            <div
              onClick={loggedIn}
              className="backdrop-blur-lg bg-transparent border border-gray-300 cursor-pointer hover:underline px-4 py-3 rounded-lg transition"
            >
              Log In
            </div>
          </div>
        </div>
      </header>
      <div ref={logIn}>
        <Login  />
      </div>
    </div>
  );
};

export default Header;
