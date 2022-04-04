const express = require("express");
const { searchBar } = require("../controllers/search");

const searchRouter = express.Router();

searchRouter.get("/", searchBar);

module.exports = searchRouter;
