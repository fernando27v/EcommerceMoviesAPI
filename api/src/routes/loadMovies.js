const express = require("express");
const { Movie, Actor, Genre } = require("../db.js");
const { loadMovies } = require("../loadData/loadMovies")
const loadRouter = express.Router();



loadRouter.get("/", loadMovies);


module.exports = loadRouter;