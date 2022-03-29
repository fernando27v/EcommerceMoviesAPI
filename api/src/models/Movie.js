const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "movie",
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
      Overview: {
        type: DataTypes.STRING,
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
    },
    { timestamps: false }
  );
};
