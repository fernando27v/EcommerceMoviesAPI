require("dotenv").config();
const { API_KEY } = process.env;
const axios = require("axios");
const { Movie, Genre ,movie_genre} = require("../db");

const loadMovies = async (req, res) => {
  try {
    let prom = await Promise.all([
      axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
      ),
      axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=2`
      ),
      axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=3`
      ),
    ]);

    moviesOne = prom[0].data.results;
    moviesTwo = prom[1].data.results;
    moviesThree = prom[2].data.results;

    //console.log('yo soy cargaMovies', movies)
    let apiInfo = moviesOne.concat(moviesTwo).concat(moviesThree);

    apiInfo = apiInfo.map((movie) => {
      return {
        id: movie.id,
        title: movie.title,
        adult: movie.adult,
        overview: movie.overview,
        release_date: movie.release_date,
        original_language: movie.original_language,
        vote_average: movie.vote_average,
        img: "https://image.tmdb.org/t/p/w500" + movie.poster_path,
        genre_ids: movie.genre_ids, //[16,14]
      }; //actor:actor.id
    });
    // console.log(apiInfo);

    apiInfo.forEach(async (el) => {
      let movieCreated = await Movie.findOrCreate({
        where: {
          id: el.id,
          title: el.title,
          adult: el.adult,
          overview: el.overview,
          release_date: el.release_date,
          original_language: el.original_language,
          vote_average: el.vote_average,
          img: "https://image.tmdb.org/t/p/w500" + el.img,
        },
      });
      //

      el.genre_ids.forEach(async (e) => {
        await movie_genre.findOrCreate({
          where: { GenreId: e, MovieId: el.id },
        });
      });
    });

    res.send("ok");
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = { loadMovies };
