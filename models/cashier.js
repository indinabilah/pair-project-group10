'use strict';
module.exports = (sequelize, DataTypes) => {
  const Cashier = sequelize.define('Cashier', {
    username: DataTypes.STRING,
    password: DataTypes.STRING
  }, {});
  Cashier.associate = function(models) {
    // associations can be defined here
    Cashier.hasMany(models.Invoice)
  };
  return Cashier;
};