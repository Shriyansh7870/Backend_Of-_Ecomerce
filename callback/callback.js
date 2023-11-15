const { global } = require("../Dummydata/dummydata");
const { Product, Image, Cart } = require("../Model/Model");
const { ApiFeatures } = require("../callback/SearchItem");
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
  const query = req.query.q;

  try {
    const results = await Product.find({
      $or: [
        { model: { $regex: query, $options: "i" } },
        { specs: { $regex: query, $options: "i" } },
      ],

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
  EnterImageData,
  ImageDatafrom,
  addToCart,
  searchProducts,
};
