const model = require("../models/property");
const userModel = require ("../models/user");

const Property = model.Property;
const Users  = userModel.User;

exports.createProperty =  async (req, res) => {
    try {
        const property = new Property({
          propertyType: req.body.propertyType,
          district: req.body.district,
          address: req.body.address,
          bathrooms: req.body.bathrooms,
          bedrooms: req.body.bedrooms,
          price: req.body.price,
          area: req.body.area,
          descriptions: req.body.descriptions,
          images: req.file.filename,
          location: {
            type: "Point",
            coordinates : [parseFloat(req.body.longitude), parseFloat(req.body.latitude)],
          }
        });

          const savedProperty = await property.save();
          console.log(savedProperty);
          res.status(201).json(savedProperty);
        
      } catch (err) {
        res.status(400).send({ error: err.message });
      }
  };

exports.getAllProperties = async (req, res) => {
    try {
        const properties = await Property.find({ bedrooms: 12 });
        console.log(properties);
        res.json(properties);
      } catch (error) {
        res.status(500).send(error);
      }
};

exports.getMainProperties = async (req, res) => {
  try {
    const allProperties = await Property.find();
    console.log(allProperties);
    res.json(allProperties);
  } catch (error) {
    res.status(500).send(error)
  };
}
exports.getProperty = async (req, res) => {
    const _id = req.params._id.trim();

  try {
    const property = await Property.findById(_id);

    if (property) {
      console.log(property);
      res.json(property);
    } else {
      res.status(404).json({ message: 'Property not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error });
  }
};

exports.updateProperty = async (req, res) => {
    const _id = req.params._id.trim(); 

    try {
      const updatedProperty = await Property.findByIdAndUpdate(
        _id,
        {
          propertyType: req.body.propertyType,
          district: req.body.district,
          address: req.body.address,
          bathrooms: req.body.bathrooms,
          bedrooms: req.body.bedrooms,
          price: req.body.price,
          area: req.body.area,
          descriptions: req.body.descriptions,
          images: req.file.filename,
        },
        { new: true } 
      );
  
      const patchedProperty = updatedProperty.save();
  
      if (patchedProperty) {
        console.log(patchedProperty);
        res.status(201).json(patchedProperty);
  
      } else {
        res.status(404).json({ message: 'Property not updated' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "server error" });
    }
};

exports.deleteProperty = async (req, res) => {
 const _id = req.params._id.trim();
  try{
     const deleteProperty = await Property.findByIdAndDelete(_id);

     if(deleteProperty){
      console.log(deleteProperty);
      res.json(deleteProperty);

     } else {
      res.status(400).json({message: "can't be deleted"});
     } 
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
}; 

exports.userDataDetails = async (req, res) => {
 try {
   const userData = await Users.find();
   console.log(userData);
   res.json(userData);

 } catch (error) {
   res.status(500).send(error);
 }
}


