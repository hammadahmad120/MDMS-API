"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class SalaryPayment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      SalaryPayment.belongsTo(models.User, {
        foreignKey: "userId",
      });
    }
  }
  SalaryPayment.init(
    {
      userId: DataTypes.INTEGER,
      salaryAmount: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "SalaryPayment",
    }
  );
  return SalaryPayment;
};
