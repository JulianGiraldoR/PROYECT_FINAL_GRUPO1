const mongoose = require("mongoose");

const contactFormSchema =  new mongoose.Schema({
  name: {
    type: String,
    required: true,  
  },
  email: {
    type: String,
    required: true,  
  },
  cellNumber: {
    type: String,
    required: true,
    
  },
  subject: {
    type: String,
    required: true,
    
  },
  text: {
    type: String,
    required: true,
  }
  
},{
  versionKey:false}
   // You should be aware of the outcome after set to false
);


module.exports = mongoose.model("ContactForm", contactFormSchema);
