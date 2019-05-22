'use strict';
module.exports = (sequelize, DataTypes) => {
  const Menu = sequelize.define('Menu', {
    name: DataTypes.STRING,
    stock: DataTypes.INTEGER,
    price: DataTypes.INTEGER
  }, {});
  Menu.associate = function(models) {
    // associations can be defined here
    Menu.hasMany(models.Order)
  };
  return Menu;
};