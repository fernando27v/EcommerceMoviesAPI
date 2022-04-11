const { Movie,movie_genre, actor_movie,Genre ,Actor} = require("../../db.js");


const putMovies = async (req, res) => {

    const { id } = req.params;
    let { title,urlMovie, adult, img, overview, release_date, original_language, vote_average, genres, actors, price }
        = req.body;

    Movie.update(
        {
            title: title, adult: adult, img: img, overview: overview, release_date: release_date, original_language: original_language, vote_average: vote_average, price: price,urlMovie:urlMovie
        }, { where: { id: id } })
        .then(() => {
            if(genres){
                if (genres.length > 0) {
                movie_genre.destroy(
                    {
                        where: { MovieId: id }
                    }
                )

                genres.forEach(async (e) => {
                   const g =  await Genre.findOne({ where: { name: e } })
                    movie_genre.create({
                        GenreId: g.id, MovieId: id


                    });
                })
            } 
        }
            if(actors){
                if (actors.length > 0) {
                    console.log('actors',actors)
                actor_movie.destroy(
                    {
                        where: { MovieId: id }
                    }
                )
                actors.forEach(async (e) => {
                    const a =  await Actor.findOne({ where: { name: e } })
                    actor_movie.create({
                        ActorId: a.id, MovieId: id
                    });
                })
            }
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
