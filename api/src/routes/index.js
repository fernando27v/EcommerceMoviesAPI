const express = require("express");
const movieRoutes = require("./movie");
const loadRouter=require("./loadMovies")

const router = express.Router();

router.use("/movies", movieRoutes);

router.use("/load-movies",loadRouter);

module.exports = router;
