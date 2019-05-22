'use strict';
module.exports = (sequelize, DataTypes) => {
  const Invoice = sequelize.define('Invoice', {
    CustomerId: DataTypes.INTEGER,
    CashierId: DataTypes.INTEGER,
    bill: DataTypes.INTEGER
  }, {});
  Invoice.associate = function(models) {
    // associations can be defined here
  };
  return Invoice;
};