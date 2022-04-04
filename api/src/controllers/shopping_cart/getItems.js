const { shopping_cart } = require("../../db");

module.exports = {
  getItems: async ({ params: { id } }, res) => {
    try {
      const cart = await shopping_cart.findAll({
        where: { UserUid: id },
        include: [{ model: Movie, attributes: ["id", "title", "price"] }],
      });
      res.json(cart);
    } catch (error) {
      res.json({ error });
    }
  },
};
