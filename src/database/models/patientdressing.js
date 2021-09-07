"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class PatientDressing extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      PatientDressing.belongsTo(models.Patient, { foreignKey: "patientId" });
    }
  }
  PatientDressing.init(
    {
      patientId: DataTypes.INTEGER,
      token: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "PatientDressing",
    }
  );
  return PatientDressing;
};
