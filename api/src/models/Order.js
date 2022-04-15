const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Order",
    {
      payment_id: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      payment_status: {
        type: DataTypes.STRING,
        defaultValue: "created",
      },
      merchant_order_id: {
        type: DataTypes.BIGINT,
        defaultValue: 0,
      },
      order_date: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
      },
    },
    { timestamps: false }
  );
};
