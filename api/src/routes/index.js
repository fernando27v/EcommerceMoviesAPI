const express = require("express");
const movieRoutes = require("./movie");
const userRoutes = require("./user");
const loadRouter = require("./loadMovies");

const router = express.Router();

router.use("/movies", movieRoutes);
router.use("/users", userRoutes);
router.use("/load-movies", loadRouter);

module.exports = router;
