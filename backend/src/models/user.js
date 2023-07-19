const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    first_name:{
        type: String,
        required: true
    },
    last_name:{
        type: String,
        required: true
    },
    phone:{
        type: Number,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    confirmpassword:{
        type: String,
        required: true
    },
  });
  
  exports.User = mongoose.model('User', userSchema);