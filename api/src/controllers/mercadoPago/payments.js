const mercadopago = require("mercadopago");
const { ACCESS_TOKEN } = process.env;
//Busco información de una orden de pago
const payments = (req, res) => {
  const mp = new mercadopago(ACCESS_TOKEN);
  const id = req.params.id;
  console.info("Buscando el id", id);
  mp.get(`/v1/payments/search`, { external_reference: id }) //)
    .then((resultado) => {
      console.info("resultado", resultado);
      res.json({ resultado: resultado });
    })
    .catch((err) => {
      console.error("No se consulto:", err);
      res.json({
        error: err,
      });
    });
};
module.exports = { payments };
