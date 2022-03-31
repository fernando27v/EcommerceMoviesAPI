const postMovies = async (req, res, next) => {
    try {
  
      let { id, title, adult, img, overview,  release_date, spoken_languages, vote_average,type, Genres, Actors }
        = req.body;
  
      let moviesCreated = await Movie.create({
        id,
        title,
        adult,
        img,
        overview,
        release_date,
        spoken_languages,
        vote_average,
        type,
        Genres,
        Actors,
  
      });
      let genreDb = await Genre.findAll({
        where: { name: Genres }
      });
      let actorDb = await Actor.findAll({
        where: { name: Actors }
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
  