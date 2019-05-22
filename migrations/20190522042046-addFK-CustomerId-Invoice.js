'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addConstraint('Invoices', ['CustomerId'], {
      type: 'foreign key',
      name: 'CustomerId_fk',
      references: { //Required field
        table: 'Customers',
        field: 'id'
      },
      onDelete: 'set null',
      onUpdate: 'cascade'
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeConstraint('Invoices', 'CustomerId_fk', {})

  }
};
