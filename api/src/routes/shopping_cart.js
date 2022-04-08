const express = require("express");
const shoppingCartRouter = express.Router();
const { getItems } = require("../controllers/shopping_cart/getItems");
const {clearItem} = require("../controllers/shopping_cart/clearItem");
const {clearItems} = require("../controllers/shopping_cart/clearItems");
const { postItems } = require("../controllers/shopping_cart/postItems");

shoppingCartRouter.get("/:id", getItems);
shoppingCartRouter.delete("/item/:id",clearItem);
shoppingCartRouter.delete("/items/:id",clearItems);
shoppingCartRouter.post("/:id", postItems);

module.exports = shoppingCartRouter;
