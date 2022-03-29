const { Movie, Actor, Genre } = require("../db.js");
const axios = require("axios");

module.exports = {
  getMovies: async () => {
    try {
      const movies = await Movie.findAll({
        include: [{ model: Actor }, { model: Genre }],
      });
      return movies;
    } catch (error) {
      console.error(error);
      return 0;
    }
  },
};
