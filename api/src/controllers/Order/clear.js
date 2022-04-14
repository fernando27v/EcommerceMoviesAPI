const { Order, Order_detail } = require("../../db");

const clear = async ({ params: { userId }, body: { OrderId } }, res) => {
  try {
    if (OrderId) {
      const result = await Order_detail.destroy({
        where: { OrderId },
      });
      if (result) {
        const result1 = await Order.destroy({ where: { id: OrderId } });
        result1
          ? res.send({ message: "item deleted" })
          : res.status(400).send({
              message: "Order does not exist or has already been deleted",
            });
      } else
        res.status(400).send({
          message: "Order does not exist or has already been deleted",
        });
    } else {
      const details = await Order.findAll({
        where: { userId },
        attributes: [],
        include: { model: Order_detail },
      });
      const result = await Order.destroy({ where: { userId } });
      if (result) {
        details.map((e) => {
          e.Order_details.map(async (e) => {
            await Order_detail.destroy({ where: { id: e.id } });
          });
        });
        res.send({ message: "Deleted" });
      } else {
        res.status(400).send({
          message: "Orders do not exist or have already been deleted",
        });
      }
    }
  } catch (error) {
    console.error(error);
    res.status(400).send({ message: "Error in route DELETE/api/orders" });
  }
};
module.exports = { clear };
