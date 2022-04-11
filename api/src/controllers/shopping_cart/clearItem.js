const { Shopping_cart } = require("../../db");

module.exports = {
  clearItem: async (req, res) => {
    const { userId } = req.params;
    const { MovieId } = req.body;

    Shopping_cart.destroy({
      where: { UserId: userId, MovieId },
    })
      .then(() => {
        res.status(200).json({ msg: "item deleted" });
      })
      .catch((err) => {
        res.status(500).send(err+"");
      });
  },
};
