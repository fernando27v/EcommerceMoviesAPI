const { User } = require("../db");
const jwt = require("jsonwebtoken");

//Esta función verifica, a partir de un token, que el usuario exista en la db
//Si el token expiró o está manipulado, devolverá un error
const validateJWT = async (req, res, next) => {
  const token = req.header("x-token");

  //Verifica que el header contenga un token
  if (!token) {
    return res.status(401).json({
      msg: "No token in request",
    });
  }

  try {
    //Verifica el token y extrae el ID del payload
    const { id } = jwt.verify(token, process.env.SECRETORPRIVATEKEY);

    //A partir del ID busca al usuario
    const user = await User.findOne({ where: { uid: id } });

    //Verifica que el usuario exista en la DB
    if (!user) {
      return res.status(401).json({
        msg: "Invalid token",
      });
    }

    //Devuelve el usuario para ser accedido desde req en otra función
    req.user = user;
    next();
  } catch (error) {
    console.error(error);
  }
};

module.exports = validateJWT;
