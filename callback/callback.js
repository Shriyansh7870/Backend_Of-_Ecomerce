const { global } = require("../Dummydata/dummydata");
const { Product, Image, Cart, Product2 } = require("../Model/Model");
const EnterData = async (req, res) => {
  try {
    const response = await Product.create(global);
    res.send(response);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

const datafind = async (req, res) => {
  try {
    const other = await Product.find({});
    res.send(other);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

const EnterData2 = async (req, res) => {
  try {
    const response = await Product2.create(global);
    res.send(response);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

const datafind2 = async (req, res) => {
  try {
    const other = await Product2.find({});
    res.send(other);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

const EnterImageData = async (req, res) => {
  try {
    const newImage = await Image.create(req.body);
    res.send(newImage);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

const ImageDatafrom = async (req, res) => {
  try {
    const other = await Image.find({});
    res.send(other);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

const addToCart = async (req, res) => {
  try {
    const { email, Id } = req.body;

    let cart = await Cart.findOne({ Id });

    if (!cart) {
      cart = new Cart({ email, items: [{ Id }] });
    } else {
      const existingItem = cart.items.find((item) => item.Id === Id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        cart.items.push({ Id });
      }
    }

    await cart.save();

    res.json({ success: true, cart });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: "Internal Server Error" });
  }
};

const searchProducts = async (req, res) => {
  const { type, category, model, name } = req.query;

  const queryObj = {};

  if (category) {
    queryObj.category = { $regex: category, $options: "i" };
  }
  if (name) {
    queryObj.name = { $regex: name, $options: "i" };
  }

  if (model) {
    queryObj.model = { $regex: model, $options: "i" };
  }

  if (type) {
    queryObj.type = { $regex: type, $options: "i" };
  }

  try {
    const searchedData = await Product2.find(queryObj);
    res.send(searchedData);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = {
  EnterData,
  datafind,
  EnterImageData,
  ImageDatafrom,
  addToCart,
  searchProducts,
  EnterData2,
  datafind2,
};
