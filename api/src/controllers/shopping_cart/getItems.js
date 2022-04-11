const { Shopping_cart, Movie, User } = require("../../db");

module.exports = {
  getItems: async ({ params: { id } }, res) => {
    try {
      const cart = await Shopping_cart.findAll({
        include: [
          {
            model: Movie,
            
            // attributes: [],
          },
        ],
        where: { UserUid: id },
      });
      res.json(cart);
    } catch (error) {
      res.status(404).json(error)
    }
  },
};
