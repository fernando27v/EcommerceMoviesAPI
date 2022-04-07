const express = require("express");
// const { Movie, Actor, Genre } = require("../db.js");
const { getMovies} = require("../controllers/movies/getMovies");
const { postMovies} = require("../controllers/movies/postMovies");
const { getMovieById} = require("../controllers/movies/getMovieById");
const { deleteMovies} = require("../controllers/movies/deleteMovies");
const { putMovies} = require("../controllers/movies/putMovies");

const movieRouter = express.Router();




/*  movieRouter.get("/", async (req, res) => {
  const movies = await getMovies();
  res.json(movies);
}) */ 


movieRouter.get("/", getMovies);
movieRouter.get("/:id", getMovieById);
movieRouter.post("/", postMovies);
movieRouter.delete("/delete/:id", deleteMovies);
movieRouter.put("/:id", putMovies);





module.exports = movieRouter;
