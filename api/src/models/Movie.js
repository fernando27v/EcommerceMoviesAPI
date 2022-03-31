const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Movie",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        //preguntar por el unique
      },
      adult: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      //backdrop_path
      img: {
        type: DataTypes.STRING,
      },
      //Overview
      overview: {
        type: DataTypes.TEXT,
      },
      popularity: {
        type: DataTypes.FLOAT,
      },
      release_date: {
        type: DataTypes.STRING,
      },
      spoken_languages: {
        type: DataTypes.ARRAY(DataTypes.STRING),
      },
      vote_average: {
        type: DataTypes.FLOAT,
      },
      type: {
        type: DataTypes.ENUM("Popular, Latest"),
      },
    },
    { timestamps: false }
  );
};
