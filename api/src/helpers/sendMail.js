const { Order_detail, Movie, User, Order } = require("../db");
const sgMail = require("@sendgrid/mail");
let fs = require("fs");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendMail = async (external_reference) => {
  const orden = await Order.findAll({ where: { id: external_reference } });
  const user = await User.findAll({
    where: { id: orden[0].dataValues.userId },
  });
  const carrito = await Order_detail.findAll({
    where: { OrderId: external_reference },
    include: [{ model: Movie }],
    atrributes: [],
  });
  let peliculas = fs.readFileSync(__dirname + "/movies.html", "utf-8");
  let peliculas1 = "";
  const items_ml = carrito.map((i) => {
    peliculas1 += peliculas
      .replace("{titleMovie}", i.Movie.title)
      .replace("{overview}", i.Movie.overview)
      .replace("{imageMovie}", i.Movie.img);
    // peliculas += `<li>${i.Movie.title}</li>`;
  });
  console.log(items_ml);

  let html = fs.readFileSync(__dirname + "/correo.html", "utf-8");
  console.log(external_reference);
  html = html
    .replace("{Movies}", peliculas1)
    .replace(
      "{nameUser}",
      `${user[0].dataValues.name} ${user[0].dataValues.lastName}`
    )
    .replace("{OrderID}", external_reference);

  const msg = {
    to: user[0].dataValues.email, // Change to your recipient
    from: "cinemaalacarte0@gmail.com", // Change to your verified sender
    subject: "All set on your purchase!",
    html,
  };

  sgMail
    .send(msg)
    .then((response) => {
      console.log("Correo Enviado");
      console.log(response[0].statusCode);
      // console.log(response[0].headers);
    })
    .catch((error) => {
      console.error(error);
    });
};

module.exports = { sendMail };
