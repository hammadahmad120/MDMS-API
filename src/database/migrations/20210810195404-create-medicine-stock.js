'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('MedicineStocks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      medName: {
        type: Sequelize.STRING
      },
      manufacturer: {
        type: Sequelize.STRING
      },
      potency: {
        type: Sequelize.STRING
      },
      medType: {
        type: Sequelize.ENUM('tablet', 'syrup', 'injection', 'dressing', 'other')
      },
      minimumUnit: {
        type: Sequelize.DECIMAL
      },
      unitPrice: {
        type: Sequelize.DECIMAL
      },
      drugQuantity: {
        type: Sequelize.DECIMAL
      },
      isInPharmacy: {
        type: Sequelize.BOOLEAN
      },
      pharmacyQuantity: {
        type: Sequelize.DECIMAL
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('MedicineStocks');
  }
};