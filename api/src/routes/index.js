const express = require("express");
const movieRoutes = require("./movie");
<<<<<<< HEAD
const actorRoutes = require("./actor");
const loadRouter=require("./loadData");
=======
const genreRoutes = require("./genre");
>>>>>>> c1df8d517316d2715cadba6453900cc2507127fc

const router = express.Router();

router.use("/movies", movieRoutes);
<<<<<<< HEAD
<<<<<<< HEAD
router.use("/load-data",loadRouter);
=======
router.use("/actors", actorRoutes);
router.use("/load-data",loadRouter);

>>>>>>> 70003c9dde006ae0eaf3689979b4edf408703a97

=======
router.use("/genres", genreRoutes);
>>>>>>> c1df8d517316d2715cadba6453900cc2507127fc

module.exports = router;
