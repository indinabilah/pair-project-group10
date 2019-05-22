'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addConstraint('Orders', ['MenuId'], {
      type: 'foreign key',
      name: 'MenuId_fk',
      references: { //Required field
        table: 'Menus',
        field: 'id'
      },
      onDelete: 'set null',
      onUpdate: 'cascade'
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeConstraint('Orders', 'MenuId_fk', {})

  }
};
