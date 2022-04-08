const jwt = require("jsonwebtoken");

const genJWT = (id = "", username = "", role = "") => {
  return new Promise((resolve, reject) => {
    //El payload es la data que va a tener el JWT
    const payload = { id, role };

    //Método para crear el JWT
    jwt.sign(
      payload,
      process.env.SECRETORPRIVATEKEY,
      {
        //Opción para que expire en 4 horas
        expiresIn: "24h",
      },
      (err, token) => {
        //Si hay error se cancela, sino, devuelve el token
        if (err) {
          console.log(err);
          reject("could not generate token");
        } else {
          resolve(token);
        }
      }
    );
  });
};

module.exports = {
  genJWT,
};
