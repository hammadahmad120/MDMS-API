"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Patient extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Patient.hasMany(models.Fee, {
        foreignKey: "patientId",
      });

      Patient.hasMany(models.PatientTest, {
        foreignKey: "patientId",
      });

      Patient.hasMany(models.PatientDressing, { foreignKey: "patientId" });

      Patient.hasMany(models.DoctorPatientCheckup, {
        foreignKey: "patientId",
      });

      Patient.hasMany(models.DoctorPrescription, { foreignKey: "patientId" });

      Patient.belongsToMany(models.Doctor, {
        through: "DoctorPatientCheckup",
        foreignKey: "patientId",
      });
    }
  }
  Patient.init(
    {
      cnic: DataTypes.STRING,
      name: DataTypes.STRING,
      address: DataTypes.STRING,
      phone: DataTypes.STRING,
      gender: DataTypes.ENUM("male", "female", "other"),
      age: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Patient",
    }
  );
  return Patient;
};
