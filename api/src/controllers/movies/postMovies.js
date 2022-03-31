const { Movie, Actor, Genre } = require("../../db.js");
const {Op} = require("sequelize");
const postMovies = async (req, res, next) => {
    try {
  
      let { id, title, adult, img, overview,  release_date, original_language, vote_average,actors,genres}
        = req.body;
  
      let moviesCreated = await Movie.create({
        id,
        title,
        adult,
        img,
        overview,
        release_date,
        original_language,
        vote_average,
       
               
      })
     genres.forEach( async (g) => {
        const gr = await Genre.findAll({where:{name:g}}); 

      moviesCreated.addGenre(gr);
     })
   
     actors.forEach(async (a) => {
      const ac = await Actor.findAll({where:{name:{[Op.iLike]:`%${a}%`}}}); 

      moviesCreated.addActor(ac)
   })
 
      res.status(200).json(moviesCreated)
    } catch (error) {
      console.log(error)
    }
  }
  

  module.exports={
    postMovies
  }
  