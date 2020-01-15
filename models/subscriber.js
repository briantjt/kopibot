'use strict';
module.exports = (sequelize, DataTypes) => {
  const Subscriber = sequelize.define('Subscriber', {
    chatId: DataTypes.INTEGER
  }, {});
  Subscriber.associate = function(models) {
    // associations can be defined here
    Subscriber.belongsToMany(models.Hawker, {through: 'HawkerSubscriber'})
  };
  return Subscriber;
};