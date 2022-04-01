const { User } = require("../../db.js");

const getUsers = async (req, res) => {
  try {
    //Trae todos los usuarios
    let users = await User.findAll({
      order: [["name", "ASC"]],
    });

    res.json(users);
  } catch (error) {
    console.error(error);
    res.json({ msg: "Error bringing users" });
  }
};

module.exports = getUsers;
