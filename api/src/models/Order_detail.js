const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Order_detail",
    {
      price: {
        type: DataTypes.DECIMAL,
        allowNull: false,
      },
    },
    { timestamps: false }
  );
}