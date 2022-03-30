const {Actor, Movie} = require("../db.js");
const axios = require("axios");
const {Op} = require('sequelize');

module.exports = {
  getActors: async () => {
    try {
      const actors = await Actor.findAll({
        include: [{ model: Movie }],
      });
      return actors;
    } catch (error) {
      console.error(error);
      return 0;
    }
  },
  getDetailActor: async (name) => {
    try {
      const actor = await Actor.findAll({where:{name:{[Op.iLike]:`%${name.trim()}%`}},include: [{ model: Movie }]});
      return actor;
    } catch (error) {
      console.error(error);
      return 0;
    }
  },
};