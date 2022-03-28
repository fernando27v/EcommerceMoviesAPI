const {Model,DataTypes} = require('sequelize')

module.exports = (sequelize) => {

class Actor extends Model {}
  
  Actor.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  }, { sequelize, timestamps: false });

  }