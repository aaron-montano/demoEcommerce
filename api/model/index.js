// ./model/index.js
const mongoose = require('mongoose');
// const bcrypt = require('bcrypt');
// var SALT_WORK_FACTOR = 10;

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
 // manufacturer: {type: ObjectId, ref: 'manufacturers'}
  manufacturer: String,
});

const manufacturerSchema = Schema({
  _id: ObjectId,
  name: String,
});

// const userSchema = Schema({
//   username: { type: String, require: true, index: {unique: true}},
//   password: {type: String, required: true},
// });

const Product      = mongoose.model('product', productSchema);
const Manufacturer = mongoose.model('manufacturer', manufacturerSchema);
// const User         = mongoose.model('user', userSchema);

module.exports = {Product, Manufacturer};
//, User};