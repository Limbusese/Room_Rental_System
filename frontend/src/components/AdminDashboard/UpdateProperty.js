import React, { useRef } from "react";
import { GrDocumentUpdate } from "react-icons/gr";
import PropertyUpdateForm from "./PropertyUpdateForm";

const UpdateProperty = ({ property }) => {
 
  const updatePropertyPop = useRef();

  const updateClicked = () => {
    const updateProperty = updatePropertyPop.current.querySelector(".forms");
    updateProperty.classList.add("btnPush");
    updateProperty.classList.remove("btnPop");
  }

    return( 
     <div>
       <div className="absolute right-[7rem] top-8 z-10" ref={updatePropertyPop}>
           <PropertyUpdateForm property = { property }  propertyId = { property._id } />
          </div>

        <div className="flex items-center gap-3  bg-green-500 h-[2rem] w-[7rem] hover:bg-green-600 rounded-sm p-2 text-white" onClick={updateClicked } >
          <div className="text-[20px] ml-3">
             <GrDocumentUpdate />
          </div>
          <div >
            Edit
          </div>
        </div>
      </div>
      
    )
    }

export default UpdateProperty;