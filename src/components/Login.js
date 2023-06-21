import { React, useRef, useState, forwardRef } from "react";

//import icons
import { MdOutlineMailLock } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";
import { AiFillUnlock } from "react-icons/ai";
import { BsFillTelephoneForwardFill } from "react-icons/bs";

// import link
import { Link } from "react-router-dom";

const Login = forwardRef(() => {
  const container = useRef();
  const [isActive, setIsActive] = useState(false);
  console.log(isActive);

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
    <div
      ref={container} 
      className=" translate-x-[58rem] ml-7 border-2 text-white border-gray-500 relative w-[400px] rounded-lg  items-center justify-center backdrop-blur-[80px]  transition-[530px] delay-3000 ease-out btnPop z-10"
    >
      <span onClick={closeBtn}>
        <AiOutlineClose className="close-icon" />
      </span>

      {/* Login */}
      <div
        className={`${
          !isActive
            ? "-translate-x-[400px] absolute transition-none hidden"
            : "translate-x-0"
        } w-full  p-[40px] `}
      >
        <h1 className="text-lg text-center font-semibold text-white">Login</h1>
        <form action="#" className="">
          <div className="input-box ">
            <span>
              <MdOutlineMailLock className="icon" />
            </span>
            <input className="input" type="tel" required />
            <label className="input-label">Email</label>
          </div>

          <div className="input-box">
            <span>
              <AiFillUnlock className="icon" />
            </span>
            <input className="input" type="password" required />
            <label className="input-label input:focus~label">password</label>
          </div>

          <div className="remember-forget">
            <label className="remember-forgot-input">
              <input type="checkbox" /> Remember Me
            </label>
            <Link to="/forgot_password" className="links">
              {" "}
              Forgot Password?
            </Link>
          </div>

          <button className="btn" type="submit">
            {" "}
            Login{" "}
          </button>

          <div className="account-register">
            <p>
              Don't have account?{" "}
              <a href="#" className="links" onClick={removeActive}>
                Register
              </a>{" "}
            </p>
          </div>
        </form>
      </div>

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
        <form action="#" className="">
          <div className="input-box ">
            <span>
              <FaUserAlt className="icon" />
            </span>
            <input className="input" type="text" required />
            <label className="input-label">First Name</label>
          </div>

          <div className="input-box ">
            <span>
              <FaUserAlt className="icon" />
            </span>
            <input className="input" type="text" required />
            <label className="input-label">Last Name</label>
          </div>

          <div className="input-box ">
            <span>
              <BsFillTelephoneForwardFill className="icon" />
            </span>
            <input className="input" type="tel" required />
            <label className="input-label">Phone Number</label>
          </div>

          <div className="input-box">
            <span>
              <AiFillUnlock className="icon" />
            </span>
            <input className="input" type="password" required />
            <label className="input-label input:focus~label">password</label>
          </div>

          <div className="remember-forget">
            <label className="remember-forgot-input">
              <input type="checkbox" /> I agree terms & conditions
            </label>
          </div>

          <button className="btn" type="submit">
            {" "}
            Register{" "}
          </button>

          <div className="account-register">
            <p>
              Already have account?{" "}
              <a href="#" className="links" onClick={addActive}>
                Login
              </a>{" "}
            </p>
          </div>
        </form>
      </div>
    </div>
  );
});

export default Login;
