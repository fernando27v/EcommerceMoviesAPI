const {Model,DataTypes} = require('sequelize')

module.exports = (sequelize) => {

class Actor extends Model {}
  
  Actor.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    idApiMovies:{
      type: DataTypes.INTEGER,
      allowNull: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    biography: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    birthday:{
      type: DataTypes.STRING,
      allowNull: true
    },
    profile_path:{
      type: DataTypes.STRING,
      allowNull: true
    },
    place_of_birth:{
      type: DataTypes.STRING,
       allowNull: true
    },
    deathday:{
      type: DataTypes.STRING,
      allowNull: true
    },
    imdb_id:{
      type: DataTypes.STRING,
      allowNull: true
    },
    known_for_department:{
      type: DataTypes.STRING,
      allowNull: true
      
    },
    popularity:{
      type: DataTypes.FLOAT,
      allowNull: true
      
    }
  }, { sequelize, timestamps: false });

  }