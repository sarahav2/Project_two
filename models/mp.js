'use strict';
module.exports = (sequelize, DataTypes) => {
  var MP = sequelize.define('MP', {
    MP_NUM: DataTypes.INTEGER,
    NAME: DataTypes.STRING,
    DATE_SEEN: DataTypes.INTEGER,
    LOC: DataTypes.STRING,
    SEX: DataTypes.STRING,
    RACE: DataTypes.STRING,
    AGE: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return MP;
};