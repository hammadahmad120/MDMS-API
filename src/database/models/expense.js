"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Expense extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Expense.hasOne(models.MedicineBatchStock, {
        foreignKey: "expenseId",
      });
    }
  }
  Expense.init(
    {
      expenseAmount: DataTypes.INTEGER,
      expenseType: DataTypes.ENUM("medicine", "rent", "other"),
      description: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "Expense",
    }
  );
  return Expense;
};
