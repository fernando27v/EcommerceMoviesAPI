const { DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  sequelize.define("Shopping_cart", {}, { timestamps: false });
};
