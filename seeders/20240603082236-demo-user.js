"use strict";
const bcrypt = require("bcrypt");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "fakultas",
      [
        {
          email: "fti@unand.ac.id",
          password_fakultas: await bcrypt.hash("123456", 10),
          role: "fakultas",
          nama_fakultas: "FTI",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          email: "feb@unand.ac.id",
          password_fakultas: await bcrypt.hash("123456", 10),
          role: "fakultas",
          nama_fakultas: "FEB",
          createdAt: new Date(),
          updatedAt: new Date()
        },
      ],
      {}
    );

    await queryInterface.bulkInsert(
      "prodis",
      [
        {
          kode_prodi:"SI001",
          kode_fakultas:"fti@unand.ac.id",
          email_prodi: "si@fti.unand.ac.id",
          nama_prodi: "Sistem Informasi",
          akreditasi: "A",
          password_prodi: await bcrypt.hash("123456", 10),
          role: "prodi",
          createdAt: new Date(),
          updatedAt: new Date()
        },
      ],
      {}
    );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("fakultas", null, {});
    await queryInterface.bulkDelete("prodis", null, {});
  }
};
