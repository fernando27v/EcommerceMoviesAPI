const { Movie, Actor, Genre, Review } = require("../../db.js");

module.exports = {


    deleteReview: async (req, res, next) => {
        const MovieId = req.params.id;
        const reviewId = req.params.id;

        Review.destroy({
            where: {
                id: reviewId,
                MovieId: MovieId,
            }
        })
            .then((review) => res.status(200).json(review))
            .catch((error) => {
                console.log("Could not delete " + error);
                res.send(err);
            });
    }
}
