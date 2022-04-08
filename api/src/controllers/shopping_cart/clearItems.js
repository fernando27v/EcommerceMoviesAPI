const { Shopping_cart } = require("../../db");

module.exports = {
  clearItems: async (req, res) => {
    const { id } = req.params;

    Shopping_cart.destroy({
      where: { UserUid: id },
    })
      .then(() => {
        return res.status(200).send({msg:"Items deleted"});
      })
      .catch((err) =>res.status(500).send(err+""))
  },
};