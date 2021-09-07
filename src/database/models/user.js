"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.belongsTo(models.Role, {
        foreignKey: "roleId",
      });

      User.hasMany(models.SalaryPayment, {
        foreignKey: "userId",
      });

      User.hasMany(models.Attendance, { foreignKey: "userId" });

      User.hasMany(models.UserNotificationAccess, { foreignKey: "userId" });

      User.hasOne(models.Doctor, {
        foreignKey: "userId",
      });

      User.belongsToMany(models.Notification, {
        through: "UserNotificationAccess",
        foreignKey: "userId",
      });
    }
  }
  //allowNull defaults to true
  User.init(
    {
      username: DataTypes.STRING,
      password: DataTypes.STRING,
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      phone: DataTypes.STRING,
      address: DataTypes.STRING,
      roleId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
