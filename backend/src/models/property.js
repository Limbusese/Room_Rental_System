const mongoose = require('mongoose');
const { Schema } = mongoose;

const propertySchema = new Schema({
    type:{
    String,
        required: true
    },
    district:{
        type: String,
        required: true
    },
    address:{
        type: String,
        required: true,
    },
    bedrooms:{
        type: Int32Array,
        requird: true,
    },
    bathrooms:{
        type: Int32Array,
        requird: true,
    },
    price:{
        type: Float64Array,
        required: true,
    },
    area:{
        type: Float64Array,
        required: true,
    },
    description:{
        type: String,
        required: true,
    },
    image:[{
        type:String,
        required: true,
    }]
  });
  
  exports.Property = mongoose.model('Property', propertySchema);