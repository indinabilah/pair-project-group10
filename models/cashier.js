'use strict';
const bcrypt = require('bcryptjs')

module.exports = (sequelize, DataTypes) => {
  const Cashier = sequelize.define('Cashier', {
    username: {
      type: DataTypes.STRING,
      unique: true
    },
    password: DataTypes.STRING
  }, {});

  Cashier.associate = function(models) {
    // associations can be defined here
    Cashier.hasMany(models.Invoice)
  };

  Cashier.addHook('beforeCreate', 'genHashPassword', cashier => {
    console.log(`Cashier create Hook executed`);
    const hash = bcrypt.hashSync(cashier.password, 10);
    cashier.password = hash;
  })
  return Cashier;
};