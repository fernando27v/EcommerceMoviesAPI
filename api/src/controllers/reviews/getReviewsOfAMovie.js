const { Movie, Actor, Genre, Review } = require("../../db.js");

module.exports = {


    getReviewsOfAMovie: async (req, res, next) => {
        const idMovie = req.params.idMovie;
        Reviews.findAll({
            where: {
                MovieId: idMovie,
            },
            include: [
                {
                    model: Users,
                    as: "users",
                },
            ],
        })
            .then((data) => res.status(200).send(data))
            .catch(err => res.send(err))
    }
}