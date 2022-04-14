const { Order, Movie, Order_detail } = require("../../db");
const post = async (req, res) => {
  const { userId, orderlines } = req.body;
  try {
    const result = await Order.create({ userId });
    if (result.dataValues) {
      await orderlines.map(async (e) => {
        const movie = await Movie.findByPk(e.id);
        const OrderId = result.dataValues.id;
        await Order_detail.create({
          OrderId,
          MovieId: movie.id,
          price: movie.price,
        });
      });
      res.status(201).send(result);
    } else res.status(400).send({ message: "Error in route POST/api/orders" });
  } catch (error) {
    console.error(error);
    res.status(400).send({ message: "Error in route POST/api/orders" });
  }
};
module.exports = { post }
