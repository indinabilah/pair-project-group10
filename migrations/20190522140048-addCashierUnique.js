'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addConstraint('Cashiers', ['username'], {
      type: 'unique',
      name: 'username_unique'
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeConstraint('Cashiers', 'username_unique', {});
  }
};
