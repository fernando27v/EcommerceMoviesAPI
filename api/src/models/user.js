const { DataTypes } = require("sequelize");
// Export de modelo
module.exports = (sequelize) => {
  // defino el modelo

  sequelize.define(
    "user",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nickname: {
        type: DataTypes.STRING,
      },
      name: {
        type: DataTypes.STRING,
      },
      lastName:{
        type: DataTypes.STRING,
      },
      nationality:{
        type: DataTypes.STRING,
      },
      date_of_birth:{
        type: DataTypes.DATEONLY,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      role: {
        type: DataTypes.ENUM("ADMIN_ROLE", "SUPER_ROLE", "USER_ROLE"),
        defaultValue: "USER_ROLE",
      },
      email_verified :{
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      }
    },
    { timestamps: false }
  );
};
