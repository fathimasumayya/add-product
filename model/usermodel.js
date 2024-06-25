const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/addProduct")
  .then(() => {
    console.log("connection successfull");
  })
  .catch((err) => {
    console.error("error", err);
  });
const productSchema = new mongoose.Schema({
  name: String,
});

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
