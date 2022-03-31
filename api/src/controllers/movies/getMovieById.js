const { Op } = require('sequelize');
const { Movie, Actor, Genre } = require("../../db.js");
const axios = require("axios");


const getMovieById = async (req, res) => {
    try {
      const { id } = req.params
  //    console.log('yo soy id', id)
      const mov = await Movie.findOne({
        where: { id: id },
        attributes: {
          //exclude:["createdAt","updatedAt","genreId","actorId"]
        },
        include: [
          {
            model: Genre,
            attributes: {
              exclude: ["createdAt", "updatedAt"]
            }
          },
          {
            model: Actor,
            attributes: {
              exclude: ["createdAt", "updatedAt"]
            }
          }
        ]
      });
  
      if (!mov) {
        res.json({
          message: "There is no movie with this id " + id
        })
      }
      res.json(mov)
  
    } catch (error) {
      console.error(error);
      return 0;
    }
  
  }
  
  module.exports={
    getMovieById
  }