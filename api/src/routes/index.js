const express = require("express");
const movieRoutes = require("./movie");
const userRoutes = require("./user");
const genreRoutes = require("./genre");
const actorRoutes = require("./actor");
const loadRouter = require("./loadData");
const searchRouter = require("./search");
const shoppingCartRouter = require("./shopping_cart");
const reviewsRouter = require("./review");
const bestMoviesRouter = require("./bestMovies");
const OrdersRouter = require("./Order");
const mercadopago = require("./mercadopago");
const countriesRouter = require("./countries");
const router = express.Router();

router.use("/movies", movieRoutes);
router.use("/users", userRoutes);
router.use("/genres", genreRoutes);
router.use("/actors", actorRoutes);
router.use("/load-data", loadRouter);
router.use("/search", searchRouter);
router.use("/shopping-cart", shoppingCartRouter);
router.use("/reviews", reviewsRouter);
router.use("/bestmovies", bestMoviesRouter);
router.use("/orders", OrdersRouter);
router.use("/mercadopago", mercadopago);
router.use("/countries",countriesRouter )
module.exports = router;
