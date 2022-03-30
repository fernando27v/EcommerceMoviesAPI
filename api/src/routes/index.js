const express = require("express");
const movieRoutes = require("./movie");
const actorRoutes = require("./actor");

const router = express.Router();

router.use("/movies", movieRoutes);
router.use("/actors", actorRoutes);

module.exports = router;
