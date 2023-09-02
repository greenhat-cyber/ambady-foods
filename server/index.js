const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");
const bodyParser = require("body-parser");
const authRoutes = require("./routes/authRoutes")
const productRoutes = require("./routes/productRoutes")

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose
  .connect(process.env.URL)
  .then(() => {
    console.log("DB Connected..");
  })
  .catch((err) => {
    console.log(err);
  });

app.use("/auth", authRoutes)
app.use("/products", productRoutes);

app.listen(process.env.PORT, () =>
  console.log(`Server is running : ${process.env.PORT}...`)
);
