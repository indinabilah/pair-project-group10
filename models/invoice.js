'use strict';
module.exports = (sequelize, DataTypes) => {
  const Invoice = sequelize.define('Invoice', {
    CustomerId: DataTypes.INTEGER,
    CashierId: DataTypes.INTEGER,
    bill: DataTypes.INTEGER
  }, {});
  Invoice.associate = function(models) {
    // associations can be defined here
    Invoice.hasOne(models.Customer)
    Invoice.belongsTo(models.Cashier)

  };
  return Invoice;
};