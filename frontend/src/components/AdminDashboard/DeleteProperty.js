import React from "react";
import { RiDeleteBin3Line } from "react-icons/ri";

const DeleteProperty = ({ propertyId }) => {
  const deleteData = async () => {
    try {
      const response = await fetch(`/deleteProperty/${propertyId}`, {
        method: "DELETE",
      });

      if (response.ok) {
        window.alert("Deleted😊😊");
      } else {
        window.alert("Not Deleted😒😒");
      }
    } catch (error) {
      console.error("Error:", error);
      
    }
  };
  return (
    <div>
      <div className="flex items-center gap-3 bg-green-500 h-[2rem] w-[8rem] hover:bg-green-600 rounded-sm p-2 text-white"onClick={deleteData}>
        <div className="text-[20px] ml-3">
          <RiDeleteBin3Line />
        </div>
        <div>Delete</div>
      </div>
    </div>
  );
};

export default DeleteProperty;
