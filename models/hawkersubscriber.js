'use strict';
module.exports = (sequelize, DataTypes) => {
  const HawkerSubscriber = sequelize.define('HawkerSubscriber', {
    subscriberId: DataTypes.INTEGER,
    hawkerId: DataTypes.INTEGER
  }, {});
  HawkerSubscriber.associate = function(models) {
    // associations can be defined here
  };
  return HawkerSubscriber;
};