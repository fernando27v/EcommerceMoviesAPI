const { User } = require("../../db");

const deleteUser = async (req, res) => {
  try {
    const { id } = req.body;
    await User.destroy({ where: { uid: id } });
    res.json({ msg: "User deleted" });
  } catch (error) {
    console.error(error);
  }
};

module.exports = deleteUser;
