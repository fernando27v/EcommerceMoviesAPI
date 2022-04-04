const express = require("express");
// const { Movie, Actor, Genre } = require("../db.js");
const { getMovies} = require("../controllers/movies/getMovies");
const { postMovies} = require("../controllers/movies/postMovies");
const { getMovieById} = require("../controllers/movies/getMovieById");
const { deleteMovies} = require("../controllers/movies/deleteMovies");

const movieRouter = express.Router();



//!----Filter Movies by title

/*  movieRouter.get("/", async (req, res) => {
  const movies = await getMovies();
  res.json(movies);
}) */ 

//!----Filter Movies by Id
movieRouter.get("/", getMovies);
movieRouter.get("/:id", getMovieById);
movieRouter.post("/", postMovies);
movieRouter.delete("/delete/:id", deleteMovies);
//
//!----Adding a movie




/* movieRouter.post('/', async (req, res) => {
  try {

    let { id, title, adult, img, overview,  release_date, spoken_languages, vote_average,type, Genres, Actors }
      = req.body;

    let moviesCreated = await Movie.create({
      id,
      title,
      adult,
      img,
      overview,
      release_date,
      spoken_languages,
      vote_average,
      type,
      Genres,
      Actors,

    });
    let genreDb = await Genre.findAll({
      where: { name: Genres }
    });
    let actorDb = await Actor.findAll({
      where: { name: Actors }
    });
    moviesCreated.addGenre(genreDb);
    moviesCreated.addActor(actorDb)

    res.status(200).json(moviesCreated)
  } catch (error) {
    console.log(error)
  }
})

 */

//!----Remove Movie




module.exports = movieRouter;
