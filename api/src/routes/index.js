const express = require("express");
const movieRoutes = require("./movie");
const userRoutes = require("./user");

const router = express.Router();

router.use("/movies", movieRoutes);
router.use("/users", userRoutes);

module.exports = router;
