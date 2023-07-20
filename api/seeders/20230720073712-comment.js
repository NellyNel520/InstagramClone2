'use strict';
/** @type {import('sequelize-cli').Migration} */

const falso = require('@ngneat/falso')
const comments = [...Array(150)].map(() => ({
  content: falso.randPhrase(),
  userId: falso.randNumber({min:1, max:50}),
  postId: falso.randNumber({min:1, max:100}),
  likeCount: falso.randNumber({min:0, max:50}),
  createdAt: new Date(),
  updatedAt: new Date()
}))

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('comments', comments)
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('comments')
  }
};