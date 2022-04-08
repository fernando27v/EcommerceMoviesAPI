const { Movie, Actor, Genre, movie_genre, actor_movie } = require("../../db.js");
const { Op } = require("sequelize");
const { set } = require("express/lib/application");
const { send } = require("express/lib/response");

const putMovies = async (req, res) => {

    const { id } = req.params;
    const { idGenre } = req.params;
    let { name } = req.body;
    let { title, adult, img, overview, release_date, original_language, vote_average, genres, actors, price }
        = req.body;
    const movie = req.params.id;
    const actor = req.params.id;
    Movie.update(
        {
            title: title, adult: adult, img: img, overview: overview, release_date: release_date, original_language: original_language, vote_average: vote_average, price: price
        }, { where: { id: id } })
        .then(() => {
            if (genres.length > 0) {
                movie_genre.destroy(
                    {
                        where: { MovieId: movie }
                    }
                )                
                genres.forEach((e) => {
                    movie_genre.create({
                        GenreId: e, MovieId: movie
                    });
                })
            } 
            if (actors.length > 0) {
                actor_movie.destroy(
                    {
                        where: { MovieId: movie }
                    }
                )
                 actors.forEach((e) => {
                    actor_movie.create({
                        ActorId: e, MovieId: movie
                    });
                })
            }
            res.send('was updated correctly')
        })
        .catch((err) => {
            //Error Handler
            console.log(err);
            res.status(400).send("Error updating the movie");
        });
}

module.exports = {
    putMovies
}
