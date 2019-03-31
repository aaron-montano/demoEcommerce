// ./model/index.js
const mongoose = require('mongoose');
const Schema   = mongoose.Schema,
      model    = mongoose.model.bind(mongoose),
      ObjectId = mongoose.Schema.Types.ObjectId;

const productSchema = Schema({
  _id: ObjectId,
  name: String,
  image: String,
  price: Number,
  description: String,
  // One to many relationship
  //manufacturer: {type: ObjectId, ref: 'manufacturers'}
  manufacturer: String,
});

const manufacturerSchema = Schema({
  _id: ObjectId,
  name: String,
});

const Product      = mongoose.model('product', productSchema);
const Manufacturer = mongoose.model('manufacturer', manufacturerSchema);

module.exports = {Product, Manufacturer};