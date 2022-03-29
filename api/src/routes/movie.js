const express = require("express");
const { getMovies } = require("../controllers/movie");

const movieRouter = express.Router();

movieRouter.get("/", async (req, res) => {
  const movies = await getMovies();

  res.json(movies);
});

module.exports = movieRouter;
