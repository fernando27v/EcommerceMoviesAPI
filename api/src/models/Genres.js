const { Model, DataTypes } = require("sequalize");

module.exports = (sequalize) => {
  class Genres extends Model {}
  Genres.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    { sequalize, modelName: "genres" }
  );
};
