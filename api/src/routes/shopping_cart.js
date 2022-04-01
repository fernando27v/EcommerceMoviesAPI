const express = require("express");
const shoppingCartRouter = express.Router();
const getItems = require("../controllers/shopping_cart/getItems");
const clearItems = require("../controllers/shopping_cart/clearItems");
const postItems = require("../controllers/shopping_cart/postItems");

shoppingCartRouter.get("/:id",getItems);
shoppingCartRouter.delete("/delete/:id",clearItems);
shoppingCartRouter.post("/:id",postItems);

module.exports = {shoppingCartRouter};