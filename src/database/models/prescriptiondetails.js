"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class PrescriptionDetails extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      PrescriptionDetails.belongsTo(models.DoctorPrescription, {
        foreignKey: "prescriptionId",
      });
      PrescriptionDetails.belongsTo(models.MedicineStock, {
        foreignKey: "medId",
      });
    }
  }
  PrescriptionDetails.init(
    {
      prescriptionId: DataTypes.INTEGER,
      medId: DataTypes.INTEGER,
      timesInDay: DataTypes.INTEGER,
      singleTimeQuantity: DataTypes.DECIMAL,
      totalQuantity: DataTypes.DECIMAL,
    },
    {
      sequelize,
      modelName: "PrescriptionDetails",
    }
  );
  return PrescriptionDetails;
};
