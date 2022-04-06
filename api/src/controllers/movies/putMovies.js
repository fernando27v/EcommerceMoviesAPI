
const { Movie, Actor, Genre } = require("../../db.js");
const { Op } = require("sequelize");
const { set } = require("express/lib/application");

const putMovies = async (req, res, next) => {

     const movie = req.params.id;
    const genreId = req.params.id;
    console.log('yo soy genre')

    let { title, adult, img, overview, release_date, original_language, vote_average, actors, genres, price }
    = req.body;
   

    Movie.findOne({
      where: {
        id: movie,
      },
        
    })
    .then((product) => {
        if (product) {
          product
            .update({title, adult, img, overview, release_date, original_language, vote_average, actors, genres, price })
            .then((productUpdated) => {
              //elimina las categorias para luego setear el nuevo set
              productUpdated.setGenres();
              //recorre las categorias que llegan por body
              genres.map((genres) => {
                //buscar categoria a la que tengo que agregar el producto
                Genre.findAll({ where: { name: genres } }).then((res) =>
                  productUpdated.addGenres(res)
                );
              });
            })
            .then(res.status(200).send(product));
        } else {
          res.status(400).send("No se encontró producto con ese ID");
        }
      })
  
      .catch((err) => {
        res.status(400).send("Los campos enviados no son correctos" + err);
      });
  };
     
module.exports = {
    putMovies
}
