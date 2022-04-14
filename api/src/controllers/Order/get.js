const { Order, Order_detail, Movie } = require("../../db");
const get = async ({ params: { userId }, body: { OrderId } }, res) => {
  try {
    if (userId) {
      if (OrderId) {
        const order = await Order.findAll({
          include: { model: Order_detail, include: { model: Movie } },
          where: { id: OrderId },
        });
        res.send(order);
      } else {
        const orders = await Order.findAll({
          include: {
            model: Order_detail,
            include: { model: Movie },
          },
          where: { userId },
        });
        res.send(orders);
      }
    } else {
      const orders = await Order.findAll({
        include: { model: Order_detail, include: { model: Movie } },
      });
      res.send(orders);
    }
  } catch (error) {
    console.error(error);
    res.status(400).send({ message: "Error in route GET/api/orders" });
  }
};
module.exports = { get };
