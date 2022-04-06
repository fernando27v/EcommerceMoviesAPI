const { Shopping_cart } = require("../../db");

module.exports = {
  postItems: (req, res) => {
    const { id } = req.params;
    const { MovieId } = req.body;

    Shopping_cart.create({
      UserUid: id,
      MovieId: MovieId,
    })
      .then(() => {
        res.status(200).json({
          message: "Item añadido al carrito",
        });
      })
      .catch((err) => {
        res.status(500).send({
          message: "Error al añadir item al carrito",
          err,
        });
      });
  },
};
