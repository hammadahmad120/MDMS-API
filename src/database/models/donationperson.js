"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class DonationPerson extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      DonationPerson.hasMany(models.Donation, {
        foreignKey: "donationBy",
      });
    }
  }
  DonationPerson.init(
    {
      cnic: DataTypes.STRING,
      name: DataTypes.STRING,
      address: DataTypes.STRING,
      phone: DataTypes.STRING,
      gender: DataTypes.ENUM("male", "female", "other"),
      company: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "DonationPerson",
    }
  );
  return DonationPerson;
};
