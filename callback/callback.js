const { global } = require("../Dummydata/dummydata");
const Product = require("../Model/Model");

const EnterData = async (req, res) => {
  const response = await Product.create(global);
  res.send(response);
};

const datafind = async (req, res) => {
  const other = await Product.find({});
  res.send(other);
};

module.exports = {
  EnterData,
  datafind,
};
