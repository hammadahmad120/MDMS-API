"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("MedicineBatchStocks", {
      id: {
        autoIncrement: true,
        type: Sequelize.INTEGER,
      },
      batchNum: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
      },
      medId: {
        type: Sequelize.INTEGER,
        references: {
          model: "MedicineStocks",
          key: "id",
        },
        onDelete: "SET NULL",
      },
      expenseId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Expenses",
          key: "id",
        },
        onDelete: "SET NULL",
      },
      manuDate: {
        type: Sequelize.DATE,
      },
      expiryDate: {
        type: Sequelize.DATE,
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
    await queryInterface.dropTable("MedicineBatchStocks");
  },
};
