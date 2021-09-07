"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class MedicineStock extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      MedicineStock.hasMany(models.MedicineBatchStock, { foreignKey: "medId" });

      MedicineStock.hasMany(models.PrescriptionDetails, {
        foreignKey: "medId",
      });
    }
  }
  MedicineStock.init(
    {
      medName: DataTypes.STRING,
      manufacturer: DataTypes.STRING,
      potency: DataTypes.STRING,
      medType: DataTypes.ENUM(
        "tablet",
        "syrup",
        "injection",
        "dressing",
        "other"
      ),
      minimumUnit: DataTypes.DECIMAL,
      unitPrice: DataTypes.DECIMAL,
      drugQuantity: DataTypes.DECIMAL,
      isInPharmacy: DataTypes.BOOLEAN,
      pharmacyQuantity: DataTypes.DECIMAL,
    },
    {
      sequelize,
      modelName: "MedicineStock",
    }
  );
  return MedicineStock;
};
