const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  class Genre extends Model {}
  Genre.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    { sequelize, timestamps: false }
  );
};
