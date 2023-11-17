const {
  EnterData,
  datafind,
  ImageDatafrom,
  EnterImageData,
  addToCart,
  searchProducts,
} = require("../callback/callback");
const { register, login } = require("../function/function");
const allcomponet = require("express").Router();

/**************************************Data Push************************/

allcomponet.post("/enterdata", EnterData);

allcomponet.get("/datafind", datafind);

/***************************Crousal****************************** */

allcomponet.post("/enterdataimage", EnterImageData);
allcomponet.get("/imageGet", ImageDatafrom);

/********************************Login*************************** */

allcomponet.post("/register", register);
allcomponet.post("/login", login);

/**********************************Add To Cart**************** */
allcomponet.post("/add-to-cart", addToCart);

/****************SerachProduct****** */
allcomponet.get("/serachProduct", searchProducts);

module.exports = allcomponet;
