const { Shopping_cart } = require("../../db");

module.exports = {
  postItems: (req, res) => {
    const { userId } = req.params;
    const { MovieId } = req.body;

    Shopping_cart.create({
      UserUid: userId,
      MovieId: MovieId,
    })
      .then(() => {
        res.status(200).json({
          msg: "Item add",
        });
      })
      .catch((err) => {
        res.status(500).send(err.parent.detail);
      });
  },
};
