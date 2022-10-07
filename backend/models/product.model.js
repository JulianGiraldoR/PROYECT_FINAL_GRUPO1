//modelo products

const mongoose = require("mongoose");

const productSchema =  new mongoose.Schema({
  title: {
    type: String,
    required: true,  
  },
  description: {
    type: String,
    required: true,  
  },
  category: {
    type: String,
    required: true,
    
  },
  origin: {
    type: String,
    required: true,
    
  },
  ingredients: {
    type: String,
    required: true,
  },
  imgUrl: {
    type: String ,
    required: false,
  }
 
},{versionKey:false})

module.exports = mongoose.model("Product", productSchema);
