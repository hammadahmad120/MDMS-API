"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class DoctorPatientCheckup extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      DoctorPatientCheckup.belongsTo(models.Patient, {
        foreignKey: "patientId",
      });
      DoctorPatientCheckup.belongsTo(models.Doctor, {
        foreignKey: "doctorId",
      });
    }
  }
  DoctorPatientCheckup.init(
    {
      patientId: DataTypes.INTEGER,
      doctorId: DataTypes.INTEGER,
      token: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "DoctorPatientCheckup",
    }
  );
  return DoctorPatientCheckup;
};
