const { User } = require("../../db");

const deletePassword = async (req, res) => {
  try {
    const { id } = req.body;
    await User.update({password: null},{ where: { id: id } });
    res.json({ msg: "Password deleted" });
  } catch (error) {
    console.error(error);
  }
};

module.exports = deletePassword;