'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn("Instagrams", "order", {
      type: Sequelize.STRING,
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn("Instagrams", "order")
  }
};
