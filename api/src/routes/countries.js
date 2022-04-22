const express = require("express");
const { getCountries } = require("../controllers/countries/getCountries");

const countriesRouter = express.Router();

countriesRouter.get("/", getCountries);

module.exports = countriesRouter;