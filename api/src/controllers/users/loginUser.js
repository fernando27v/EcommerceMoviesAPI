const { User } = require("../../db.js");
const bcryptjs = require("bcryptjs");
const { genJWT } = require("../../helpers/genJWT.js");

const loginUser = async (req, res) => {
  // Recibe email y password por body
  const { email, password } = req.body;

  try {
    // Busca el usuario por email
    const user = await User.findOne({ where: { email } });

    // Compara la contraseña recibida con la del usuario
    const validPassword = bcryptjs.compareSync(password, user?.password);

    // Si no se encuentra el email o la contraseña no es válida devuelve un error
    if (!user || !validPassword) {
      return res.status(400).json({ msg: "Invalid password or email" });
    }

    // Si las credenciales son válidas, genera un JWT
    const token = await genJWT(user.uid, user.username, user.role);

    return res.json({ token });
  } catch (error) {
    console.error(error);
  }
};

module.exports = loginUser;
