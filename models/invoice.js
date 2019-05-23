'use strict';
const Customer = require('../models').Customer
module.exports = (sequelize, DataTypes) => {
  const Invoice = sequelize.define('Invoice', {
    CustomerId: DataTypes.INTEGER,
    CashierId: DataTypes.INTEGER,
    bill: DataTypes.INTEGER
  }, {});
  Invoice.associate = function(models) {
    // associations can be defined here
    Invoice.belongsTo(models.Customer)
    Invoice.belongsTo(models.Cashier)

  };

  Invoice.getUnassignedInvoice = function() {
    let invocelist;
    return new Promise((resolve, reject) => {
      Invoice.findAll({
        where: {
          CashierId: null,
        }
      })
      .then(data => {
        invocelist = data.map(value => value.dataValues);
        const customerList = data.map(value => value.getCustomer());
         return Promise.all(customerList)
      })
      .then(customers => {
        for (let i = 0; i < customers.length; i++) {
          invocelist[i].customerName = customers[i].name
        }
        resolve(invocelist)
      })
      .catch(err => {
        reject(err)
      })
    })
  }

  return Invoice;
};