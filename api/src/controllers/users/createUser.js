const { Op } = require("sequelize");
const bcryptjs = require("bcryptjs");
const { User } = require("../../db.js");
const { Op } = require("sequelize");
const bcryptjs = require("bcryptjs");

const createUser = async (req, res) => {
  const { name, surname, username, email, password } = req.body;

  try {
    //Valido si el email o el username existen en la DB
    let user = await User.findOne({
      where: { [Op.or]: [{ email }, { username }] },
    });

    //Si el email o el username existen retorna esto
    if (user) {
      return res.status(400).json({
        msg: "Already exists an account with that email or username",
      });
    } else {
      //Crea un "salt" para encriptar la contraseña
      const salt = bcryptjs.genSaltSync();

      //El usuario no existe, procedo a crear el usuario
      user = await User.build({
        name,
        surname,
        username,
        email,
        password,
      });

      //Encripto la contraseña del usuario
      user.password = bcryptjs.hashSync(password, salt);

      await user.save();

      return res.status(200).json(user);
    }
  } catch (error) {
    console.error(error);
    return 0;
  }
};

module.exports = createUser;
