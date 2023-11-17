// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");
// const { Register } = require("../Model/Model");
// const secrete_key = "Shriyansh";

// const Signup = async (req, res) => {
//   try {
//     const { email, password } = req.body;
//     const existingUser = await Register.findOne({ email });
//     if (existingUser) {
//       return res.status(400).json({ message: "User already exist" });
//     }
//     const hashedPassword = await bcrypt.hash(password, 10);
//     const newUser = new Register({ email, password: hashedPassword });
//     await newUser.save();
//     // const token = jwt.sign({ userId: newUser._id }, "secret", {
//     //   expiresIn: "1d",
//     // });
//     return res
//       .status(201)
//       .json({ message: "User created successfully", email });
//   } catch (error) {
//     console.log(error);
//     return res.status(500).json({ message: "Internal Server Error" });
//   }
// };

// const Login = async (req, res) => {
//   try {
//     const { email, password } = req.body;
//     const user = await Register.findOne({ email: email });
//     if (!user) {
//       return res.status(404).json({ message: "User not found" });
//     }
//     const isPasswordValid = await bcrypt.compare(password, user.password);
//     if (!isPasswordValid) {
//       return res.status(401).json({ message: "Password is inValid" });
//     }
//     const token = jwt.sign({ userId: user._id },secrete_key, { expiresIn: "2d" });
//     return res
//       .status(200)
//       .json({ message: "User is successfully logged In", token });
//   } catch (error) {
//     console.log(error);
//     return res.status(500).json({ message: "Internal Server Error" });
//   }
// };
// module.exports = { Signup, Login };

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
