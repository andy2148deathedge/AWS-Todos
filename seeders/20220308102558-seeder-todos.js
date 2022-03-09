'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    let nameItem = ['吃飯', '看電視', '洗澡', '刷牙', '睡覺'];
    
    await queryInterface.bulkInsert('Todos', 
      nameItem.map((e) => ({
        name: `${e}`,
        isDone: false,
        createdAt: new Date(),
        updatedAt: new Date() 
      })) , {});
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Todos', null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
