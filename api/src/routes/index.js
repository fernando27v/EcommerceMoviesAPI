const express = require("express");
const movieRoutes = require("./movie");
const genreRoutes = require("./genre");

const router = express.Router();

router.use("/movies", movieRoutes);
router.use("/genres", genreRoutes);

module.exports = router;
