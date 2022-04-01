const { User } = require("../../db.js");
const bcryptjs = require("bcryptjs");
const { genJWT } = require("../../helpers/genJWT.js");

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ where: { email } });
    const validPassword = bcryptjs.compareSync(password, user.password);

    //Validar email y contraseña
    if (!user || !validPassword) {
      return res.status(400).json({ msg: "Invalid password or email" });
    }

    //Si las credenciales son válidas, genero JWT
    const token = await genJWT(user.id);
    console.log(user, token);
    res.json({ user, token });
  } catch (error) {
    console.error(error);
  }
};

module.exports = loginUser;
