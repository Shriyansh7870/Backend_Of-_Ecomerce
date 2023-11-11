const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  category: String,
  id: String,
  type: String,
  model: String,
  image: String,
  price: String,
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

const Product = mongoose.model("data", userSchema);
const shriyansh = mongoose.model("data2", userSchema);
module.exports = { Product, shriyansh };
