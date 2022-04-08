const express = require("express");
const reviewsRouter = express.Router();
const {getReviewsByUser} = require("../controllers/reviews/getReviewsByUser");
const {deleteReview} = require("../controllers/reviews/deleteReview");
const {postReview} = require("../controllers/reviews/postReview");
const {getReviewsOfAMovie} = require("../controllers/reviews/getReviewsOfAMovie");
const {updateReview} = require("../controllers/reviews/updateReview");

reviewsRouter.get("/reviewsMovie/:idMovie",getReviewsOfAMovie);
reviewsRouter.delete("/delete/:reviewId",deleteReview);
reviewsRouter.get("/reviewsUser/:userId",getReviewsByUser);
reviewsRouter.post("/:userId",postReview);
reviewsRouter.put("/:reviewId",updateReview);

module.exports = reviewsRouter;