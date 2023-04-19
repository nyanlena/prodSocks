/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Socks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      color_id: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'Colors',
          },
          key: 'id',
        },
      },
      pattern_id: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'Patterns',
          },
          key: 'id',
        },
      },
      picture_id: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'Pictures',
          },
          key: 'id',
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now'),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now'),
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Socks');
  },
};
