const {Actor,Movie} = require("../../db.js");
const axios = require("axios");
const {Op} = require('sequelize');

module.exports = {
  getActorById: async (req,res) => {
      const {id} = req.params
    try {
      const actors = await Actor.findAll({
        where:{id:id},
        include: [{ model: Movie }]
      });
      res.json(actors);
    } catch (error) {
      console.error(error);
      return 0;
    }
  }
};