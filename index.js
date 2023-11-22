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
const stripe = require("stripe")(
  "sk_test_51OFIomSI0xtOp9M48W366HBE5QDo7oR2HKZyLVW2Dg9YNvJ95E2aIVJbHen4bLdsrwsraF190ouIGyLXRta4GpFs00GW4XRqmb"
);

app.post("/out/create-checkout-session", async (req, res) => {
  const { products } = req.body;
  console.log(products);
  const lineItems = products.map((product) => ({
    price_data: {
      currency: "inr",
      product_data: {
        name: product.model,
      },
      unit_amount: product.price * 100,
    },
    quantity: product.quantity,
  }));
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: lineItems,
    mode: "payment",
    success_url: "jolly-marzipan-656fc0.netlify.app/finalMessage",
    cancel_url: "jolly-marzipan-656fc0.netlify.app/cancel",
  });
  res.json({ id: session.id });
});

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
