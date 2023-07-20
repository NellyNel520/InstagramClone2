'use strict';
/** @type {import('sequelize-cli').Migration} */

const falso = require('@ngneat/falso')
const posts = [...Array(100)].map(() => ({
  userId: falso.randNumber({ min: 1, max: 50 }),
  caption: falso.randQuote(),
  likeCount: falso.randNumber({ min: 0, max: 100 }),
  image: falso.randImg(),
  createdAt: new Date(),
  updatedAt: new Date(),
}))

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('posts', posts)
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('posts')
  }
};
