"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("PatientTests", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      patientId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Patients",
          key: "id",
        },
        onDelete: "SET NULL",
      },
      testId: {
        type: Sequelize.INTEGER,
        references: {
          model: "BodyTests",
          key: "id",
        },
        onDelete: "SET NULL",
      },
      token: {
        type: Sequelize.INTEGER,
      },
      sampleCollected: {
        type: Sequelize.BOOLEAN,
      },
      description: {
        type: Sequelize.TEXT,
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
    await queryInterface.dropTable("PatientTests");
  },
};
