"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class MedicineBatchStock extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      MedicineBatchStock.belongsTo(models.MedicineStock, {
        foreignKey: "medId",
      });

      MedicineBatchStock.belongsTo(models.Expense, {
        foreignKey: "expenseId",
      });
    }
  }
  MedicineBatchStock.init(
    {
      batchNum: DataTypes.INTEGER,
      medId: DataTypes.INTEGER,
      expenseId: DataTypes.INTEGER,
      manuDate: DataTypes.DATE,
      expiryDate: DataTypes.DATE,
      totalQuantity: DataTypes.DECIMAL,
    },
    {
      sequelize,
      modelName: "MedicineBatchStock",
    }
  );
  return MedicineBatchStock;
};
