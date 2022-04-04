const { Op } = require('sequelize');
const { Movie, Actor, Genre } = require("../../db.js");
const axios = require("axios");


module.exports = {
  get: async () => {
    try {
      const movies = await Movie.findAll({
        include: [{

          attributes: ['id', 'name'],
          model: Genre,
          through: {
            attributes: []
          }
        },
        {
          attributes: ['id', 'name'],
          model: Actor,
          through: {
            attributes: []
          }

        }],
      });
      return movies;
    } catch (error) {
      console.error(error);
      return 0;
    }
  },
}


const getMovies = async (req, res) => {
  const { title } = req.query;
  //let allMovies = await getMovies(title);
  //console.log('yo soy allMovies',allMovies)
  try {
    if (title) {
      let movieByTitle = await Movie.findAll({
        where: {
          title: title
        }
      })

      movieByTitle.length
        ? res.status(200).json(movieByTitle)
        : res.status(404).send("Sorry, Movie not found :(");
    } else {
      let allMovies = await Movie.findAll()
      res.json(allMovies)
    }
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = {
  getMovies
}
