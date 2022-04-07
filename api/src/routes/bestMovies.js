const express = require("express");
const bestMoviesRouter = express.Router();
const {bestMovies} = require("../controllers/bestMovies");

bestMoviesRouter.get("/",bestMovies)

module.exports = bestMoviesRouter;