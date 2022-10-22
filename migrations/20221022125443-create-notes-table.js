'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('notes', 
    { 
      id: {
        type : Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement : true,
        allowNull: false
      },
      name : {
        type: Sequelize.STRING,
        allowNull: false
      },
      tittle : {
        type: Sequelize.STRING,
        allowNull: false
      },
      note : {
        type: Sequelize.TEXT,
        allowNull: false
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('notes');
  }
};
