'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        name: 'Rizki Candra',
        phone: "08123213423",
        email: "rizkicandra@mail.com",
        identityNumber: "23132134",
        role: "Super Admin",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Luthfi Muhaimin',
        phone: "08123456677",
        email: "luthfimhmn@mail.com",
        identityNumber: "234567",
        role: "Super Admin",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
