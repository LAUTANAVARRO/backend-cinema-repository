'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Cinemas', [
      {
        name: 'Cine Gamumont',
        address: 'Por el centro',
        description: 'Alto cine ;)',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Village Recoleta',
        address: 'Por Recoleta',
        description: 'Tenemos las mejores pelis',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Showcase cinemas',
        address: 'Por Belgrano',
        description: 'Sumate al viaje',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {})
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Cinemas', null, {})
  }
};
