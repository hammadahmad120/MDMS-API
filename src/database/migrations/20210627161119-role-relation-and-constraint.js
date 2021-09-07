"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction((t) => {
      return Promise.all([
        queryInterface.addConstraint(
          "Users",
          {
            fields: ["roleId"],
            type: "foreign key",
            name: "user_role_name",
            references: {
              //Required field
              table: "Roles",
              field: "id",
            },
            onDelete: "cascade", //might need to update it
          },
          { transaction: t }
        ),
        queryInterface.addConstraint(
          "Roles",
          {
            fields: ["roleName"],
            type: "unique",
            name: "unqiue_role_name",
          },
          { transaction: t }
        ),
      ]);
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction((t) => {
      return Promise.all([
        queryInterface.removeConstraint(
          "Users",
          "user_role_name",
          {},
          { transaction: t }
        ),
        queryInterface.removeConstraint(
          "Roles",
          "unqiue_role_name",
          {},
          { transaction: t }
        ),
      ]);
    });
  },
};
