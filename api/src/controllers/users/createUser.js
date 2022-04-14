const { Op } = require("sequelize");
const bcryptjs = require("bcryptjs");
const { User } = require("../../db.js");


const createUser = async (req, res) => {
  const {email} = req.params;
  const {nickname, name, lastName} = req.body;

  try {
    //Valido si el email o el username existen en la DB
    let user = await User.findOne({
      where: { email },
    });

    //Si el email o el username existen retorna esto
    if (user) {
      return res.status(400).json({
        msg: "Already exists an account with that email or username",
      });
    } else {

      //El usuario no existe, procedo a crear el usuario
      user = await User.build({
        email,
        nickname,
        name,
        lastName
      })
      await user.save();

      return res.status(200).json(user);
    
    }
  } catch (error) {
    console.error(error);
    return 0;
  }
};

module.exports = createUser;