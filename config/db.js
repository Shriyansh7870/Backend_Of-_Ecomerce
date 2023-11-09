const cloudUrl =
  "mongodb+srv://Shriyansh7870:Reso7870@shriyansh.tmbzpvu.mongodb.net/ECommerceProduct?retryWrites=true&w=majority";
const mongoose = require("mongoose");

const connection = async () => {
  try {
    await mongoose.connect(cloudUrl);

    console.log("Connected to the database");
  } catch (err) {
    console.error("Error in connect DataBase", err);
  }
};

module.exports = connection;
