const express = require("express");
const movieRoutes = require("./movie");
const actorRoutes = require("./actor");
const loadRouter=require("./loadData");

const router = express.Router();

router.use("/movies", movieRoutes);
<<<<<<< HEAD
router.use("/load-data",loadRouter);
=======
router.use("/actors", actorRoutes);
router.use("/load-data",loadRouter);

>>>>>>> 70003c9dde006ae0eaf3689979b4edf408703a97


module.exports = router;
