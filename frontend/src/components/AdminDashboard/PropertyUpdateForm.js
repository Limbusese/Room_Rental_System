import React, { forwardRef, useRef, useState, useEffect } from "react";
import { RiMapPinLine } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";
import { MdOutlineBathtub } from "react-icons/md";
import { FcMoneyTransfer } from "react-icons/fc";
import { BiBed, BiArea } from "react-icons/bi";


const PropertyUpdateForm = forwardRef(({ propertyId}) => {
  // const history = useHistory();
  const containers = useRef();

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
  // console.log(property)
 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`/property/${propertyId}`);
        if (res.ok) {
          const data = await res.json();
          setProperty(data);
        } else {
          console.log("Error while fetching property data");
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [propertyId]);

  let name, value;
  const handleInput = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;
    setProperty({ ...property, [name]: value });
  };

  const handleInputImage = (e) => {
    const image = e.target.files[0];
    setProperty({ ...property, images: image });
  };
  
  const closeBtn = () => {
    containers.current.classList.add("btnPop") ;
 };

  const UpdateData = async (e) => {
   e.preventDefault();
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
      const res = await fetch(`/updateProperty/${ propertyId }`, {
        method: "PATCH",
        body: formData,
      });

      if (!res.ok) {
        console.log("Error from server");
      }

      const data = await res.json();
      if (!data) {
        console.log("Server is not sending what to do😒");
      }

      if (data.status === 422 || !data) {
        window.alert("Updation Unsucessfull");
        console.log("Registration Incomplete!");
      } else {
        window.alert("Sucessfull Updation");
        console.log("Successful Updation");
      }
    } catch (error) {
      console.log(`error: ${error}`);
    }
  };

  return (
    <div
      className=" forms  bg-transparent rounded-lg backdrop-blur-[50px] btnPop z-10"
      ref={containers}
    >
      <div className="h-[57rem] rounded-md border-2 border-white">
        <span onClick={closeBtn}>
          <AiOutlineClose className="close-icon" />
        </span>
        <div className=" ">
          <h1 className="text-lg text-center font-semibold text-[#162938] pt-6">
            Update Property
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
                name="price"
                required
                value={property.price}
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
                  name="area"
                  required
                  value={property.area}
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
                    name="descriptions"
                    value={property.descriptions}
                    onChange={handleInput}
                    className=" border-2 border-black bg-transparent w-[22rem]"
                  />
                </div>
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
              </div> 

              <div className="input-box hidden">
                <span>
                  <BiArea className="icon" />
                </span>
                <input
                  className="input"
                  type="number"
                  name="area"
                  required
                  value={property.latitude}
                  onClick={UpdateData}
                />
                <label className="input-label input:focus~label"> Latitude </label>
              </div> 

              <div className="input-box hidden">
                <span>
                  <BiArea className="icon" />
                </span>
                <input
                  className="input"
                  type="number"
                  name="area"
                  required
                  value={property.longitude}
                  onClick={ UpdateData }
                />
                <label className="input-label input:focus~label"> Longitude </label>
              </div>

              <button
                className="btn "
                type="submit"
                name="updateData"
                value=""
                onClick={UpdateData}
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

export default PropertyUpdateForm;
