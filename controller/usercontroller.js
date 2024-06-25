const Product = require("../model/usermodel");

const renderHome = (req, res) => {
  Product.find().then((users) => {
    res.render("form", { users: users });
  });
};

const addProduct = (req, res) => {
  const newProduct = new Product({
    name: req.body.name,
  });
  newProduct
    .save()
    .then((result) => {
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err);
    });
};
module.exports = { renderHome, addProduct };
