/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Colors', [
      {
        name: '#FFFFFF',
      },
      {
        name: '#FFFF00',
      },
      {
        name: '#8B00FF',
      },
      {
        name: '#FF47CA',
      },
      {
        name: '#7CFC00',
      },
      {
        name: '#00BFFF',
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
    await queryInterface.bulkDelete('Colors', null, {});
  },
};
