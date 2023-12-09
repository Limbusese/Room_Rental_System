import React, { useRef, useState, forwardRef, createContext } from "react";

import { MdOutlineMailLock } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";
import { AiFillUnlock } from "react-icons/ai";
import { BsFillTelephoneForwardFill } from "react-icons/bs";

import { Link } from "react-router-dom";
import { userFormValidation } from "./FormValidation/UserFormValidation";
import UserProfile from "./UserProfile";
import UserDetails from "./UserDetails";


const Login = forwardRef(({ children }) => {
  // const history = useHistory();
  const container = useRef();
  const [dataErrors, setDataErrors] = useState([]);
  const [dataSucessfull, setDataSucesfull] = useState([])
  console.log(dataErrors);


  const [isActive, setIsActive] = useState(false);

  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    phone: "",
    password: "",
    cpassword: "",
  });

  const [loggedInUser, setLoggedInUser] = useState({
    phone: "",
    password: "",
  });
  console.log(loggedInUser.phone, loggedInUser.password);

  let name, value;

  const handleInput = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
    setLoggedInUser({ ...loggedInUser, [name]: value });
  };

  const PostData = async (e) => {
    e.preventDefault();

    const { first_name, last_name, phone, password, confirmpassword } = user;

    const res = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        first_name,
        last_name,
        phone,
        password,
        confirmpassword,
      }),
    });

    const data = await res.json();

    if (data.status === 422 || !data) {
      window.alert("unSucessfull Registration");
      console.log("Registration Incomplete!");
    } else {
      window.alert("Sucessfull Registration");
      console.log("Successful Registration");
    }
  };

  const GetData = async (e) => {
    e.preventDefault();

    const userValidation = await userFormValidation(loggedInUser);

    if (Object.keys(userValidation).length === 0) {
      setDataErrors([]);
    } else {
      setDataErrors(userValidation);
    }
  };

  const removeActive = () => {
    setIsActive(false);
    container.current.classList.remove("active");
  };
  const addActive = () => {
    setIsActive(true);
    container.current.classList.add("active");
  };

  //button pop
  const closeBtn = () => {
    container.current.classList.add("btnPop");
  };

  return (
   <>
      <div
        ref={container}
        className=" translate-x-[58rem] ml-7 border-2 text-white border-gray-500 relative w-[400px] rounded-lg  items-center justify-center backdrop-blur-[80px]  transition-[530px] delay-3000 ease-out btnPop z-10"
      >
        <span onClick={closeBtn}>
          <AiOutlineClose className="close-icon" />
        </span>

        {/* Registration */}
        <div
          className={`${
            isActive
              ? "absolute translate-x-[400px] hidden"
              : "transform duration-200 ease-in-out"
          }  w-full p-[40px]`}
        >
          <h1 className="text-lg text-center font-semibold text-[#162938]">
            Registration
          </h1>
          <form action="/register" className="">
            <div className="input-box ">
              <span>
                <FaUserAlt className="icon" />
              </span>
              <input
                className="input"
                type="text"
                name="first_name"
                required
                value={user.first_name}
                onChange={handleInput}
              />
              <label className="input-label">First Name</label>
            </div>

            <div className="input-box ">
              <span>
                <FaUserAlt className="icon" />
              </span>
              <input
                className="input"
                type="text"
                name="last_name"
                required
                value={user.last_name}
                onChange={handleInput}
              />
              <label className="input-label">Last Name</label>
            </div>

            <div className="input-box ">
              <span>
                <BsFillTelephoneForwardFill className="icon" />
              </span>
              <input
                className="input"
                type="tel"
                name="phone"
                required
                value={user.phone}
                onChange={handleInput}
              />
              <label className="input-label">Phone Number</label>
            </div>

            <div className="input-box">
              <span>
                <AiFillUnlock className="icon" />
              </span>
              <input
                className="input"
                type="password"
                name="password"
                required
                value={user.password}
                onChange={handleInput}
              />
              <label className="input-label input:focus~label">password</label>
            </div>

            <div className="input-box">
              <span>
                <AiFillUnlock className="icon" />
              </span>
              <input
                className="input"
                type="password"
                name="confirmpassword"
                required
                value={user.confirmpassword}
                onChange={handleInput}
              />
              <label className="input-label input:focus~label">
                Confirm Password
              </label>
            </div>

            <div className="remember-forget">
              <label className="remember-forgot-input">
                <input type="checkbox" /> I agree terms & conditions
              </label>
            </div>

            <button
              className="btn"
              type="submit"
              name="signup"
              value="register"
              onClick={PostData}
            >
              Register
            </button>

            <div className="account-register">
              <p>
                Already have account?
                <button className="links" onClick={addActive}>
                  Login
                </button>
              </p>
            </div>
          </form>
        </div>

        {/* Login */}
        <div
          className={`${
            !isActive
              ? "-translate-x-[400px] absolute transition-none hidden"
              : "translate-x-0"
          } w-full  p-[40px] `}
        >
          <h1 className="text-lg text-center font-semibold text-white">
            Login
          </h1>
          <form action="/login" method="GET" className="">
            <div className="input-box ">
              <span>
                <MdOutlineMailLock className="icon" />
              </span>
              <input
                className="input"
                type="tel"
                name="phone"
                required
                value={loggedInUser.phone}
                onChange={handleInput}
              />
              <label className="input-label">Phone</label>
            </div>

            <div className="input-box">
              <span>
                <AiFillUnlock className="icon" />
              </span>
              <input
                className="input"
                type="password"
                name="password"
                value={loggedInUser.password}
                onChange={handleInput}
                required
              />
              <label className="input-label input:focus~label">password</label>
              <p className="errmessage">{dataErrors.errorMsg}</p>
            </div>

            <div className="remember-forget">
              <label className="remember-forgot-input">
                <input type="checkbox" /> Remember Me
              </label>
              <Link to="/forgot_password" className="links">
                Forgot Password?
              </Link>
            </div>

            <button className="btn" type="submit" onClick={GetData}>
              Login
            </button>

            <div className="account-register">
              <p>
                Don't have account?
                <button className="links" onClick={removeActive}>
                  Register
                </button>
              </p>
            </div>
          </form>
      </div>
    </div>
    
        <UserDetails matchedDatas={dataErrors.matchedUsers} />
   </>
  );
});

export default Login;
