const { Movie, Review } = require("../../db.js");

module.exports = {


    getReviewsOfAMovie: async (req, res, next) => {
        const idMovie = req.params.idMovie;
        Review.findAll({
            where: {
                MovieId: idMovie,
            },
            include: [
                {
                    model: Users,
                    as: "users",
                },
                {
                    model: Movie,
                }
            ],
        })
            .then((data) => res.status(200).send(data))
            .catch(err => res.send(err))
    }
}