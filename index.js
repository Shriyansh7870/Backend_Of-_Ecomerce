require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const allcomponet = require("./Componnet/allcomponent");
const bodyParser = require("body-parser");

const connection = require("./config/db");
const port = 4000;
app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);
app.use(bodyParser.json());

app.use("/api", allcomponet);

app.get("/", (req, res) => {
  res.send("shriyansh kumar");
});

app.listen(port, async () => {
  try {
    await connection();
    console.log("Server started after connection");
  } catch (err) {
    console.log(err, "error ocuured");
  }
  console.log(`Server is running on http://localhost:${port}`);
});
