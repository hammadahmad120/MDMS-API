'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [{
      username: "test1",
      password: "$2a$12$iAAohzb/aLOUTxXXVSdBkOeTd9bqabvBIkKE7Bpr.w3IMLnyU0Iie",
      firstName: "Umer",
      lastName: "Farooq",
      phone: "03217570170",
      address: "abc, street-xyz",
      roleId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      username: "test2",
      password: "$2a$12$iAAohzb/aLOUTxXXVSdBkOeTd9bqabvBIkKE7Bpr.w3IMLnyU0Iie",
      firstName: "Usama",
      lastName: "Ubaid",
      phone: "03217570170",
      address: "abc, street-xyz",
      roleId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      username: "test3",
      password: "$2a$12$iAAohzb/aLOUTxXXVSdBkOeTd9bqabvBIkKE7Bpr.w3IMLnyU0Iie",
      firstName: "Hammad",
      lastName: "Ahmad",
      phone: "03217570170",
      address: "abc, street-xyz",
      roleId: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      username: "test4",
      password: "$2a$12$iAAohzb/aLOUTxXXVSdBkOeTd9bqabvBIkKE7Bpr.w3IMLnyU0Iie",
      firstName: "xyz",
      lastName: "abc",
      phone: "03217570170",
      address: "abc, street-xyz",
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {})
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
