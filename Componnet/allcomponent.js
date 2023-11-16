const {
  EnterData,
  datafind,
  ImageDatafrom,
  EnterImageData,
  addToCart,
  searchProducts,
} = require("../callback/callback");
const { Login, Signup } = require("../function/function");
const allcomponet = require("express").Router();

/**************************************Data Push************************/

allcomponet.post("/enterdata", EnterData);

allcomponet.get("/datafind", datafind);

/***************************Crousal****************************** */

allcomponet.post("/enterdataimage", EnterImageData);
allcomponet.get("/imageGet", ImageDatafrom);

/********************************Login*************************** */

allcomponet.post("/register", Signup);
allcomponet.get("/login", Login);

/**********************************Add To Cart**************** */
allcomponet.post("/add-to-cart", addToCart);

/****************SerachProduct****** */
allcomponet.post("/serachProduct", searchProducts);

module.exports = allcomponet;
