const {Actor, Movie} = require("../../db.js");
const axios = require("axios");
const {Op} = require('sequelize');

module.exports = {
  getActors: async (req,res) => {
    try {
      const actors = await Actor.findAll({
        include: [{ model: Movie }],
      });
      res.json(actors);
    } catch (error) {
      res.json({error});
      return 0;
    }
  }
};