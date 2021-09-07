"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Fees", {
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
      token: {
        type: Sequelize.INTEGER,
      },
      feeType: {
        type: Sequelize.ENUM("checkup", "test", "dressing", "other"),
      },
      feeAmount: {
        type: Sequelize.INTEGER,
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
    await queryInterface.dropTable("Fees");
  },
};
