'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Roles', [{
      roleName: "admin",
      isActivated: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      roleName: "cashier",
      isActivated: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      roleName: "pharmacist",
      isActivated: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {})
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Roles', null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
