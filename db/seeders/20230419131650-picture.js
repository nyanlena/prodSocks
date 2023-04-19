/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Pictures', [
      {
        name: './../images/cactus.png',
      },
      {
        name: './../images/duck.png',
      },
      {
        name: './../images/lama.png',
      },
      {
        name: './../images/yoda.png',
      },

    ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Pictures', null, {});
  },
};
