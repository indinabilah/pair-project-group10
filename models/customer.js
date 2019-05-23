'use strict';
module.exports = (sequelize, DataTypes) => {
  const Customer = sequelize.define('Customer', {
    name: DataTypes.STRING,
    money: DataTypes.INTEGER
  }, {});
  Customer.associate = function(models) {
    // associations can be defined here
    Customer.hasMany(models.Order)
    // Customer.hasOne(models.Invoice)
  };
  return Customer;
};