'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable(
      'Contacts',{
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false
        },
        name: {
          type: Sequelize.STRING,
          allowNull: false
        },
        email: {
          type: Sequelize.STRING,
          allowNull: false
        },
        phone: {
          type: Sequelize.STRING(15),
          allowNull: false
        },
        birthDate: {
          type: Sequelize.DATE,
          allowNull: false
        },
        profilePhoto: {
          type: Sequelize.TEXT,
          allowNull: false
        },
      }
    )

  },

  async down (queryInterface, Sequelize) {

  }
};
