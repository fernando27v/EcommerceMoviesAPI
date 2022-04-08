const express = require("express");
const shoppingCartRouter = express.Router();
const { getItems } = require("../controllers/shopping_cart/getItems");
const {clearItem} = require("../controllers/shopping_cart/clearItem");
const {clearItems} = require("../controllers/shopping_cart/clearItems");
const { postItems } = require("../controllers/shopping_cart/postItems");

shoppingCartRouter.get("/:userId", getItems);
shoppingCartRouter.delete("/item/:userId",clearItem);
shoppingCartRouter.delete("/items/:userId",clearItems);
shoppingCartRouter.post("/:userId", postItems);

module.exports = shoppingCartRouter;
