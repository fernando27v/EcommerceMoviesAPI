const express = require("express");
const movieRoutes = require("./movie");

const router = express.Router();

router.use("/movies", movieRoutes);

module.exports = router;
