const { Model, DataTypes } = require("sequalize");

module.exports = (sequalize) => {
  class Genre extends Model {}
  Genre.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    { sequalize, timestamps: false }
  );
};
