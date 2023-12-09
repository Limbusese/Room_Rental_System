import React, { forwardRef, useRef, useState } from "react";

import { RiMapPinLine } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";
import { MdOutlineBathtub } from "react-icons/md";
import { FcMoneyTransfer } from "react-icons/fc";
import { BiBed, BiArea } from "react-icons/bi";
import { BsFillTelephoneForwardFill } from "react-icons/bs";

const PropertyForm = forwardRef(() => {
  // const history = useHistory();
  const container = useRef();
  const [isActive, setIsActive] = useState(false);

  const closeBtn = () => {
    container.current.classList.add("btnPop");
  };

  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    phone: "",
    password: "",
    cpassword: "",
  });

  let name, value;

  const handleInput = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
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
      window.alert("Sucessfull Registration");
      console.log("Registration Incomplete!");
    } else {
      window.alert("Sucessfull Registration");
      console.log("Successful Registration");
    }
  };

  return (
    <div
      className=" form  bg-transparent rounded-lg backdrop-blur-[50px] btnPop"
      ref={container}
    >
      <div className="h-[57rem] rounded-md border-2 border-white">
        <span onClick={closeBtn}>
          <AiOutlineClose className="close-icon" />
        </span>
        <div className=" ">
          <h1 className="text-lg text-center font-semibold text-[#162938] pt-6">
            Add Property
          </h1>
          <form action="/register" className="px-[32px]">
            <div className="input-box ">
              <select name="property" className="input bg-transparent">
                <option>Select Property</option>
                <option value="House">House</option>
                <option value="BHK">BHK</option>
                <option value="Apartment">Apartment</option>
                value={user.first_name}
                onChange={handleInput}
              </select>

              <label for="property" className="input-label">
                Select Type:
              </label>
            </div>

            <div className="input-box ">
              <span>
                <RiMapPinLine className="icon" />
              </span>
              <input
                className="input"
                type="text"
                name="last_name"
                required
                value={user.last_name}
                onChange={handleInput}
              />
              <label className="input-label">District</label>
            </div>

            <div className="input-box ">
              <span>
                <RiMapPinLine className="icon" />
              </span>
              <input
                className="input"
                type="text"
                name="phone"
                required
                value={user.phone}
                onChange={handleInput}
              />
              <label className="input-label">Location</label>
            </div>

            <div className="input-box">
              <span>
                <BiBed className="icon" />
              </span>
              <input
                className="input"
                type="number"
                name="password"
                required
                value={user.password}
                onChange={handleInput}
              />
              <label className="input-label input:focus~label">Bedrooms</label>
            </div>

            <div className="input-box">
              <span>
                <MdOutlineBathtub className="icon" />
              </span>
              <input
                className="input"
                type="number"
                name="confirmpassword"
                required
                value={user.confirmpassword}
                onChange={handleInput}
              />
              <label className="input-label input:focus~label">
                {" "}
                Bathrooms{" "}
              </label>
            </div>

            <div className="input-box">
              <span>
                <FcMoneyTransfer className="icon" />
              </span>
              <input
                className="input"
                type="number"
                name="confirmpassword"
                required
                value={user.confirmpassword}
                onChange={handleInput}
              />
              <label className="input-label input:focus~label"> Price </label>

              <div className="input-box">
                <span>
                  <BiArea className="icon" />
                </span>
                <input
                  className="input"
                  type="number"
                  name="confirmpassword"
                  required
                  value={user.confirmpassword}
                  onChange={handleInput}
                />
                <label className="input-label input:focus~label"> Area </label>
              </div>

              <div className="mb-2">
                <p>Description</p>
                <div className="  text-black rounde-md ">
                  <textarea
                    rows="4"
                    cols="30"
                    className=" border-2 border-black bg-transparent w-[22rem]"
                  />
                </div>
              </div>

              <div className="mb-[30px]">
                <input
                  className="input"
                  type="file"
                  name="confirmpassword"
                  required
                  value={user.confirmpassword}
                  onChange={handleInput}
                />
                <label className="input-label input:focus~label" />
              </div>

              <button
                className="btn "
                type="submit"
                name="signup"
                value="register"
                onClick={PostData}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
});

export default PropertyForm;
