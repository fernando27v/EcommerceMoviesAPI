const { DataTypes } = require("sequelize");
const { Sequelize } = require("sequelize");
// Export de modelo
module.exports = (sequelize) => {
  // defino el modelo

  sequelize.define(
    "user",
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: Sequelize.literal('uuid_generate_v4()'),
        allowNull: false,
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
      email_Verified :{
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      }
    },
    { timestamps: false }
  );
};
