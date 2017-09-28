const mongoose = require('mongoose');
const { Schema } = mongoose;

const menuSchema = new Schema({
  menuType: {
  type: String,
  required: true
  },
  menuSection: {
  type: String,
  required: true
  },
  itemName: {
    type: String,
    required: true
  },
  itemDescription: String,
  itemPrice: Number,
  img: { 
    data: Buffer, 
    contentType: String },
  available: {
    type: Boolean,
    default: true
  },
  special: {
    type: Boolean,
    default: false
  }
});

mongoose.model('menu', menuSchema);