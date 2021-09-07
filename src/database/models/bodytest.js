"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class BodyTest extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      BodyTest.hasMany(models.PatientTest, { foreignKey: "testId" });
    }
  }
  BodyTest.init(
    {
      testName: DataTypes.STRING,
      testPrice: DataTypes.INTEGER,
      isAvailable: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "BodyTest",
    }
  );
  return BodyTest;
};
