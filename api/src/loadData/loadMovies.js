require("dotenv").config();
const { API_KEY } = process.env;
const axios = require("axios");
const BASE_URL = "https://api.themoviedb.org/3";
const { Movie } = require("../db");

const loadMovies = async (req, res) => {
  try {

    let prom = await Promise.all([axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=55a8fa4c6d88b26c1c9e150c83aa784e&language=en-US&page=1`), axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=55a8fa4c6d88b26c1c9e150c83aa784e&language=en-US&page=2`), axios.get(
          `https://api.themoviedb.org/3/movie/popular?api_key=55a8fa4c6d88b26c1c9e150c83aa784e&language=en-US&page=3`)])

    moviesOne = prom[0].data.results;
    moviesTwo = prom[1].data.results;
    moviesThree = prom[2].data.results;

    //console.log('yo soy cargaMovies', movies)
    let apiInfo = moviesOne.concat(moviesTwo).concat(moviesThree)

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
        //genres_ids:movie.genres_ids,
      }        //actor:actor.id

    });

    apiInfo.forEach(async(el) => {
     await Movie.findOrCreate({ where: el });
    });

    res.send('ok');
  } catch (error) {
    console.log(error.message);
  }

};



module.exports = { loadMovies };