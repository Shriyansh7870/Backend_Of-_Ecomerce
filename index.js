const express = require("express");
const app = express();
const cors = require("cors");
const allcomponet = require("./Componnet/allcomponent");
const connection = require("./config/db");
const port = 4000;

app.use(
  cors({
    origin: "*",
  })
);
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
