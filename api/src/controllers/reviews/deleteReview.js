const { Movie, Actor, Genre, Review } = require("../../db.js");

module.exports = {


    deleteReview: async (req, res, next) => {
        const reviewId = req.params.reviewId;

        Review.destroy({
            where: {
                id: reviewId
            }
        })
            .then((review) => res.status(200).json(review))
            .catch((error) => {
                console.log("Could not delete " + error);
                res.send(err);
            });
    }
}
