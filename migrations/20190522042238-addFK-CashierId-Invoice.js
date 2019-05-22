'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addConstraint('Invoices', ['CashierId'], {
      type: 'foreign key',
      name: 'CashierId_fk',
      references: { //Required field
        table: 'Cashiers',
        field: 'id'
      },
      onDelete: 'set null',
      onUpdate: 'cascade'
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeConstraint('Invoices', 'CashierId_fk', {})

  }
};
