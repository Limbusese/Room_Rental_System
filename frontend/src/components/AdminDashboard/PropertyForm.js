import React, { forwardRef, useEffect, useRef, useState } from "react";
import { formValidation } from "../FormValidation/propertyFormValidation"

import { RiMapPinLine } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";
import { MdOutlineBathtub } from "react-icons/md";
import { FcMoneyTransfer } from "react-icons/fc";
import { BiBed, BiArea } from "react-icons/bi";

const PropertyForm = forwardRef(() => {
  // const history = useHistory();
  const container = useRef();

  const [errors, setErrors] = useState({});
  const [states, setStates] = useState(false);
  console.log(states);

  const [property, setProperty] = useState({
    propertyType: "",
    district: "",
    address: "",
    bedrooms: "",
    bathrooms: "",
    price: "",
    area: "",
    descriptions: "",
    images: "",
    latitude: "",
    longitude: "",
  });
  

  const closeBtn = () => {
    container.current.classList.add("btnPop");
  };

 
  const handleInput = (e) => {
    console.log(e);
    let name = e.target.name;
    let value = e.target.value;
    setProperty({ ...property, [name]: value });
  };

  const handleInputImage = (e) => {
    setProperty({ ...property, images: e.target.files[0] });
  };

  useEffect (() => {
    if (states) {
      submitForm()
    }
   }, [states]);

  const PostData = async (e) => {
    e.preventDefault();
    
    const validationErrors = formValidation(property);
    if(Object.keys(validationErrors).length === 0){
      setErrors({});

      if (navigator.geolocation) {
        try {
          navigator.geolocation.getCurrentPosition(
           (position) => {
              const latitude = position.coords.latitude;
              const longitude= position.coords.longitude;
              console.log(`latitude: ${latitude}, longitude: ${longitude}`);
    
                setProperty({
                  ...property,
                  latitude: latitude,
                  longitude: longitude,
                });

                setStates(true);

            });
         
        } catch (error) {
          console.error("Error getting geolocation:", error);
        }
      } else {
        alert("Geolocation is not supported by this browser.");
      }

    } else {
      setErrors(validationErrors);
    }
  
  };

  const submitForm = async () => {
    console.log("button is working well bth")
    const formData = new FormData();

    formData.append("propertyType", property.propertyType);
    formData.append("district", property.district);
    formData.append("address", property.address);
    formData.append("bathrooms", property.bathrooms);
    formData.append("bedrooms", property.bedrooms);
    formData.append("price", property.price);
    formData.append("area", property.area);
    formData.append("descriptions", property.descriptions);
    formData.append("images", property.images);
    formData.append("latitude", property.latitude);
    formData.append("longitude", property.longitude);

    try {
      const res = await fetch("/properties", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        console.log("Error from server");
      }

      const data = await res.json();
       
      if (data.status === 422 || !data) {
        window.alert("Unsucessfull");
        console.log("Registration Incomplete!");
      } else {
        window.alert("Sucessfull Upload of file");
        console.log("Successful Registration");
      }
    } catch (error) {
      console.log(`error: ${error}`);
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
          <form
            action="/properties"
            method="POST"
            encType="multipart/form-data"
            className="px-[32px]"
          >
            <div className="input-box ">
              <select
                name="propertyType"
                className="input bg-transparent"
                value={property.propertyType}
                onChange={handleInput}
              >
                <option>Select Property</option>
                <option value="House">House</option>
                <option value="BHK">BHK</option>
                <option value="Apartment">Apartment</option>
              </select>

              <label for="property" className="input-label">
                Select Type:
              </label>
              <p className="errmessage">{errors.propertyType}</p>
            </div>

            <div className="input-box ">
              <span>
                <RiMapPinLine className="icon" />
              </span>
              <input
                className="input"
                type="text"
                name="district"
                required
                value={property.district}
                onChange={handleInput}
              />
              <label className="input-label">District</label>
              <p className="errmessage">{errors.district}</p>
            </div>

            <div className="input-box ">
              <span>
                <RiMapPinLine className="icon" />
              </span>
              <input
                className="input"
                type="text"
                name="address"
                required
                value={property.address}
                onChange={handleInput}
              />
              <label className="input-label">Address</label>
              <p className="errmessage">{errors.address}</p>
            </div>

            <div className="input-box">
              <span>
                <BiBed className="icon" />
              </span>
              <input
                className="input"
                type="number"
                name="bedrooms"
                required
                value={property.bedrooms}
                onChange={handleInput}
              />
              <label className="input-label input:focus~label">Bedrooms</label>
              <p className="errmessage">{errors.bedrooms}</p>
            </div>

            <div className="input-box">
              <span>
                <MdOutlineBathtub className="icon" />
              </span>
              <input
                className="input"
                type="number"
                name="bathrooms"
                required
                value={property.bathrooms}
                onChange={handleInput}
              />
              <label className="input-label input:focus~label">Bathrooms</label>
              <p className="errmessage">{errors.bathrooms}</p>
            </div>

            <div className="input-box">
              <span>
                <FcMoneyTransfer className="icon" />
              </span>
              <input
                className="input"
                type="number"
                name="price"
                required
                value={property.price}
                onChange={handleInput}
              />
              <label className="input-label input:focus~label"> Price </label>
              <p className="errmessage">{errors.price}</p>

              <div className="input-box">
                <span>
                  <BiArea className="icon" />
                </span>
                <input
                  className="input"
                  type="number"
                  name="area"
                  required
                  value={property.area}
                  onChange={handleInput}
                />
                <label className="input-label input:focus~label"> Area </label>
                <p className="errmessage">{errors.area}</p>
              </div>

              <div className="mb-2">
                <p>Description</p>
                <div className="  text-black rounde-md ">
                  <textarea
                    rows="4"
                    cols="30"
                    name="descriptions"
                    value={property.descriptions}
                    onChange={handleInput}
                    className=" border-2 border-black bg-transparent w-[22rem]"
                  />
                </div>
                <p className="errmessage">{errors.descriptions}</p>
              </div>

              <div className="mb-[30px]">
                <input
                  className="input"
                  type="file"
                  name="images"
                  accept="image/*"
                  required
                  onChange={handleInputImage}
                />
                <label className="input-label input:focus~label" />
                <p className="errmessage">{errors.images}</p>
              </div>

              <div className="input-box hidden">
                <span>
                  <BiArea className="icon" />
                </span>
                <input
                  className="input"
                  type="number"
                  name="latitude"
                  required
                  value={property.latitude}
                />
                <label className="input-label input:focus~label">
                  Latitude
                </label>
              </div>

              <div className="input-box hidden">
                <span>
                  <BiArea className="icon" />
                </span>
                <input
                  className="input"
                  type="number"
                  name="longitude"
                  required
                  value={property.longitude}
                />
                <label className="input-label input:focus~label">
                  Longitude
                </label>
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
