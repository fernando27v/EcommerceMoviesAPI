
const { Movie, Actor, Genre } = require("../../db.js");
const { Op } = require("sequelize");

const putMovies = async (req, res, next) => {
    const { id } = req.params;

    let { title, adult, img, overview, release_date, original_language, vote_average, actors, genres, price }
        = req.body;
 
   
    Movie.update({ title, adult, img, overview, release_date, original_language, vote_average, price, actors, genres },{ where: { id: id } })

   /*  genres.forEach(async (e) => {
        await Genre.update({ where: { id: e.id, name: e.name } })
      }) */

        .then(e => {
            res.status(200).send(e)
        }).catch(error => {
            res.status(400).send(`Error ${error}`);
        })
};

module.exports = {
    putMovies
}
