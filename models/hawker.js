'use strict';
module.exports = (sequelize, DataTypes) => {
  const Hawker = sequelize.define('Hawker', {
    name: DataTypes.STRING,
    closeDate: DataTypes.DATE,
    address: DataTypes.STRING
  }, {});
  Hawker.associate = function(models) {
    // associations can be defined here
    Hawker.belongsToMany(models.Subscriber, {through: 'HawkerSubscriber'})
  };
  return Hawker;
};