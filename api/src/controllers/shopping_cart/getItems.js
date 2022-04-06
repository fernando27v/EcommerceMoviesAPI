const { Shopping_cart, Movie, User } = require("../../db");

module.exports = {
  getItems: async ({ params: { id } }, res) => {
    try {
      const cart = await Movie.findAll({
        include: [
          {
            model: Shopping_cart,
            where: { UserUid: id },
            attributes: [],
          },
        ],
      });
      res.json(cart);
    } catch (error) {
      console.log(error);
      res.status(404).json(error)
    }
  },
};
