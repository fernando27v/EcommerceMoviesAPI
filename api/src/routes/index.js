const express = require("express");
const movieRoutes = require("./movie");
const userRoutes = require("./user");
// const loadRouter = require("./loadMovies");
const actorRoutes = require("./actor");
const loadRouter=require("./loadData");

const router = express.Router();

router.use("/movies", movieRoutes);
router.use("/users", userRoutes);
// router.use("/load-movies", loadRouter);
router.use("/actors", actorRoutes);
router.use("/load-data",loadRouter);



module.exports = router;
