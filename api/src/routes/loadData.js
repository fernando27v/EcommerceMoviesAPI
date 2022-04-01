const express = require("express");
const { Movie, Actor, Genre } = require("../db.js");
const { loadActors } = require("../loadData/loadActors.js");
const { loadMovies } = require("../loadData/loadMovies.js")
const loadRouter = express.Router();



loadRouter.get("/movies", loadMovies);
loadRouter.get("/actors", loadActors);


module.exports = loadRouter;