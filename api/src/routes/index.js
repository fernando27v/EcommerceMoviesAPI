const express = require("express");
const movieRoutes = require("./movie");
const loadRouter=require("./loadMovies")

const router = express.Router();

router.use("/movies", movieRoutes);
router.use("/load-data",loadRouter);


module.exports = router;
