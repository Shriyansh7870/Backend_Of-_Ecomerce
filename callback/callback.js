const { global } = require("../Dummydata/dummydata");
const { Product, shriyansh } = require("../Model/Model");

const EnterData = async (req, res) => {
  const response = await Product.create(global);
  res.send(response);
};

const datafind = async (req, res) => {
  const other = await Product.find({});
  res.send(other);
};
const EnterData2 = async (req, res) => {
  const response2 = await shriyansh.create(global);
  res.send(response2);
};

const datafind2 = async (req, res) => {
  const other1 = await shriyansh.find({});
  res.send(other1);
};

const Search = async (req, res) => {
  const query = req.query.q;

  try {
    const results = await Product.find({
      // $or: [
      //   { "model": { $regex: query, $options: "i" } },
      //   { specs: { $regex: query, $options: "i" } },
      // ],

      model: { $regex: "Iphone", $options: "i" },
    });

    res.send(results);
  } catch (err) {
    console.error(err);
    res.status(500).send({ error: err });
  }
};

module.exports = {
  EnterData,
  datafind,
  Search,
  EnterData2,
  datafind2,
};
