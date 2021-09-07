"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Doctor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Doctor.belongsTo(models.User, {
        foreignKey: "userId",
      });

      Doctor.hasMany(models.DoctorPatientCheckup, {
        foreignKey: "doctorId",
      });

      Doctor.hasMany(models.DoctorPrescription, { foreignKey: "doctorId" });

      Doctor.belongsToMany(models.Patient, {
        through: "DoctorPatientCheckup",
        foreignKey: "doctorId",
      });
    }
  }
  Doctor.init(
    {
      userId: DataTypes.INTEGER,
      specialities: DataTypes.ARRAY(DataTypes.STRING),
      timings: DataTypes.JSON,
    },
    {
      sequelize,
      modelName: "Doctor",
    }
  );
  return Doctor;
};
