const { Shopping_cart, Movie} = require("../../db");

module.exports = {
  getItems: async ({ params: { userId } }, res) => {
    try {
      const cart = await Movie.findAll({
        include: [
          {
            model: Shopping_cart,
            where: { UserUid: userId },
            attributes: [],
          },
        ],
      });
      res.json(cart);
    } catch (error) {
      res.status(404).json(error)
    }
  },
};
