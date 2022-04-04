const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Movie",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      idApiMovies:{
        type: DataTypes.INTEGER,
        allowNull: true,
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
      release_date: {
        type: DataTypes.STRING,
      },
      original_language: {
        type: DataTypes.STRING,
      },
      vote_average: {
        type: DataTypes.FLOAT,
      },
      price:{
        type: DataTypes.FLOAT,
        defaultValue: (Math.random() * (5 - 0.5) + 0.5).toFixed(2),
      }
    },
    { timestamps: false }
  );
};
