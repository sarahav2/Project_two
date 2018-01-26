'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('MPs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      MP_NUM: {
        type: Sequelize.INTEGER
      },
      NAME: {
        type: Sequelize.STRING
      },
      DATE_SEEN: {
        type: Sequelize.INTEGER
      },
      LOC: {
        type: Sequelize.STRING
      },
      SEX: {
        type: Sequelize.STRING
      },
      RACE: {
        type: Sequelize.STRING
      },
      AGE: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('MPs');
  }
};