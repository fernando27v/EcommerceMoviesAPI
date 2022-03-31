const { Movie, Actor, Genre } = require("../../db.js");
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
     
      let genreDb = await Genre.findAll({
        where:{name:genres}
    }); 

    let actorDb = await Actor.findAll({
        where:{name:actors}
    });
      moviesCreated.addGenre(genreDb);
       moviesCreated.addActor(actorDb)
 
      res.status(200).json(moviesCreated)
    } catch (error) {
      console.log(error)
    }
  }
  

  module.exports={
    postMovies
  }
  