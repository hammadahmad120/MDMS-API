"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class PatientTest extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      PatientTest.belongsTo(models.Patient, { foreignKey: "patientId" });
      PatientTest.belongsTo(models.BodyTest, { foreignKey: "testId" });
    }
  }
  PatientTest.init(
    {
      patientId: DataTypes.INTEGER,
      testId: DataTypes.INTEGER,
      token: DataTypes.INTEGER,
      sampleCollected: DataTypes.BOOLEAN,
      description: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "PatientTest",
    }
  );
  return PatientTest;
};
