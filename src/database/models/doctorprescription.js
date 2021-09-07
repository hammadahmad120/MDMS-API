"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class DoctorPrescription extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      DoctorPrescription.hasMany(models.PrescriptionDetails, {
        foreignKey: "prescriptionId",
      });
      DoctorPrescription.belongsTo(models.Doctor, { foreignKey: "doctorId" });

      DoctorPrescription.belongsTo(models.Patient, { foreignKey: "patientId" });
    }
  }
  DoctorPrescription.init(
    {
      doctorId: DataTypes.INTEGER,
      patientId: DataTypes.INTEGER,
      token: DataTypes.INTEGER,
      description: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "DoctorPrescription",
    }
  );
  return DoctorPrescription;
};
