'use strict';
/** @type {import('sequelize-cli').Migration} */

const falso = require('@ngneat/falso')
const users = [...Array(50)].map(() => ({
  username: falso.randUserName(),
  fullName: falso.randFullName(),
  email: falso.randEmail(),
  passwordDigest: falso.randPassword(),
  birthDate: falso.randBetweenDate({ from: new Date('01/01/1950'), to: new Date('12/31/2015') }),
  profilePic: falso.randImg(), 
  city: falso.randCity(),
  state: falso.randState(),
  country: 'United States',
  bio: falso.randPhrase(),
  createdAt: new Date(),
  updatedAt: new Date()

}))

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', users)
  },

  down: async (queryInterface, Sequelize) => {
    
    return queryInterface.bulkDelete('users')
  }
};
