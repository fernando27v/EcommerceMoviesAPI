const mercadopago = require("mercadopago");
const { Order_detail, Movie } = require("../../db");

const { ACCESS_TOKEN } = process.env;

//Agrega credenciales
mercadopago.configure({
  access_token: ACCESS_TOKEN,
});

//Ruta que genera la URL de MercadoPago
const generate_url = async ({ body }, res, next) => {
  // const id_orden = 1;
  const { id_orden } = body;
  // //Cargamos el carrido de la bd
  const carrito = await Order_detail.findAll({
    where: { OrderId: id_orden },
    include: [{ model: Movie }],
    atrributes: [],
  });

  const items_ml = carrito.map((i) => ({
    title: i.Movie.title,
    unit_price: i.Movie.price,
    quantity: 1,
  }));

  // Crea un objeto de preferencia
  let preference = {
    items: items_ml,
    external_reference: `${id_orden}`,
    payment_methods: {
      excluded_payment_types: [
        {
          id: "atm",
        },
      ],
      installments: 1, //Cantidad máximo de cuotas
    },
    back_urls: {
      success:
        "https://proyect-ecommerce.herokuapp.com/api/mercadopago/paymentinformation",
      failure:
        "https://proyect-ecommerce.herokuapp.com/api/mercadopago/paymentinformation",
      pending:
        "https://proyect-ecommerce.herokuapp.com/api/mercadopago/paymentinformation",
    },
    auto_return: "approved",
    statement_descriptor: "CINEMAALACARTE",
  };

  mercadopago.preferences
    .create(preference)
    .then(function (response) {
      // console.info("respondio");
      //Este valor reemplazará el string"<%= global.id %>" en tu HTML
      global.id = response.body.id;
      global.init_point = response.body.init_point;
      console.log(global.init_point);
      res.json({ id: global.id });
    })
    .catch(function (error) {
      console.log(error);
      res.json({ message: "Error in route GET/api/mercadopago" });
    });
};
module.exports = { generate_url };
