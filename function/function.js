const { Register } = require("../Model/Model");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const secrete_key = "shriyansh";

const register = async (req, res) => {
  const details = req.body;
  const salt = 10;
  const regData = await Register.findOne({ email: details.email });

  if (regData) {
    return res.send({ msg: "User is already registered" });
  }
  const hashPassword = bcrypt.hashSync(details.password, salt);
  const Obj = {
    name: details.name,
    email: details.email,
    password: hashPassword,
  };
  await Register.create(Obj); //creating db for registered user

  const getRegsDb = await Register.find({});
  console.log(getRegsDb);

  // const token = jwt.sign({userEmail:details.email},secretKey)

  return res.send({ msg: "User is successfully Registered" });
};

const login = async (req, res) => {
  const logData = req.body;
  const logDb = await Register.find({});

  const LogDetails = logDb.find((item) => {
    if (logData.email === item.email) {
      return item;
    }
  });

  if (LogDetails) {
    const encrypt = bcrypt.compareSync(logData.password, LogDetails.password);
    if (encrypt) {
      const token = jwt.sign({ email: logData.email }, secrete_key, {
        expiresIn: "7d",
      });
      console.log({
        msg: "User is successfully Login",
        name: LogDetails.name,
        token: token,
      });
      return res.send({
        msg: "User is successfully Login",
        name: LogDetails.name,
        token: token,
      });
    } else {
      return res.send({ msg: "Check the Password" });
    }
  } else {
    return res.send({ msg: "Check the Email or Try to Register again" });
  }
};
module.exports = { register, login };
