const { Shopping_cart } = require("../../db");

module.exports = {
  postItems: (req, res) => {
    const { userId } = req.params;
    const { MovieId } = req.body;
    try {
      MovieId.forEach(async (e) => {
        await Shopping_cart.create({
          UserId: userId,
          MovieId: e,
        });
      });
      res.status(200).json({
        msg: "Item add",
      });
    } catch (error) {
      console.error(error);
      res.status(500).send(error);
    }
  },
};
