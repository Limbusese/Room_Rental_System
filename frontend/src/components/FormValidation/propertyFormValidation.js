export const formValidation = (property) => {
    let errors = {};

    if(!property.propertyType || property.propertyType === "" ) {
        errors.propertyType = "Select PropertyType is required"
    }

    
    if(!property.district) {
        errors.district = "District is required"
    }

    
    if(!property.address) {
        errors.address = "address is required"
    }

    
    if(!property.bedrooms || property.bedrooms <=0) {
        errors.bedrooms = "Please enter valid number of bedrooms"
    }

    if(!property.bathrooms || property.bathrooms <=0) {
        errors.bathrooms = "Please enter valid number of bathrooms"
    }

    if(!property.price || property.price <=0) {
        errors.price = "Please enter valid price"
    }

    if(!property.area || property.area <=0) {
        errors.area = "Please enter valid number of area"
    }

    if(property.descriptions === "" ) {
        errors.descriptions = "Please enter some descriptions"
    }
    if(!property.images) {
        errors.images = "Plese insert an image"
    }


    return errors;
};