'use strict';

const { types } = require("pg");

module.exports = {
  up:  (queryInterface, Sequelize) => {
    
    return queryInterface.addColumn('Users', 'password', Sequelize.STRING, {});

  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */

     return queryInterface.removeColumn('Users', 'password', {});
  }
};
