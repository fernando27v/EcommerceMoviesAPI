const express = require("express");
const { generate_url } = require("../controllers/mercadoPago/generate_url");
const {
  paymentInformation,
} = require("../controllers/mercadoPago/paymentInformation");
const { payments } = require("../controllers/mercadoPago/payments");

const router = express.Router();

router.get("/generate-url/:id_orden", generate_url);
router.get("/paymentinformation", paymentInformation);
router.get("/pagos/:id", payments);

module.exports = router;
