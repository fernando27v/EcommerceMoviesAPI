const { Shopping_cart } = require("../../db");

module.exports = {
  clearItems: async (req, res) => {
    const { userId } = req.params;

    Shopping_cart.destroy({
      where: { UserUid: userId },
    })
      .then(() => {
        return res.status(200).send({msg:"Items deleted"});
      })
      .catch((err) =>res.status(500).send(err+""))
  },
};