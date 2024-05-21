'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('mahasiswas', {
      userid: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Users',
          key: 'id',
        },
      },
      nim: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      nama: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      fakultas: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      prodi: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true,
      },
      alamat: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      tempatlahir: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      tanggallahir: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      agama: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      jeniskelamin: {
        type: Sequelize.STRING,
        allowNull: true,
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('mahasiswas');
  }
};