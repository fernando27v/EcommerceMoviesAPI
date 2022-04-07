const { Op } = require('sequelize');
const { Movie, Actor, Genre } = require("../../db.js");
const axios = require("axios");

const deleteMovies = async (req, res) => {
  const { id } = req.params;
  try {
    if (id) {
      const allMovie = await Movie.destroy({
        where: { id: id }
      })
      res.send('Deleting from the database')
    }
  } catch (error) {
    res.send(`Error in route /Movie/delete ${error}`);
  }

};

module.exports = {
  deleteMovies
}
