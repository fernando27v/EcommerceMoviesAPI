
const { Movie, Actor, Genre } = require("../../db.js");
const { Op } = require("sequelize");
const postMovies = async (req, res, next) => {
  try {

    let { title, adult, urlMovie,img, overview, release_date, original_language, vote_average, actors, genres, price }
      = req.body;

    let moviesCreated = await Movie.create({
      title,
      adult,
      img,
      overview,
      release_date,
      original_language,
      vote_average,
      urlMovie,
      price: price != null ? price : (Math.random() * (5 - 0.5) + 0.5).toFixed(2)
    })
    genres.forEach(async (g) => {
      const gr = await Genre.findAll({ where: { name: g } });

      moviesCreated.addGenre(gr);
    })

    actors.forEach(async (a) => {
      const ac = await Actor.findAll({ where: { name: { [Op.iLike]: `%${a}%` } } });

      moviesCreated.addActor(ac)
    })

    res.status(200).json(moviesCreated)
  } catch (error) {

    console.log(error)
  }
}


module.exports = {
  postMovies
}
