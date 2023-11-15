const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
  category: String,
  id: String,
  type: String,
  model: String,
  image: String,
  price: String,
  quantity: Number,
  specs: {
    Model: String,
    Size: String,
    Color: String,
    "Closure Type": "String",
    Type: String,
    Weight: String,
    Brand: String,
    Variety: String,
    Packaging: String,
    RAM: String,
    ROM: String,
    expandableMemory: String,
    display: String,
    processor: String,
    graphics: String,
    operatingSystem: String,
    battery: String,
    Material: String,
    Style: String,
    Pattern: String,
  },
});
const imageSchema = new mongoose.Schema({
  url: {
    type: String,
    required: true,
  },
  alt: {
    type: String,
    default: "not found",
  },
});

/*******************User Register and Login******* */
const userRegister = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: Number,
  },
});

/********************************************Add To Cart */

const cartSchema = new mongoose.Schema({
  email: { type: String, required: true },
  items: [
    {
      Id: { type: String, required: true },
      quantity: { type: Number, default: 1 },
    },
  ],
});

const Cart = mongoose.model("Cart", cartSchema);
const Register = mongoose.model("user", userRegister);
const Image = mongoose.model("Image", imageSchema);
const Product = mongoose.model("data", userSchema);
module.exports = {
  Product,
  Register,
  Image,
  Cart,
};
