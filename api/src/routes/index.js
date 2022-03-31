const express = require("express");
const movieRoutes = require("./movie");
const genreRoutes = require("./genre");
const actorRoutes = require("./actor");
const loadRouter = require("./loadData");

const router = express.Router();

router.use("/movies", movieRoutes);
router.use("/genres", genreRoutes);
router.use("/actors", actorRoutes);
router.use("/load-data", loadRouter);

module.exports = router;
