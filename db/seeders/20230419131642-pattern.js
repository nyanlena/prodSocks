/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Patterns', [
      {
        name: './../images/dots.png',
      },
      {
        name: './../images/net.png',
      },
      {
        name: './../images/stars.png',
      },
      {
        name: './../images/figures.png',
      },

    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Patterns', null, {});
  },
};
