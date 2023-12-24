const Sequelize = require('sequelize')

const sequelize = new Sequelize('gpa-db', 'root', 'mypassword', {dialect:'mysql', host:'localhost'})


module.exports = sequelize