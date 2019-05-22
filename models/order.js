'use strict';
module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    CustomerId: DataTypes.INTEGER,
    MenuId: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER
  }, {});
  Order.associate = function(models) {
    // associations can be defined here
    Order.belongsTo(models.Customer)
    Order.belongsTo(models.Menu)

  };
  return Order;
};