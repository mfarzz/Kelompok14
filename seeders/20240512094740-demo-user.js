'use strict';
const bcrypt = require("bcrypt")
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "users",[
        {
          email: "2211523034_muhammad@student.unand.ac.id",
          password: await bcrypt.hash("fariz1504", 10),
          role: "user",
          createdAt: new Date(),
          updatedAt: new Date()
        },
      ]
    )
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("users", null,{})
  }
};
