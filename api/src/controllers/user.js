const { User, Movie } = require("../db.js");
const bcryptjs = require("bcryptjs");
const { Op } = require("sequelize/types");

module.exports = {
  getUsers: async (req, res) => {
    try {
      //Trae todos los usuarios
      let users = await User.findAll({
        order: [["name", "ASC"]],
      });

      res.json(users);
    } catch (error) {
      console.error(error);
      res.status(500).json({ msg: "Error bringing users" });
    }
  },

  createUser: async (req, res) => {
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

        //El email no existe, procedo a crear el usuario
        user = await User.build({
          name,
          surname,
          username,
          email,
          password,
          role,
        });

        //Encripto la contraseña del usuario
        user.password = bcryptjs.hashSync(password, salt);

        await user.save();
        console.log(user);
        return user;
      }
    } catch (error) {
      console.error(error);

      return 0;
    }
  },

  loginUser: async (req, res) => {
    const { email, password } = req.body;

    try {
      const user = await User.findOne({ where: email });
      const validPassword = bcryptjs.compareSync(password, user.password);

      if (!user || !validPassword) {
        return res.status(400).json({ msg: "Invalid password or email" });
      }

      res.json({ msg: "Logeado" });
    } catch (error) {
      console.error(error);
    }
  },
};
