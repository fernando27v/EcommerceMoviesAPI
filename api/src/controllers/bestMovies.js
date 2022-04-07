const {Movie} = require("../db");
const {Op} = require("sequelize");

module.exports = {
    bestMovies : async(req,res)=> 
    {
        try{
            const movies = await Movie.findAll({limit:5,order: [["vote_average", "DESC"]]});
             
            res.json(movies);
        }catch(err){
            res.send(err.message);
        }   
    }
}