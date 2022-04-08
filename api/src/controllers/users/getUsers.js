const { User } = require("../../db.js");

const getUsers = async (req, res) => {
  try {
    //Trae todos los usuarios
    let users = await User.findAll({
      order: [["name", "ASC"]],
    });

    return res.status(200).json(users);
  } catch (error) {
    console.error(error);
    return res.json({ msg: "Error bringing users" });
  }
};

module.exports = getUsers;
