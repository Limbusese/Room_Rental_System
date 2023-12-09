const mongoose = require('mongoose');
const { Schema } = mongoose;

const propertySchema = new Schema({
    propertyType:{
        type: String,
        required: true
    },
    district:{
        type: String,
        required: true
    },
    address:{
        type: String,
        required: true
    },
    bedrooms:{
        type: Number,
        requiredd: true
    },
    bathrooms:{
        type: Number,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    area:{  
        type: Number,
        required: true
    },
    descriptions:{
        type: String,
        required: true
    },
    images:{
        type: String,
        required: true
    },
    location: {
        type: { 
            type: String, 
            required: true,
            enum: ["Point"],
            default: 'Point'
        },  
        coordinates: {
            type: [Number],
            required: true,
        }
    },
  });

  propertySchema.index({ location: "2dsphere" });
  exports.Property = mongoose.model('Property', propertySchema);
  