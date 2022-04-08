const { User } = require("../../db");

const setRole = async (req, res) => {
  const { role, id } = req.body;

  try {
    await User.update({ role }, { where: { uid: id } });
    res.json("Role updated");
  } catch (error) {
    console.error(error);
  }
};

module.exports = setRole;
