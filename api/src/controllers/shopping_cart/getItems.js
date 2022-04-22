const { Shopping_cart, Movie} = require("../../db");

module.exports = {
  getItems: async ({ params: { userId } }, res) => {
    try {
      const cart = await Shopping_cart.findAll({
        include: [
          {
            model: Movie,
          },
        ],
        where: { userId: userId },
      });
      res.json(cart);
    } catch (error) {
      res.status(404).json(error)
    }
  },
};
