"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("PrescriptionDetails", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      prescriptionId: {
        type: Sequelize.INTEGER,
        references: {
          model: "DoctorPrescriptions",
          key: "id",
        },
        onDelete: "CASCADE",
      },
      medId: {
        type: Sequelize.INTEGER,
        references: {
          model: "MedicineStocks",
          key: "id",
        },
        onDelete: "SET NULL",
      },
      timesInDay: {
        type: Sequelize.INTEGER,
      },
      singleTimeQuantity: {
        type: Sequelize.DECIMAL,
      },
      totalQuantity: {
        type: Sequelize.DECIMAL,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("PrescriptionDetails");
  },
};
