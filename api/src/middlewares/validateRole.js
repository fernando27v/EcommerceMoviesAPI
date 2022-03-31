const isAdmin = (req, res, next) => {
  const user = req.user;

  //Si el token no se pudo validar devolverá esto
  if (!req.usuario) {
    return res.status(500).json({
      msg: "Can't validate role without validating token first",
    });
  }

  const { username, role } = req.user;

  //Si no es ADMIN se bloquea el código
  if (role !== "ADMIN_ROLE") {
    return res.status(400).json({
      msg: `${username} is not ADMIN`,
    });
  }

  next();
};

module.exports = isAdmin;
