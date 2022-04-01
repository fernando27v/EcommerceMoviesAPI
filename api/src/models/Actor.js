const {Model,DataTypes} = require('sequelize')

module.exports = (sequelize) => {

class Actor extends Model {}
  
  Actor.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    biography: {
      type: DataTypes.TEXT,
      
    },
    birthday:{
      type: DataTypes.DATEONLY,
     
    },
    profile_path:{
      type: DataTypes.STRING,
      
    },
    place_of_birth:{
      type: DataTypes.STRING,
    },
    deathday:{
      type: DataTypes.DATEONLY,
      
    },
    imdb_id:{
      type: DataTypes.STRING,
      
    },
    known_for_department:{
      type: DataTypes.STRING,
      
    },
    place_of_birth:{
      type: DataTypes.STRING,
      
    },
    popularity:{
      type: DataTypes.FLOAT,
      
    }
  }, { sequelize, timestamps: false });

  }