const express = require("express");
const { loadActors } = require("../loadData/loadActors.js");
const { loadMovies } = require("../loadData/loadMovies.js");
const { loadGenres } = require("../loadData/loadGenres");
const loadRouter = express.Router();

loadRouter.get("/movies", loadMovies);
loadRouter.get("/actors", loadActors);
loadRouter.get("/genres", loadGenres);

module.exports = loadRouter;
