 const express = require("express");
 const shoppingCartRouter = express.Router();

 const  {getReviewsOfAMovie}  = require("../controllers/reviews/getReviewsOfAMovie");

 reviewsRouter.get("/:id", getReviewsOfAMovie);
