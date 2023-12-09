// UserProfile.js
import React, { useContext } from "react";
import { CgProfile } from "react-icons/cg";
import { UserDatasContext } from "./UserDetails"; // Use the correct context name

const UserProfile = () => {
  const { matchedDatas } = useContext(UserDatasContext); // Use the correct context name
  console.log("User Profile is rendering");

  return (
    <>
      <div className="backdrop-blur-lg navigation border p-2 py-3 rounded-lg flex gap-x-2 items-center bg-backdrop-blur-sm hover:text-violet-800 ">
        <CgProfile />
        {!matchedDatas ? (
          <p>Hi, {matchedDatas.first_name}</p>
        ) : (
          <p>User not logged in</p>
        )}
      </div>
    </>
  );
};

export default UserProfile;
