const express = require("express");
const movieRoutes = require("./movie");
const userRoutes = require("./user");
// const loadRouter = require("./loadMovies");
const genreRoutes = require("./genre");
const actorRoutes = require("./actor");
const loadRouter = require("./loadData");
const searchRouter = require("./search");

const router = express.Router();

router.use("/movies", movieRoutes);
router.use("/users", userRoutes);
// router.use("/load-movies", loadRouter);
router.use("/genres", genreRoutes);
router.use("/actors", actorRoutes);
router.use("/load-data", loadRouter);
router.use("/search", searchRouter);

module.exports = router;
